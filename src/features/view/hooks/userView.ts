import { useSelector } from 'react-redux'

import { ViewSelectors } from '@/features/view/selectors'

export default function useView() {
  const list = useSelector(ViewSelectors.viewSettingsList)
  return {
    list,
  }
}
