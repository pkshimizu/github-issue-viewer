import { Container, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import {
  IssueByLabelAggregationView,
  IssueByMilestoneAggregationView,
  IssueByProjectAggregationView,
} from '@/features/issues'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW={'2xl'} padding={2}>
      <Flex direction={'column'} gap={4}>
        <Header />
        <IssueByLabelAggregationView />
        <IssueByMilestoneAggregationView />
        <IssueByProjectAggregationView />
      </Flex>
    </Container>
  )
}

export default Home
