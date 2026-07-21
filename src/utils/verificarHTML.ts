export function isContentEmpty(html: string) {
  const text = html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, "")
    .trim();

  return text.length === 0;
}
