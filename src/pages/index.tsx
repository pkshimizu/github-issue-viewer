import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

import ViewList from '@/features/view/components/ViewList'

import type { NextPage } from 'next'

const Top: NextPage = () => {
  return (
    <Flex direction={'row'}>
      <Flex direction={'column'}>
        <Link href={'/views/new'}>新規ビューを作成する</Link>
        <ViewList />
      </Flex>
    </Flex>
  )
}

export default Top
