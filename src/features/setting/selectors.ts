import { createSelector } from 'reselect'

import { StoreState } from '@/store'

const settings = (state: StoreState) => state.setting
export const Selectors = {
  accessToken: createSelector([settings], (state) => state.accessToken),
}
