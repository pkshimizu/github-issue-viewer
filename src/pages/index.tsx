import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

import type { NextPage } from 'next'

const Top: NextPage = () => {
  return (
    <Flex direction={'column'}>
      <Link href={'/views/new'}>新規ビューを作成する</Link>
    </Flex>
  )
}

export default Top
