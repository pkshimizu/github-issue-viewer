import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import {InitialSettingState, SettingSlice} from "../features/setting";
import {InitialIssueState, IssueSlice} from "../features/issues/store";

const rootReducer = combineReducers({
  "setting": SettingSlice.reducer,
  "issue": IssueSlice.reducer
})

const preloadedState = () => ({
  "issue": InitialIssueState
})

export type StoreState = ReturnType<typeof preloadedState>

const persistConfig = {
  key: 'github-issue-view',
  storage,
  whitelist: ['setting'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type ThunkExtra = {
}

const thunkExtra: ThunkExtra = {
}

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
      })
    ),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: preloadedState(),
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
