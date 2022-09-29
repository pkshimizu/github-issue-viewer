import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <Box p={4} rounded={'md'} boxShadow={'outline'}>
      {children}
    </Box>
  )
}
