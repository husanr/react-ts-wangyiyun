import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    counter: 100
  },
  reducers: {
    // 加法
    incrementAction(state, { payload }) {
      state.counter = state.counter + payload
    },
    // 减法
    decrementAction(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})

export const { incrementAction, decrementAction } = homeSlice.actions

export default homeSlice.reducer
