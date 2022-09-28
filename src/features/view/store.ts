import { createSlice } from '@reduxjs/toolkit'

type ViewState = {}

export const InitialViewState: ViewState = {}

export const ViewSlice = createSlice({
  name: 'view',
  initialState: InitialViewState,
  reducers: {},
})
