import MuiButton from '@mui/material/Button'
import { ReactNode } from 'react'

import { calcFormSizeToWidth, FormItemProps } from '@/components/form/FormBase'

type ButtonProps = {
  type: 'submit'
  children: ReactNode
} & FormItemProps

export default function Button({ type, size, children }: ButtonProps) {
  return (
    <MuiButton type={type} sx={{ width: calcFormSizeToWidth(size) }} variant={'contained'}>
      {children}
    </MuiButton>
  )
}
