export default function pagesImageLoader({ src }: { src: string }) {
  const base = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    (base && src.startsWith(base))
  ) {
    return src;
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}
