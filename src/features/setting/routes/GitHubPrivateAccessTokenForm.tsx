import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { ChangeEvent, useCallback, useState } from 'react'

import { SettingSelectors, SettingSlice } from '@/features/setting'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'

export function GitHubPrivateAccessTokenForm() {
  const gitHubPrivateAccessToken = useAppSelector(SettingSelectors.gitHubPrivateAccessToken)
  const [value, setValue] = useState<string | undefined>(gitHubPrivateAccessToken)
  const dispatch = useAppDispatch()
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }, [])
  const handleSave = useCallback(() => {
    if (value) {
      dispatch(SettingSlice.actions.saveGitHubPAT({ gitHubPrivateAccessToken: value }))
    }
  }, [value, dispatch])
  return (
    <Flex direction={'column'} gap={1}>
      <Text>GitHub Private Access Token</Text>
      <Input value={value} placeholder={'GitHub Private Access Token'} onChange={handleChange} />
      <Flex justify={'flex-end'}>
        <Button color={'primary'} onClick={handleSave}>
          保存
        </Button>
      </Flex>
    </Flex>
  )
}
