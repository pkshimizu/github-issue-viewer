import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getAuthentication } from '@/features/settings/apis'

import type { Authentication } from '@/features/settings/types'
import type { PayloadAction } from '@reduxjs/toolkit'

type State = {
  accessToken?: string
  authentication?: Authentication | null
}

export const InitialState: State = {}

export const Actions = {
  authenticate: createAsyncThunk('systems/authenticate', async (accessToken: string) => {
    return await getAuthentication(accessToken)
  }),
}

export const Slice = createSlice({
  name: 'setting',
  initialState: InitialState,
  reducers: {
    saveAccessToken: (state: State, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Actions.authenticate.pending, (state) => {
      state.authentication = undefined
    })
    builder.addCase(Actions.authenticate.fulfilled, (state, action) => {
      state.authentication = action.payload
    })
    builder.addCase(Actions.authenticate.rejected, (state) => {
      state.authentication = null
    })
  },
})
