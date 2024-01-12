export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 歌词格式转换
export interface ILyric {
  time: number
  text: string
}
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyric: string) {
  const lines: string[] = lyric.split('\n')
  const lyrics: ILyric[] = []

  for (const line of lines) {
    const res = timeRegExp.exec(line)
    if (!res) continue
    const time1 = Number(res[1]) * 60 * 1000
    const time2 = Number(res[2]) * 1000
    const time3 = res[3].length === 3 ? Number(res[3]) : Number(res[3]) * 10
    const time = time1 + time2 + time3
    const text = line.replace(timeRegExp, '')
    // console.log({ time, text })
    lyrics.push({ time, text })
  }

  return lyrics
}
