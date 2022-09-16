import {
  Avatar,
  Badge,
  Flex,
  Heading,
  Progress,
  Table,
  TableContainer,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import Link from "next/link";
import {IssueAggregationTable} from "../components/IssueAggregationTable";

export function IssueByProjectAggregationView() {
  return (
    <Flex direction={"column"}>
      <Flex align={"baseline"} gap={2}>
        <Heading fontSize={"sm"}>プロジェクト別</Heading>
        <Text fontSize={"xs"}>
          <Link href={"/"}>
            編集
          </Link>
        </Text>
      </Flex>
      <IssueAggregationTable
        label={"プロジェクト"}
        aggregations={[]}
      />
    </Flex>
  )
}