import {Avatar, Badge, Flex, Progress, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import Link from "next/link";

export function IssueByMilestoneTable() {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th width={120}>マイルストーン</Th>
            <Th>ユーザー</Th>
            <Th>未完了</Th>
            <Th>全件数</Th>
            <Th>進捗</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              Release 2022.12.01
            </Td>
            <Td>
              <Avatar src={"https://avatars.githubusercontent.com/u/300403?s=40&v=4"} name={"pkshimizu"}/>
            </Td>
            <Td>
              <Link href={"/"}>20件</Link>
            </Td>
            <Td>
              <Link href={"/"}>100件</Link>
            </Td>
            <Td>
              <Progress value={80} width={"100%"} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}