import { Container } from '@mui/material'
import { ReactNode } from 'react'

import { FlexColumn } from '@/components/layout/Flex'
import Header from '@/components/navigation/Header'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container sx={{ pa: 2 }}>
      <Header />
      <FlexColumn py={2}>{children}</FlexColumn>
    </Container>
  )
}
