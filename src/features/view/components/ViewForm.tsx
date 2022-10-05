import { Flex, Text } from '@chakra-ui/react'

import useRepository from '@/features/repository/hooks/useRepository'

export default function ViewForm() {
  const { organizations } = useRepository()
  return (
    <Flex direction={'column'}>
      {organizations.map((organization) => (
        <Text key={organization.name}>{organization.name}</Text>
      ))}
    </Flex>
  )
}
