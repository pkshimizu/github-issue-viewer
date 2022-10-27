import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Issue } from '@/features/issue/types'

type IssueState = {
  repositoryIssues: {
    organizationName: string
    repositoryName: string
    issues: Issue[]
  }[]
}

export const InitialIssueState: IssueState = {
  repositoryIssues: [],
}

export const IssueActions = {
  loadIssues: createAsyncThunk(
    'issue/loadIssues',
    async (params: { organizationName: string; repositoryName: string; accessToken: string }) => {
      return {
        organizationName: params.organizationName,
        repositoryName: params.repositoryName,
        issues: [],
      }
    },
  ),
}

export const IssueSlice = createSlice({
  name: 'issue',
  initialState: InitialIssueState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(IssueActions.loadIssues.fulfilled, (state, action) => {
      const result = state.repositoryIssues.find(
        (item) =>
          item.organizationName === action.payload.organizationName &&
          item.repositoryName === action.payload.repositoryName,
      )
      if (result) {
        result.issues = action.payload.issues
      } else {
        state.repositoryIssues.push({
          organizationName: action.payload.organizationName,
          repositoryName: action.payload.repositoryName,
          issues: action.payload.issues,
        })
      }
    })
  },
})
