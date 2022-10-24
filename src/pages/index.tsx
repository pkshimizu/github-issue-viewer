import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import { useState } from 'react'

import { FlexColumn, FlexRow } from '@/components/layout/Flex'
import Link from '@/components/navigation/Link'
import ViewList from '@/features/view/components/ViewList'

import type { NextPage } from 'next'

const Top: NextPage = () => {
  const [tab, setTab] = useState<string>('1')
  return (
    <FlexRow>
      <FlexColumn>
        <Link href={'/views/new'}>新規ビューを作成する</Link>
        <ViewList />
      </FlexColumn>
      <FlexColumn>
        <TabContext value={tab}>
          <TabList onChange={(event, value) => setTab(value)}>
            <Tab label={'ラベル'} value={'1'} />
            <Tab label={'プロジェクト'} value={'2'} />
          </TabList>
          <TabPanel value={'1'}>ラベル</TabPanel>
          <TabPanel value={'2'}>プロジェクト</TabPanel>
        </TabContext>
      </FlexColumn>
    </FlexRow>
  )
}

export default Top
