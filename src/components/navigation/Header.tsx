import { GitHub } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import { FlexRow } from '@/components/layout/Flex'
import Link from '@/components/navigation/Link'

export default function Header() {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Link href={'/'}>
          <FlexRow align={'center'} gap={1}>
            <GitHub sx={{ fontSize: 40 }} />
            <Typography variant={'h4'}>Issues Viewer</Typography>
          </FlexRow>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Link href={'/settings'}>設定</Link>
      </Toolbar>
    </AppBar>
  )
}
