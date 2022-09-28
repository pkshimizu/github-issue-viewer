import { useCallback } from 'react'

import { Selectors } from '@/features/settings/selectors'
import { Actions, Slice } from '@/features/settings/store'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'

export default function useAccessToken() {
  const dispatch = useAppDispatch()
  const value = useAppSelector(Selectors.accessToken)
  const save = useCallback(
    async (accessToken: string) => {
      await dispatch(Slice.actions.saveAccessToken({ accessToken }))
      await dispatch(Actions.authenticate(accessToken))
    },
    [dispatch],
  )
  return {
    value,
    save,
  }
}
