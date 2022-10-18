import { Box, Flex, Heading } from '@chakra-ui/react'

import Link from '@/components/navigation/Link'
import useView from '@/features/view/hooks/userView'

export default function ViewList() {
  const { list } = useView()
  return (
    <Flex direction={'column'}>
      {list.map((view) => (
        <Link href={`#${view.uid}`} key={view.uid}>
          <Box borderWidth={1} width={'sm'} padding={2}>
            <Heading size={'sm'}>{view.organizationName}</Heading>
            <Heading size={'md'}>{view.repositoryName}</Heading>
          </Box>
        </Link>
      ))}
    </Flex>
  )
}
