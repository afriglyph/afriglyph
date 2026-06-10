export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  if (path.startsWith('/#')) {
    return `${base.replace(/\/$/, '')}${path.slice(1)}`;
  }
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}
