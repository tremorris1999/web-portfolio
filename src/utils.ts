export const toQueryString = (params: any) => {
  const esc = encodeURIComponent
  return Object.keys(params)
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&')
}

export const openLink = (url: string) => window.open(url, '_blank')
