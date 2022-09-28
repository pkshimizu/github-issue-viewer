import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getAuthentication } from '@/features/settings/apis'

import type { Authentication } from '@/features/settings/types'
import type { PayloadAction } from '@reduxjs/toolkit'

type SettingsState = {
  accessToken?: string
  authentication?: Authentication | null
}

export const InitialSettingsState: SettingsState = {}

export const SettingsActions = {
  authenticate: createAsyncThunk('settings/authenticate', async (accessToken: string) => {
    return await getAuthentication(accessToken)
  }),
}

export const SettingsSlice = createSlice({
  name: 'setting',
  initialState: InitialSettingsState,
  reducers: {
    saveAccessToken: (state: SettingsState, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SettingsActions.authenticate.pending, (state) => {
      state.authentication = undefined
    })
    builder.addCase(SettingsActions.authenticate.fulfilled, (state, action) => {
      state.authentication = action.payload
    })
    builder.addCase(SettingsActions.authenticate.rejected, (state) => {
      state.authentication = null
    })
  },
})
