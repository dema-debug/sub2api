export function getBasePath(): string {
  const base = import.meta.env.BASE_URL || '/'

  if (!base || base === '/') {
    return ''
  }

  return base.endsWith('/') ? base.slice(0, -1) : base
}

export function withBasePath(path: string): string {
  const base = getBasePath()

  if (!path) {
    return base || '/'
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
