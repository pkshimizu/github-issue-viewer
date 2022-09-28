import { Container, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

import Header from '@/components/Header'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container p={2} maxW={'container.lg'}>
      <Header />
      <Flex direction={'column'} py={2}>
        {children}
      </Flex>
    </Container>
  )
}
