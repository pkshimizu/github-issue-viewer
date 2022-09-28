import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

type State = {
  accessToken?: string
}

export const InitialState: State = {}

export const Actions = {}

export const Slice = createSlice({
  name: 'setting',
  initialState: InitialState,
  reducers: {
    saveAccessToken: (state: State, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
  },
})
