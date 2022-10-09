import { Flex, Text } from '@chakra-ui/react'

import OrganizationSelectField from '@/features/repository/components/OrganizationSelectField'
import RepositorySelectField from '@/features/repository/components/RepositorySelectField'

export default function ViewForm() {
  return (
    <Flex direction={'column'}>
      <Text size={'sm'}>対象Organization</Text>
      <OrganizationSelectField />
      <Text size={'sm'}>対象Repository</Text>
      <RepositorySelectField />
    </Flex>
  )
}
