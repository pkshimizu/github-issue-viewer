import { useCallback } from 'react'

import { SettingsSelectors } from '@/features/settings/selectors'
import { SettingsActions, SettingsSlice } from '@/features/settings/store'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'

export default function useAccessToken() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(SettingsSelectors.accessToken)
  const save = useCallback(
    async (accessToken: string) => {
      await dispatch(SettingsSlice.actions.saveAccessToken({ accessToken }))
      await dispatch(SettingsActions.authenticate(accessToken))
    },
    [dispatch],
  )
  return {
    value,
    save,
  }
}
