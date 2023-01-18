export function normalizeClassName(s) {
  let out = s.toLowerCase()
  out = out.replaceAll(' ', '')
  return out
}
