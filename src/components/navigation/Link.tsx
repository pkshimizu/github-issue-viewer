import MuiLink from '@mui/material/Link'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  href: string
  children: ReactNode
}

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href}>
      <MuiLink>{children}</MuiLink>
    </NextLink>
  )
}
