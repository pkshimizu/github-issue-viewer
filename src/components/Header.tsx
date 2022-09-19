import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'

export default function Header() {
  return (
    <Flex align={'center'} justify={'space-between'}>
      <Link href={'/'}>
        <Flex direction={'row'} align={'center'} gap={1}>
          <GoMarkGithub size={'48px'} />
          <Heading>Issues</Heading>
        </Flex>
      </Link>
      <Link href={'/setting'}>設定</Link>
    </Flex>
  )
}
