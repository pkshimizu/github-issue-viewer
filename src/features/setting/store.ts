import { createSlice } from '@reduxjs/toolkit'

type State = {
  accessToken?: string
}

export const InitialState: State = {}

export const Slice = createSlice({
  name: 'setting',
  initialState: InitialState,
  reducers: {},
})
