import { Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import OrganizationSelectField from '@/features/view/components/ViewForm/OrganizationSelectField'
import RepositorySelectField from '@/features/view/components/ViewForm/RepositorySelectField'

export type ViewFormParams = {
  organizationName: string
  repositoryName: string
}

export default function Index() {
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
