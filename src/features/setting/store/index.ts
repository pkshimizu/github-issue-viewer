import {createSlice} from "@reduxjs/toolkit";

type SettingState = {
}

export const InitialSettingState: SettingState = {
}

export const SettingSlice = createSlice({
  name: 'setting',
  initialState: InitialSettingState,
  reducers: {
  },
  extraReducers: (builder) => {
  },
})
