import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'

import Link from '@/components/navigation/Link'

export default function Header() {
  return (
    <Flex direction={'row'} align={'center'}>
      <Link href={'/'}>
        <Flex direction={'row'} align={'center'} gap={1}>
          <GoMarkGithub size={'48px'} />
          <Heading>Issues Viewer</Heading>
        </Flex>
      </Link>
      <Spacer />
      <Link href={'/settings'}>設定</Link>
    </Flex>
  )
}
