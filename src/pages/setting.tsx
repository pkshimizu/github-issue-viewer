import { Container, Flex } from '@chakra-ui/react'
import { NextPage } from 'next'

import Header from '@/components/Header'
import { GitHubPrivateAccessTokenForm } from '@/features/setting'

const Setting: NextPage = () => {
  return (
    <Container maxW={'2xl'} padding={2}>
      <Flex direction={'column'} gap={4}>
        <Header />
        <GitHubPrivateAccessTokenForm />
      </Flex>
    </Container>
  )
}

export default Setting
