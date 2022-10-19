import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import { FlexColumn } from '@/components/layout/Flex'
import useView from '@/features/view/hooks/userView'

export default function ViewList() {
  const { list } = useView()
  return (
    <FlexColumn>
      <List>
        {list.map((view) => (
          <ListItem key={view.uid}>
            <ListItemButton href={`#${view.uid}`}>
              <ListItemText primary={view.organizationName} secondary={view.repositoryName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </FlexColumn>
  )
}
