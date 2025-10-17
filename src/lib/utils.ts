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
    const lastByte = slicedBytes[slicedBytes.length - 1];

    // Check if this is a continuation byte (10xxxxxx) or the last byte of a multi-byte sequence
    // If it's a start byte (0xxxxxxx for ASCII, or 11xxxxxx for multi-byte), we're safe
    if ((lastByte & 0xC0) === 0x80) {
      // This is a continuation byte, we might be in the middle of a sequence
      slicedBytes = slicedBytes.slice(0, -1);
      continue;
    }

    // Count how many bytes this character should have based on the start byte
    let expectedLength = 1;
    if ((lastByte & 0x80) === 0) {
      expectedLength = 1; // ASCII
    } else if ((lastByte & 0xE0) === 0xC0) {
      expectedLength = 2; // 2-byte character
    } else if ((lastByte & 0xF0) === 0xE0) {
      expectedLength = 3; // 3-byte character (common for CJK)
    } else if ((lastByte & 0xF8) === 0xF0) {
      expectedLength = 4; // 4-byte character
    }

    // Check if we have all the bytes for this character
    let charStart = slicedBytes.length - 1;
    while (charStart > 0 && (slicedBytes[charStart - 1] & 0xC0) === 0x80) {
      charStart--;
    }

    if (slicedBytes.length - charStart < expectedLength) {
      // Incomplete character at the end, remove it
      slicedBytes = slicedBytes.slice(0, charStart);
    } else {
      // Complete sequence, we're done
      break;
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
