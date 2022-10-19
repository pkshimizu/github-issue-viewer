import { Button as ChakraButton } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { calcFormSizeToWidth, FormItemProps } from '@/components/form/FormBase'

type ButtonProps = {
  type: 'submit'
  children: ReactNode
} & FormItemProps

export default function Button({ type, size, children }: ButtonProps) {
  return (
    <ChakraButton type={type} width={calcFormSizeToWidth(size)}>
      {children}
    </ChakraButton>
  )
}
