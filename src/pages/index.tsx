import { Container, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '@/components/Header'
import {
  IssueByLabelAggregationView,
  IssueByMilestoneAggregationView,
  IssueByProjectAggregationView,
} from '@/features/issues'

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
