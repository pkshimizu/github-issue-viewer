import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Selectors } from '@/features/settings/selectors'
import { Slice } from '@/features/settings/store'

export default function useAccessToken() {
  const dispatch = useDispatch()
  const value = useSelector(Selectors.accessToken)
  const save = useCallback(
    (accessToken: string) => {
      dispatch(Slice.actions.saveAccessToken({ accessToken }))
    },
    [dispatch],
  )
  return {
    value,
    save,
  }
}
