import { createSlice } from '@reduxjs/toolkit'
import { getStockAllAction } from '../actions/createActions'

const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    loading: false,
    error: null,
    stocks: [],
    stock: [],
  },
  reducers: {
    stockSelected: (state, {payload}) => {
      state.stock = [...state.stock,payload]
  },
  },
  extraReducers: {
    [getStockAllAction.pending]: (state) => {
      state.loading = true
    },
    [getStockAllAction.fulfilled]: (state, { payload }) => {
      // console.log('payload in aboutSlice', payload)
      state.loading = false
      state.stocks = payload.data
    },
    [getStockAllAction.rejected]: (state) => {
      state.error = false
    },
  },
})

// eslint-disable-next-line import/prefer-default-export
export const { setAbout } = stocksSlice.actions

export default stocksSlice.reducer
