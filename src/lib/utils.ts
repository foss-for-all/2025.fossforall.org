import { clsx, type ClassValue } from "clsx";
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
