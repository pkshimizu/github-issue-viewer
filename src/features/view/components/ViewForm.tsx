import { Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import OrganizationSelectField from '@/features/repository/components/OrganizationSelectField'
import RepositorySelectField from '@/features/repository/components/RepositorySelectField'

type ViewFormParams = {
  organizationName: string
  repositoryName: string
}

export default function ViewForm() {
  const methods = useForm<ViewFormParams>()
  const handleSave = useCallback((params: ViewFormParams) => {}, [])
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSave)}>
        <Flex direction={'column'}>
          <Text size={'sm'}>対象Organization</Text>
          <OrganizationSelectField />
          <Text size={'sm'}>対象Repository</Text>
          <RepositorySelectField />
        </Flex>
      </form>
    </FormProvider>
  )
}
