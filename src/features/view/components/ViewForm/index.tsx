import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Button from '@/components/form/Button'
import { FlexColumn } from '@/components/layout/Flex'
import OrganizationSelectField from '@/features/view/components/ViewForm/OrganizationSelectField'
import RepositorySelectField from '@/features/view/components/ViewForm/RepositorySelectField'
import { ViewActions } from '@/features/view/store'
import { ViewSettings } from '@/features/view/types'
import { useAppDispatch } from '@/hooks/useStore'

export type ViewFormProps = {
  view?: ViewSettings
}

export type ViewFormParams = {
  organizationName: string
  repositoryName: string
}

export default function ViewForm({ view }: ViewFormProps) {
  const methods = useForm<ViewFormParams>({
    defaultValues: {
      organizationName: view?.organizationName,
      repositoryName: view?.repositoryName,
    },
  })
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
        <FlexColumn gap={2}>
          <OrganizationSelectField />
          <RepositorySelectField />
          <Button type={'submit'} size={'xs'}>
            保存
          </Button>
        </FlexColumn>
      </form>
    </FormProvider>
  )
}
