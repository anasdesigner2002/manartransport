export function setPageMetadata(title: string, description: string) {
  document.title = `${title} | Manar Transport`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
}
