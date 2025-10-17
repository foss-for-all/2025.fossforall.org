import { clsx, type ClassValue } from "clsx";
import { marked } from "marked";

export function sliceStringByBytes(
  str: string | undefined,
  startByte: number,
  endByte: number,
) {
  if (!str) return "";

  const encoder = new TextEncoder();
  const encoded = encoder.encode(str); // Encodes the string to UTF-8 bytes (Uint8Array)

  let slicedBytes = encoded.slice(startByte, endByte);

  // Handle incomplete UTF-8 sequences (important for CJK characters)
  // Remove trailing bytes that are part of an incomplete character
  while (slicedBytes.length > 0) {
    // Find the start of the last character by going backwards
    let charStart = slicedBytes.length - 1;

    // Skip continuation bytes (10xxxxxx) to find the character's start byte
    while (charStart > 0 && (slicedBytes[charStart] & 0xC0) === 0x80) {
      charStart--;
    }

    const startByte = slicedBytes[charStart];

    // Determine how many bytes this character should have based on the start byte
    let expectedLength = 1;
    if ((startByte & 0x80) === 0) {
      expectedLength = 1; // 0xxxxxxx - ASCII
    } else if ((startByte & 0xE0) === 0xC0) {
      expectedLength = 2; // 110xxxxx - 2-byte character
    } else if ((startByte & 0xF0) === 0xE0) {
      expectedLength = 3; // 1110xxxx - 3-byte character (common for CJK)
    } else if ((startByte & 0xF8) === 0xF0) {
      expectedLength = 4; // 11110xxx - 4-byte character
    }

    // Check if we have all the bytes for this character
    const charLength = slicedBytes.length - charStart;
    if (charLength === expectedLength) {
      // Complete character, we're done
      break;
    } else {
      // Incomplete character at the end, remove it
      slicedBytes = slicedBytes.slice(0, charStart);
    }
  }

  const decoder = new TextDecoder();
  return decoder.decode(slicedBytes); // Decodes the sliced bytes back to a string
}

export async function renderMarkdown(markdown: string | undefined): Promise<string> {
  if (!markdown) return "";
  try {
    const html = await marked(markdown);
    return html;
  } catch (error) {
    console.error("Error rendering markdown:", error);
    return markdown; // Fallback to raw text if rendering fails
  }
}

export function stripHtmlTags(html: string | undefined): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}
