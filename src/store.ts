import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { InitialSettingsState, SettingsSlice } from '@/features/settings/store'
import { InitialViewState, ViewSlice } from '@/features/view/store'

const rootReducer = combineReducers({
  settings: SettingsSlice.reducer,
  view: ViewSlice.reducer,
})

const preloadedState = () => ({
  settings: InitialSettingsState,
  view: InitialViewState,
})

export type StoreState = ReturnType<typeof preloadedState>

const persistConfig = {
  key: 'github-issue-view',
  storage,
  whitelist: ['settings'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
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
