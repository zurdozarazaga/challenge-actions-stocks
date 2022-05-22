import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStocksAll } from '../service/api/getStocksAll'
import { createAction } from '@reduxjs/toolkit'

export const stockSelected = createAction('stocks/stockSelected')

export const getStockAllAction = createAsyncThunk('stocks/getStocksAll', async () => {
  const dataStocks = await getStocksAll()
  console.log('createAsyncThunk', dataStocks)
  return dataStocks
})