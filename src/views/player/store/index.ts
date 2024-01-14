import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentSongDetail, getSongLyric } from '../service'
import { ILyric, parseLyric } from '@/utils/player'
import type { RootState } from '@/store'

interface IThunkState {
  state: RootState
}

export const fetchCurrentSongDetailThunk = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSongDetail', (id, { dispatch, getState }) => {
  const playList = getState().player.playList
  const findIndex = playList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 没有在播放列表中找到 请求数据添加在播放列表中
    getCurrentSongDetail(id).then((res: any) => {
      if (!res.songs.length) return

      const song = res.songs[0]
      const newPlayList = [...playList]
      newPlayList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlayListAction(newPlayList))
      dispatch(changePlayListIndexAction(newPlayList.length - 1))
    })
  } else {
    // 找到了就直接取出
    const song = playList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlayListIndexAction(findIndex))
  }

  getSongLyric(id).then((res) => {
    // console.log(res)
    const lyric = parseLyric(res.lrc.lyric)
    dispatch(changeLyricsAction(lyric))
  })
})

// 切换歌曲
export const changeMusicThunk = createAsyncThunk<void, boolean, IThunkState>(
  'changMusic',
  (isNext, { dispatch, getState }) => {
    const { playList, playListIndex, playMode } = getState().player
    let newIndex = -1
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * playList.length)
    } else {
      // 单曲或循环
      newIndex = isNext ? playListIndex + 1 : playListIndex - 1
      if (newIndex > playList.length - 1) newIndex = 0
      if (newIndex < 0) newIndex = playList.length - 1
    }

    const song = playList[newIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlayListIndexAction(newIndex))
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playList: any[]
  playListIndex: number
  playMode: number // 0 列表循环 1 随机播放 2 单曲循环
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playList: [
    {
      name: '温柔',
      id: 386538,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 1,
      v: 79,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p2.music.126.net/XlMYABTsvXGxOn0h9F61VQ==/109951168750902183.jpg',
        tns: [],
        pic_str: '109951168750902183',
        pic: 109951168750902180
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63966,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61383,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59695,
        sr: 44100
      },
      sq: {
        br: 1053726,
        fid: 0,
        size: 35536923,
        vd: -64088,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 79,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 684010,
      mv: 10929721,
      publishTime: 1049126400000
    },
    {
      name: '逆光 (live)',
      id: 2116492838,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 2124,
          name: '陈楚生',
          tns: [],
          alias: []
        },
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 183008406,
        name: '声生不息·家年华 第7期',
        picUrl:
          'https://p2.music.126.net/ZaTp-I6C2LzDZUYMlBST3g==/109951169251606657.jpg',
        tns: [],
        pic_str: '109951169251606657',
        pic: 109951169251606660
      },
      dt: 285450,
      h: {
        br: 320000,
        fid: 0,
        size: 11420205,
        vd: -50484,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6852141,
        vd: -47891,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4568109,
        vd: -46202,
        sr: 48000
      },
      sq: {
        br: 986985,
        fid: 0,
        size: 35216962,
        vd: -50581,
        sr: 48000
      },
      hr: {
        br: 1756527,
        fid: 0,
        size: 62675232,
        vd: -50459,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 4,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 287057,
        name: '逆光',
        artists: [
          {
            id: 9272,
            name: '孙燕姿'
          }
        ],
        albumMeta: {
          id: 28520,
          name: '逆光'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 0,
      publishTime: 0
    }
  ],
  playListIndex: -1,
  playMode: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    },
    changePlayListIndexAction(state, { payload }) {
      state.playListIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayListAction,
  changePlayListIndexAction,
  changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
