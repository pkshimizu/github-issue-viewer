import { useRouter } from 'next/router'

import ViewForm from '@/features/view/components/ViewForm'
import useView from '@/features/view/hooks/userView'

import type { NextPage } from 'next'


const View: NextPage = () => {
  const { list } = useView()
  const router = useRouter()
  const { uid } = router.query
  const view = list.find((item) => item.uid === uid)
  if (view === undefined) {
    void router.push('/')
    return <></>
  }
  return <ViewForm view={view} />
}

export default View
