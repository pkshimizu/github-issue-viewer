import { createSelector } from 'reselect'

import { StoreState } from '@/store'

const issue = (state: StoreState) => state.issue
export const IssueSelectors = {
  repositoryIssues: createSelector([issue], (state) => state.repositoryIssues),
}
