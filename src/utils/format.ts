export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImgSize(url: string, x: number, y: number = x) {
  return url + `?param=${x}y${y}`
}

// 格式化播放时间
export function formatPlayTime(time: number) {
  const timeSecond = time / 1000

  const minute = Math.floor(timeSecond / 60)
  const second = Math.floor(timeSecond) % 60

  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}
