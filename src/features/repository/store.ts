import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getLabels, getRepositories } from '@/features/repository/apis'
import { Label, Repository } from '@/features/repository/types'

type RepositoryState = {
  repositories: Repository[]
  labels: {
    organizationName: string
    repositoryName: string
    labels: Label[]
  }[]
}

export const InitialRepositoryState: RepositoryState = {
  repositories: [],
  labels: [],
}

export const RepositoryActions = {
  loadRepositories: createAsyncThunk('repository/loadRepositories', async (accessToken: string) => {
    return await getRepositories(accessToken)
  }),
  loadLabels: createAsyncThunk(
    'repository/loadLabels',
    async (params: { accessToken: string; organizationName: string; repositoryName: string }) => {
      const labels = await getLabels(
        params.accessToken,
        params.organizationName,
        params.repositoryName,
      )
      return {
        organizationName: params.organizationName,
        repositoryName: params.repositoryName,
        labels,
      }
    },
  ),
}

export const RepositorySlice = createSlice({
  name: 'repository',
  initialState: InitialRepositoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(RepositoryActions.loadRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload
    })
    builder.addCase(RepositoryActions.loadLabels.fulfilled, (state, action) => {
      const repositoryLabels = state.labels.find(
        (item) =>
          item.organizationName === action.payload.organizationName &&
          item.repositoryName === action.payload.repositoryName,
      )
      if (repositoryLabels) {
        repositoryLabels.labels = action.payload.labels
      } else {
        state.labels.push({
          organizationName: action.payload.organizationName,
          repositoryName: action.payload.repositoryName,
          labels: action.payload.labels,
        })
      }
    })
  },
})
