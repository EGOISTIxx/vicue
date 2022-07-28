export const truncateString = (
  string: string,
  maxLength: number = 140
) => {
  return string.length > maxLength
    ? string.slice(0, maxLength - 1) + '...'
    : string
}
