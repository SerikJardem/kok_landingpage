"use client";

export default function pagesImageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const base = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    (base && src.startsWith(base))
  ) {
    return appendWidth(src, width);
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  return appendWidth(`${base}${path}`, width);
}

function appendWidth(url: string, width: number) {
  const join = url.includes("?") ? "&" : "?";
  return `${url}${join}w=${width}`;
}
