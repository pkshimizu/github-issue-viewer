import {
  Avatar,
  Badge,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Link from 'next/link'
import { IssueAggregation } from '@/features/issues/types'

type IssueAggregationTable = {
  label: string
  aggregations: IssueAggregation[]
}

export function IssueAggregationTable({ label, aggregations }: IssueAggregationTable) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th width={120}>{label}</Th>
            <Th>ユーザー</Th>
            <Th>未完了</Th>
            <Th>全件数</Th>
            <Th>進捗</Th>
          </Tr>
        </Thead>
        <Tbody>
          {aggregations.map((aggregation) => (
            <Tr key={aggregation.key}>
              <Td>
                <Badge bgColor={'#d73a4a'} color={'white'}>
                  {aggregation.title}
                </Badge>
              </Td>
              <Td>
                {aggregation.users.map((user) => (
                  <Avatar key={user.name} src={user.icon} name={user.name} />
                ))}
              </Td>
              <Td>
                <Link href={'/'}>{aggregation.openCount}</Link>
              </Td>
              <Td>
                <Link href={'/'}>{aggregation.openCount + aggregation.closeCount}</Link>
              </Td>
              <Td>
                <Progress
                  value={aggregation.openCount / (aggregation.openCount + aggregation.closeCount)}
                  width={'100%'}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
