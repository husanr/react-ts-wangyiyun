import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getRanking,
  getSingers
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
  async (args: any, { dispatch }) => {
    const res = await getHotRecommend({ limit: args.limit })
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
export const fetchSingersThunk = createAsyncThunk(
  'singers',
  async (args: any, { dispatch }) => {
    const res = await getSingers({ limit: args.limit })
    console.log(res)
    dispatch(getSettleSingersAction(res.artists))
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
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
    },
    getSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})

export const {
  getBannersAction,
  getHotRecommendAction,
  getNewAlbumAction,
  getRankingAction,
  getSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
