import { Button, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { ChangeEvent, useCallback, useState } from 'react'

import useAccessToken from '@/features/settings/hooks/useAccessToken'

export default function AccessTokenForm() {
  const { value, save } = useAccessToken()
  const [accessToken, setAccessToken] = useState<string | undefined>(value)
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAccessToken(event.target.value)
    },
    [setAccessToken],
  )
  const handleSave = useCallback(() => {
    if (accessToken) {
      save(accessToken)
    }
  }, [accessToken, save])
  return (
    <InputGroup>
      <Input value={accessToken} onChange={handleChange} />
      <InputRightAddon>
        <Button onClick={handleSave}>保存</Button>
      </InputRightAddon>
    </InputGroup>
  )
}
