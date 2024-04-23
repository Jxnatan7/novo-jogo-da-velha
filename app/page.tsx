"use client";

import {Button, Flex} from "@chakra-ui/react";
import Head from "next/head";
import MainFrame from "./components/MainFrame";
import useStartGame from "./hooks/useStartGame";

export default function Home() {
  const {isStart, setStart} = useStartGame();

  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Flex minWidth="100vw" height="100vh" minH="1000px" paddingY="1em">
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%">
          <Button
            isDisabled={isStart}
            width="100px"
            height="50px"
            onClick={setStart}
            backgroundColor="#8F00FF"
            color="#FFF"
            mb="2em"
            _hover={{backgroundColor: "#7e00e0"}}
            _active={{transform: "scale(1.1)"}}>
            Começar
          </Button>
          {isStart && <MainFrame />}
        </Flex>
      </Flex>
    </main>
  );
}
