import { FlexColumn } from '@/components/layout/Flex'
import Link from '@/components/navigation/Link'
import ViewList from '@/features/view/components/ViewList'

import type { NextPage } from 'next'

const Top: NextPage = () => {
  return (
    <FlexColumn>
      <Link href={'/views/new'}>新規ビューを作成する</Link>
      <ViewList />
    </FlexColumn>
  )
}

export default Top
