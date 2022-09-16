import {NextPage} from "next";
import {Container, Flex} from "@chakra-ui/react";
import Header from "../components/Header";

const Setting: NextPage = () => {
  return (
    <Container maxW={"2xl"} padding={2}>
      <Flex direction={"column"} gap={4}>
        <Header />
      </Flex>
    </Container>
  )
}

export default Setting
