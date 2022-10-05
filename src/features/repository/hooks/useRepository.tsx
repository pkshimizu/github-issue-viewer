import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RepositorySelectors } from '@/features/repository/selectors'
import { RepositoryActions } from '@/features/repository/store'
import { SettingsSelectors } from '@/features/settings/selectors'
import { useAppDispatch } from '@/hooks/useStore'

export default function useRepository() {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const dispatch = useAppDispatch()
  const organizations = useSelector(RepositorySelectors.organizations)
  const repositories = useSelector(RepositorySelectors.repositories)
  const load = useCallback(() => {
    if (accessToken) {
      dispatch(RepositoryActions.loadRepositories(accessToken))
    }
  }, [dispatch, accessToken])
  useEffect(() => {
    load()
  }, [load])

  return {
    load,
    organizations,
    repositories,
  }
}
