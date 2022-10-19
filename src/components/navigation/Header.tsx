import { GitHub } from '@mui/icons-material'
import { Typography } from '@mui/material'

import { FlexRow } from '@/components/layout/Flex'
import Link from '@/components/navigation/Link'

export default function Header() {
  return (
    <FlexRow align={'center'} justify={'space-between'}>
      <Link href={'/'}>
        <FlexRow align={'center'} gap={1}>
          <GitHub />
          <Typography variant={'h1'}>Issues Viewer</Typography>
        </FlexRow>
      </Link>
      <Link href={'/settings'}>設定</Link>
    </FlexRow>
  )
}
