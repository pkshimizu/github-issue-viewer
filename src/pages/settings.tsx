import { Flex } from '@chakra-ui/react'

import AccessTokenForm from '@/features/settings/components/AccessTokenForm'

import type { NextPage } from 'next'

const Settings: NextPage = () => {
  return (
    <Flex direction={'column'}>
      <AccessTokenForm />
    </Flex>
  )
}

export default Settings
