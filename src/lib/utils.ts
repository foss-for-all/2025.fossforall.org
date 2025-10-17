import { clsx, type ClassValue } from "clsx";
import { marked } from "marked";

export function sliceStringByBytes(
  str: string | undefined,
  startByte: number,
  endByte: number,
) {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(str); // Encodes the string to UTF-8 bytes (Uint8Array)

  const slicedBytes = encoded.slice(startByte, endByte);

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
