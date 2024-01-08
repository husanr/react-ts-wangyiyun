import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service'

export const fetchBannerThunk = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(getBannersAction(res.banners))
  }
)
export const fetchHotRecommendThunk = createAsyncThunk(
  'hot-recommend',
  async (_, { dispatch }) => {
    const res = await getHotRecommend({ limit: 8 })
    console.log(res)
    dispatch(getHotRecommendAction(res.result))
  }
)

interface IState {
  banners: any[]
  hotRecommend: any[]
}

const initialState: IState = {
  banners: [],
  hotRecommend: []
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
    }
  }
})

export const { getBannersAction, getHotRecommendAction } =
  recommendSlice.actions
export default recommendSlice.reducer
