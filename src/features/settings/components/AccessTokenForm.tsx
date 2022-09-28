import {
  Alert,
  AlertIcon,
  Avatar,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react'
import { ChangeEvent, useCallback, useState } from 'react'

import useAccessToken from '@/features/settings/hooks/useAccessToken'
import useAuthentication from '@/features/settings/hooks/useAuthentication'

export default function AccessTokenForm() {
  const { value, save } = useAccessToken()
  const { value: authentication } = useAuthentication()
  const [accessToken, setAccessToken] = useState<string | undefined>(value)
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAccessToken(event.target.value)
    },
    [setAccessToken],
  )
  const handleSave = useCallback(() => {
    if (accessToken) {
      void save(accessToken)
    }
  }, [accessToken, save])
  return (
    <Flex direction={'column'} gap={1}>
      <InputGroup>
        <Input value={accessToken} onChange={handleChange} />
        <InputRightAddon>
          <Button onClick={handleSave}>保存</Button>
        </InputRightAddon>
      </InputGroup>
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
