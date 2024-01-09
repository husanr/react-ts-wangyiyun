import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service'

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
    console.log(res)
    dispatch(getNewAlbumAction(res.albums))
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: [],
  newAlbums: []
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
    }
  }
})

export const { getBannersAction, getHotRecommendAction, getNewAlbumAction } =
  recommendSlice.actions
export default recommendSlice.reducer
