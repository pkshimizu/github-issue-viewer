import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import { FlexColumn } from '@/components/layout/Flex'
import useView from '@/features/view/hooks/userView'

export default function ViewList() {
  const { list } = useView()
  return (
    <FlexColumn width={320}>
      <List disablePadding>
        {list.map((view) => (
          <ListItem key={view.uid} disableGutters disablePadding>
            <ListItemButton href={`#${view.uid}`}>
              <ListItemText primary={view.repositoryName} secondary={view.organizationName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </FlexColumn>
  )
}
