import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service'

export const fetchBannerThunk = createAsyncThunk(
  'banners',
  async (_, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(getBannersAction(res.banners))
  }
)

interface IState {
  banners: any[]
}

const initialState: IState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    getBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { getBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
