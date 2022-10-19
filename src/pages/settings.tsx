import { FlexColumn } from '@/components/layout/Flex'
import AccessTokenForm from '@/features/settings/components/AccessTokenForm'

import type { NextPage } from 'next'

const Settings: NextPage = () => {
  return (
    <FlexColumn>
      <AccessTokenForm />
    </FlexColumn>
  )
}

export default Settings
