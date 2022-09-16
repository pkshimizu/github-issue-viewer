import {createSlice} from "@reduxjs/toolkit";

type IssueState = {
}

export const InitialIssueState: IssueState = {
}

export const IssueSlice = createSlice({
  name: 'issue',
  initialState: InitialIssueState,
  reducers: {
  },
  extraReducers: (builder) => {
  },
})
