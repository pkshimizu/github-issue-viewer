import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { RepositorySelectors } from '@/features/repository/selectors'
import { RepositoryActions } from '@/features/repository/store'
import { SettingsSelectors } from '@/features/settings/selectors'
import { useAppDispatch } from '@/hooks/useStore'

export default function useLabel() {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const dispatch = useAppDispatch()
  const load = useCallback(
    (organizationName: string, repositoryName: string) => {
      if (accessToken) {
        dispatch(
          RepositoryActions.loadLabels({
            accessToken,
            organizationName,
            repositoryName,
          }),
        )
      }
    },
    [dispatch, accessToken],
  )
  const labels = useSelector(RepositorySelectors.labels)

  return {
    load,
    labels,
  }
}
