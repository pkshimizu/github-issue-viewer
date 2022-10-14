import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ViewSettings } from '@/features/view/types'

const shortid = require('shortid')

type ViewState = {
  viewSettingsList: ViewSettings[]
}

export const InitialViewState: ViewState = {
  viewSettingsList: [],
}

export const ViewActions = {
  saveView: createAsyncThunk(
    'view/saveView',
    (params: { organizationName: string; repositoryName: string }) => {
      return params
    },
  ),
}

export const ViewSlice = createSlice({
  name: 'view',
  initialState: InitialViewState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ViewActions.saveView.fulfilled, (state, action) => {
      const currentSettings = state.viewSettingsList.find(
        (item) =>
          item.organizationName === action.payload.organizationName &&
          item.repositoryName === action.payload.repositoryName,
      )
      if (currentSettings) {
        currentSettings.organizationName = action.payload.organizationName
        currentSettings.repositoryName = action.payload.repositoryName
      } else {
        state.viewSettingsList.push({
          ...action.payload,
          uid: shortid.generate(),
        })
      }
    })
  },
})
