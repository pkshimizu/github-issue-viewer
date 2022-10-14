import { createSelector } from 'reselect'

import { StoreState } from '@/store'

const view = (state: StoreState) => state.view
export const ViewSelectors = {
  viewSettingsList: createSelector([view], (state) => state.viewSettingsList),
}
