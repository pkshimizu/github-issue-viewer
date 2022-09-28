import { createSelector } from 'reselect'

import { StoreState } from '@/store'

const settings = (state: StoreState) => state.settings
export const SettingsSelectors = {
  accessToken: createSelector([settings], (state) => state.accessToken),
  authentication: createSelector([settings], (state) => state.authentication),
}
