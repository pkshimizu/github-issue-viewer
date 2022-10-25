import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { ViewSelectors } from '@/features/view/selectors'

export default function useView() {
  const list = useSelector(ViewSelectors.viewSettingsList)
  const findView = useCallback(
    (uid?: string) => {
      if (uid) {
        return list.find((item) => item.uid === uid)
      }
      if (list.length > 0) {
        return list[0]
      }
      return undefined
    },
    [list],
  )
  return {
    list,
    findView,
  }
}
