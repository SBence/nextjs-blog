export function readTime(text: string, wordsPerMinute = 200) {
  const wordCount = text.trim().split(/\s+/).length;
  const readTime = wordCount / wordsPerMinute;
  return Math.ceil(readTime);
}
