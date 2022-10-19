import MuiBox from '@mui/material/Box'
import { ReactNode } from 'react'

import { SpaceSize } from '@/components/layout/LayoutBase'

export type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'baseline'
export type FlexJustify = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'

type FlexProps = {
  align?: FlexAlign
  justify?: FlexJustify
  width?: number | string
  height?: number | string
  gap?: SpaceSize
  wrap?: boolean
  grow?: boolean
  ma?: SpaceSize
  mx?: SpaceSize
  ml?: SpaceSize
  mr?: SpaceSize
  my?: SpaceSize
  mt?: SpaceSize
  mb?: SpaceSize
  pa?: SpaceSize
  px?: SpaceSize
  py?: SpaceSize
  pl?: SpaceSize
  pr?: SpaceSize
  pt?: SpaceSize
  pb?: SpaceSize
  children: ReactNode
}

export function FlexColumn(props: FlexProps) {
  const { children } = props

  return (
    <Flex direction='column' {...props}>
      {children}
    </Flex>
  )
}

export function FlexRow(props: FlexProps) {
  const { children } = props

  return (
    <Flex direction='row' {...props}>
      {children}
    </Flex>
  )
}

type BaseFlexProps = {
  direction: 'row' | 'column'
} & FlexProps

function Flex({
  direction,
  align,
  justify,
  width,
  height,
  gap = 1,
  wrap = false,
  grow = false,
  ma,
  mx = ma,
  my = ma,
  mt = my,
  mb = my,
  ml = mx,
  mr = mx,
  pa,
  px = pa,
  py = pa,
  pt = py,
  pb = py,
  pl = px,
  pr = px,
  children,
}: BaseFlexProps) {
  return (
    <MuiBox
      sx={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        width,
        height,
        flexGrow: grow ? 1 : 0,
        overflowY: 'auto',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: gap,
        mt,
        mb,
        ml,
        mr,
        pt,
        pb,
        pl,
        pr,
      }}
    >
      {children}
    </MuiBox>
  )
}
