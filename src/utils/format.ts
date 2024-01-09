export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImgSize(url: string, x: number, y: number = x) {
  return url + `?param=${x}x${y}`
}
