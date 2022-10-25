import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { FlexColumn, FlexRow } from '@/components/layout/Flex'
import Link from '@/components/navigation/Link'
import LabelAggregationView from '@/features/view/components/LabelAggregationView'
import ViewList from '@/features/view/components/ViewList'
import useView from '@/features/view/hooks/userView'

import type { NextPage } from 'next'

const Top: NextPage = () => {
  const [tab, setTab] = useState<string>('1')
  const router = useRouter()
  const { findView } = useView()
  const view = findView(router.query.view as string)
  return (
    <FlexRow>
      <FlexColumn>
        <Link href={'/views/new'}>新規ビューを作成する</Link>
        <ViewList />
      </FlexColumn>
      {view && (
        <FlexColumn>
          <TabContext value={tab}>
            <TabList onChange={(event, value) => setTab(value)}>
              <Tab label={'ラベル'} value={'1'} />
              <Tab label={'プロジェクト'} value={'2'} />
            </TabList>
            <TabPanel value={'1'}>
              <LabelAggregationView view={view} />
            </TabPanel>
            <TabPanel value={'2'}>プロジェクト</TabPanel>
          </TabContext>
        </FlexColumn>
      )}
    </FlexRow>
  )
}

export default Top
