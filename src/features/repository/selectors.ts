import { createSelector } from 'reselect'

import { Organization } from '@/features/repository/types'
import { StoreState } from '@/store'

const repository = (state: StoreState) => state.repository
export const RepositorySelectors = {
  organizations: createSelector([repository], (state) =>
    state.repositories.reduce((array: Organization[], repository) => {
      if (array.some((item) => item.name === repository.organization.name)) {
        return array
      }
      array.push(repository.organization)
      return array
    }, []),
  ),
  repositories: createSelector([repository], (state) => state.repositories),
  labels: createSelector([repository], (state) => state.labels),
}
