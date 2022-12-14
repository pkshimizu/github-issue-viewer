import { Alert, Avatar } from '@mui/material'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/form/Button'
import TextField from '@/components/form/TextField'
import { FlexColumn, FlexRow } from '@/components/layout/Flex'
import useAccessToken from '@/features/settings/hooks/useAccessToken'
import useAuthentication from '@/features/settings/hooks/useAuthentication'

type AccessTokenFormParams = {
  accessToken: string
}

export default function AccessTokenForm() {
  const { value, save } = useAccessToken()
  const { value: authentication } = useAuthentication()
  const { handleSubmit, register } = useForm<AccessTokenFormParams>({
    defaultValues: { accessToken: value },
  })
  const handleSave = useCallback(
    (params: AccessTokenFormParams) => {
      void save(params.accessToken)
    },
    [save],
  )
  return (
    <FlexColumn gap={1}>
      <form onSubmit={handleSubmit(handleSave)}>
        <FlexRow align={'center'} pt={1}>
          <TextField label={'Access Token'} register={register('accessToken')} size={'lg'} />
          <Button type={'submit'}>保存</Button>
        </FlexRow>
      </form>
      {authentication !== undefined && (
        <Alert severity={authentication === null ? 'error' : 'success'}>
          {authentication === null ? (
            <>Unauthorized access token.</>
          ) : (
            <FlexRow gap={2} align={'center'}>
              Accessed to {authentication.name}
              <Avatar src={authentication.avatarUrl} />
            </FlexRow>
          )}
        </Alert>
      )}
    </FlexColumn>
  )
}
