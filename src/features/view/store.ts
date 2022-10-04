import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRepositories } from '@/features/view/apis'
import { Repository } from '@/features/view/types'

type ViewState = {
  repositories: Repository[]
}

export const InitialViewState: ViewState = {
  repositories: [],
}

export const ViewActions = {
  loadRepositories: createAsyncThunk('view/loadRepositories', async (accessToken: string) => {
    return await getRepositories(accessToken)
  }),
}

export const ViewSlice = createSlice({
  name: 'view',
  initialState: InitialViewState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ViewActions.loadRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload
    })
  },
})
