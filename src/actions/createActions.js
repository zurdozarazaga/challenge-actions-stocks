import { createAsyncThunk } from '@reduxjs/toolkit'
import { getStocksAll } from '../service/api/getStocksAll'
import { createAction } from '@reduxjs/toolkit'

export const addStock = createAction('stocks/addStock')
export const deleteStock = createAction('stocks/deleteStock')

export const getStockAllAction = createAsyncThunk('stocks/getStocksAll', async () => {
  const dataStocks = await getStocksAll()
  console.log('createAsyncThunk', dataStocks)
  return dataStocks
})