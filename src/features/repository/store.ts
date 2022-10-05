import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRepositories } from '@/features/repository/apis'
import { Repository } from '@/features/repository/types'

type RepositoryState = {
  repositories: Repository[]
}

export const InitialRepositoryState: RepositoryState = {
  repositories: [],
}

export const RepositoryActions = {
  loadRepositories: createAsyncThunk('repository/loadRepositories', async (accessToken: string) => {
    return await getRepositories(accessToken)
  }),
}

export const RepositorySlice = createSlice({
  name: 'repository',
  initialState: InitialRepositoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RepositoryActions.loadRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload
    })
  },
})
