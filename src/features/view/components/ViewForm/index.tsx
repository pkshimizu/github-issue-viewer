import { Button, Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import OrganizationSelectField from '@/features/view/components/ViewForm/OrganizationSelectField'
import RepositorySelectField from '@/features/view/components/ViewForm/RepositorySelectField'
import { ViewActions } from '@/features/view/store'
import { useAppDispatch } from '@/hooks/useStore'

export type ViewFormParams = {
  organizationName: string
  repositoryName: string
}

export default function Index() {
  const methods = useForm<ViewFormParams>()
  const dispatch = useAppDispatch()
  const handleSave = useCallback(
    (params: ViewFormParams) => {
      dispatch(ViewActions.saveView(params))
    },
    [dispatch],
  )
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSave)}>
        <Flex direction={'column'} gap={2}>
          <Text size={'sm'}>対象Organization</Text>
          <OrganizationSelectField />
          <Text size={'sm'}>対象Repository</Text>
          <RepositorySelectField />
          <Button type={'submit'}>保存</Button>
        </Flex>
      </form>
    </FormProvider>
  )
}
