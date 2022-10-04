import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { SettingsSelectors } from '@/features/settings/selectors'
import { ViewSelectors } from '@/features/view/selectors'
import { ViewActions } from '@/features/view/store'
import { useAppDispatch } from '@/hooks/useStore'

export default function useRepository() {
  const accessToken = useSelector(SettingsSelectors.accessToken)
  const dispatch = useAppDispatch()
  const organizations = useSelector(ViewSelectors.organizations)
  const repositories = useSelector(ViewSelectors.repositories)
  const load = useCallback(() => {
    if (accessToken) {
      dispatch(ViewActions.loadRepositories(accessToken))
    }
  }, [accessToken])
  useEffect(() => {
    load()
  }, [load])

  return {
    load,
    organizations,
    repositories
  }
}
