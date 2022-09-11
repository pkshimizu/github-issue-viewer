import type { NextPage } from 'next'
import {Container, Flex, Heading, Text} from "@chakra-ui/react";
import {GoMarkGithub} from "react-icons/go"
import {IssueByLabelTable, IssueByMilestoneTable, IssueByProjectTable} from "../features/issues";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxW={"2xl"} padding={2}>
      <Flex direction={"column"} gap={4}>
        <Flex align={"center"} gap={1}>
          <GoMarkGithub size={"48px"} />
          <Heading>Issues</Heading>
        </Flex>
        <Flex direction={"column"}>
          <Flex align={"baseline"} gap={2}>
            <Heading fontSize={"sm"}>ラベル別</Heading>
            <Text fontSize={"xs"}>
              <Link href={"/"}>
                編集
              </Link>
            </Text>
          </Flex>
          <IssueByLabelTable />
        </Flex>
        <Flex direction={"column"}>
          <Flex align={"baseline"} gap={2}>
            <Heading fontSize={"sm"}>マイルストーン別</Heading>
            <Text fontSize={"xs"}>
              <Link href={"/"}>
                編集
              </Link>
            </Text>
          </Flex>
          <IssueByMilestoneTable />
        </Flex>
        <Flex direction={"column"}>
          <Flex align={"baseline"} gap={2}>
            <Heading fontSize={"sm"}>プロジェクト別</Heading>
            <Text fontSize={"xs"}>
              <Link href={"/"}>
                編集
              </Link>
            </Text>
          </Flex>
          <IssueByProjectTable />
        </Flex>
      </Flex>
    </Container>
  )
}

export default Home
