import { Settings } from '@mui/icons-material'
import { IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { FlexColumn } from '@/components/layout/Flex'
import useView from '@/features/view/hooks/userView'
import { ViewSettings } from '@/features/view/types'

export default function ViewList() {
  const { list } = useView()
  const router = useRouter()
  const handleClickView = useCallback(
    (view: ViewSettings) => {
      router.push({ pathname: `/`, query: { view: view.uid } })
    },
    [router],
  )
  const handleClickSettings = useCallback(
    (view: ViewSettings) => {
      router.push(`/views/${view.uid}`)
    },
    [router],
  )
  return (
    <FlexColumn width={320}>
      <List disablePadding>
        {list.map((view) => (
          <ListItem
            key={view.uid}
            disableGutters
            disablePadding
            secondaryAction={
              <IconButton onClick={() => handleClickSettings(view)}>
                <Settings />
              </IconButton>
            }
          >
            <ListItemButton onClick={() => handleClickView(view)}>
              <ListItemText primary={view.repositoryName} secondary={view.organizationName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </FlexColumn>
  )
}
