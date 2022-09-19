import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createSelector} from "reselect";
import {StoreState} from "../../../store";

type SettingState = {
  gitHubPrivateAccessToken?: string
}

export const InitialSettingState: SettingState = {
}

const settingState = (state: StoreState) => state.setting
export const SettingSelectors = {
  gitHubPrivateAccessToken: createSelector([settingState], state => state.gitHubPrivateAccessToken)
}

export const SettingSlice = createSlice({
  name: 'setting',
  initialState: InitialSettingState,
  reducers: {
    saveGitHubPAT: (state, action: PayloadAction<{
      gitHubPrivateAccessToken: string
    }>) => {
      state.gitHubPrivateAccessToken = action.payload.gitHubPrivateAccessToken
    }
  },
  extraReducers: (builder) => {
  },
})
