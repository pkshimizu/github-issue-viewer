import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Selectors } from '@/features/setting/selectors'
import { Slice } from '@/features/setting/store'

export default function useAccessToken() {
  const dispatch = useDispatch()
  const get = useCallback(() => {
    return useSelector(Selectors.accessToken)
  }, [])
  const save = useCallback(
    (accessToken: string) => {
      dispatch(Slice.actions.saveAccessToken({ accessToken }))
    },
    [dispatch],
  )
  return {
    get,
    save,
  }
}
