import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'

import Header from '@/components/Header'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container p={2} maxW={'container.lg'}>
      <Header />
      {children}
    </Container>
  )
}
