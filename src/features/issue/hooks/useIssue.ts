import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { IssueSelectors } from '@/features/issue/selectors'
import { IssueActions } from '@/features/issue/store'
import { SettingsSelectors } from '@/features/settings/selectors'
import { useAppDispatch } from '@/hooks/useStore'

export default function useIssue(organizationName: string, repositoryName: string) {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const repositoryIssues = useSelector(IssueSelectors.repositoryIssues)
  const dispatch = useAppDispatch()
  const load = useCallback(() => {
    if (accessToken) {
      dispatch(IssueActions.loadIssues({ organizationName, repositoryName, accessToken }))
    }
  }, [dispatch, organizationName, repositoryName, accessToken])
  const findIssues = useCallback(() => {
    const result = repositoryIssues.find(
      (item) =>
        item.organizationName === organizationName && item.repositoryName === repositoryName,
    )
    if (result) {
      return result.issues
    }
    return []
  }, [repositoryIssues, organizationName, repositoryName])
  return {
    load,
    findIssues,
  }
}
