import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { InitialIssueState, IssueSlice } from '@/features/issues/store'
import { InitialSettingState, SettingSlice } from '@/features/setting'

const rootReducer = combineReducers({
  setting: SettingSlice.reducer,
  issue: IssueSlice.reducer,
})

const preloadedState = () => ({
  setting: InitialSettingState,
  issue: InitialIssueState,
})

export type StoreState = ReturnType<typeof preloadedState>

const persistConfig = {
  key: 'github-issue-view',
  storage,
  whitelist: ['setting'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type ThunkExtra = {}

const thunkExtra: ThunkExtra = {}

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: thunkExtra },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      createLogger({
        diff: true,
        collapsed: true,
      }),
    ),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: preloadedState(),
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
