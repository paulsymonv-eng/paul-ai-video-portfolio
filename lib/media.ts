export function hasMedia(src?: string): src is string {
  return Boolean(src && src.trim().length > 0);
}

export function videoMimeType(src: string) {
  const lower = src.toLowerCase().split("?")[0] ?? "";

  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".ogv") || lower.endsWith(".ogg")) return "video/ogg";

  return "video/mp4";
}
