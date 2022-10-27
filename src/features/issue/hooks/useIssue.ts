import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { IssueActions } from '@/features/issue/store'
import { SettingsSelectors } from '@/features/settings/selectors'
import { useAppDispatch } from '@/hooks/useStore'

export default function useIssue(organizationName: string, repositoryName: string) {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const dispatch = useAppDispatch()
  const load = useCallback(() => {
    if (accessToken) {
      dispatch(IssueActions.loadIssues({ organizationName, repositoryName, accessToken }))
    }
  }, [dispatch, organizationName, repositoryName, accessToken])
  return {
    load,
  }
}
