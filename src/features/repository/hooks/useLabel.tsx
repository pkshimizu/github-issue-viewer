import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RepositorySelectors } from '@/features/repository/selectors'
import { RepositoryActions } from '@/features/repository/store'
import { Label } from '@/features/repository/types'
import { SettingsSelectors } from '@/features/settings/selectors'
import { useAppDispatch } from '@/hooks/useStore'

export default function useLabel(organizationName: string, repositoryName: string) {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const repositoryLabels = useSelector(RepositorySelectors.labels)
  const [labels, setLabels] = useState<Label[]>([])

  const dispatch = useAppDispatch()
  const load = useCallback(() => {
    if (accessToken) {
      dispatch(
        RepositoryActions.loadLabels({
          accessToken,
          organizationName,
          repositoryName,
        }),
      )
    }
  }, [dispatch, accessToken, organizationName, repositoryName])
  useEffect(() => {
    const labels =
      repositoryLabels.find(
        (label) =>
          label.organizationName === organizationName && label.repositoryName === repositoryName,
      )?.labels ?? []
    setLabels(labels)
  }, [repositoryLabels, setLabels, organizationName, repositoryName])

  return {
    load,
    labels,
  }
}
