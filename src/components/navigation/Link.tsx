import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  href: string
  children: ReactNode
}

export default function Link({ href, children }: LinkProps) {
  return (
    <ChakraLink as={NextLink} href={href}>
      {children}
    </ChakraLink>
  )
}
