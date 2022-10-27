import { CardContent } from '@mui/material'
import MuiCard from '@mui/material/Card'
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <MuiCard sx={{ mx: 1 }}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  )
}
