import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getRanking
} from '../service'

export const fetchBannerThunk = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    // console.log(res)
    dispatch(getBannersAction(res.banners))
  }
)
export const fetchHotRecommendThunk = createAsyncThunk(
  'hot-recommend',
  async (_, { dispatch }) => {
    const res = await getHotRecommend({ limit: 8 })
    // console.log(res)
    dispatch(getHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumThunk = createAsyncThunk(
  'new-album',
  async (_, { dispatch }) => {
    const res = await getNewAlbum()
    // console.log(res)
    dispatch(getNewAlbumAction(res.albums))
  }
)
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingThunk = createAsyncThunk(
  'ranking',
  async (_, { dispatch }) => {
    const promise: Promise<any>[] = []
    for (const id of rankingIds) {
      promise.push(getRanking({ id }))
    }

    Promise.all(promise).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(getRankingAction(playlists))
    })
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  rankings: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  rankings: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    getBannersAction(state, { payload }) {
      state.banners = payload
    },
    getHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    getNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    getRankingAction(state, { payload }) {
      state.rankings = payload
    }
  }
})

export const {
  getBannersAction,
  getHotRecommendAction,
  getNewAlbumAction,
  getRankingAction
} = recommendSlice.actions
export default recommendSlice.reducer
