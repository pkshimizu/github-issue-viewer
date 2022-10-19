import {
  Alert,
  AlertIcon,
  Avatar,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/form/Button'
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
    <Flex direction={'column'} gap={1}>
      <form onSubmit={handleSubmit(handleSave)}>
        <InputGroup>
          <Input {...register('accessToken')} />
          <InputRightAddon>
            <Button type={'submit'}>保存</Button>
          </InputRightAddon>
        </InputGroup>
      </form>
      {authentication !== undefined && (
        <Alert status={authentication === null ? 'error' : 'success'}>
          <AlertIcon />
          {authentication === null ? (
            <>Unauthorized access token.</>
          ) : (
            <Flex direction={'row'} gap={2} align={'center'}>
              Accessed to {authentication.name}
              <Avatar src={authentication.avatarUrl} size={'sm'} />
            </Flex>
          )}
        </Alert>
      )}
    </Flex>
  )
}
