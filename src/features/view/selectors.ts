import { createSelector } from 'reselect'

import { Organization } from '@/features/view/types'
import { StoreState } from '@/store'

const view = (state: StoreState) => state.view
export const ViewSelectors = {
  organizations: createSelector([view], (state) =>
    state.repositories.reduce((array: Organization[], repository) => {
      if (array.some((item) => item.name === repository.organization.name)) {
        return array
      }
      array.push(repository.organization)
      return array
    }, []),
  ),
  repositories: createSelector([view], (state) => state.repositories),
}
