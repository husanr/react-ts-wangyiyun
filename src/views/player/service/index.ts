import apiRequest from '@/service'

// 获取当前歌曲信息
export function getCurrentSongDetail(ids: number) {
  return apiRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 获取歌词
export function getSongLyric(id: number) {
  return apiRequest.get({
    url: 'lyric',
    params: {
      id
    }
  })
}
