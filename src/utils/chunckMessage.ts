export function chunkMessage(text: string, size = 1900): string[] {
  const chunks: string[] = [];
  let current = "";

  for (const line of text.split("\n")) {
    if ((current + line).length > size) {
      chunks.push(current);
      current = "";
    }

    current += line + "\n";
  }

  if (current.trim()) {
    chunks.push(current);
  }

  return chunks;
}
