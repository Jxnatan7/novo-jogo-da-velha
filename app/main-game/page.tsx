"use client";

import {Button, Flex} from "@chakra-ui/react";
import Head from "next/head";
import DefaultGame from "@/src/components/DefaultGame";
import useStartGame from "@/src/hooks/useStartGame";
import useGameStore from "@/src/hooks/useGameStore";

export default function Home() {
  const {isStart, setStart} = useStartGame();

  const {reset} = useGameStore();

  return (
    <main>
      <Flex minWidth="100vw" height="100vh" minH="1000px" paddingY="1em">
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%">
          <Flex gap="3em" width="100%" justifyContent="center">
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
            <Button
              isDisabled={!isStart}
              width="100px"
              height="50px"
              onClick={reset}
              backgroundColor="#8F00FF"
              color="#FFF"
              mb="2em"
              _hover={{backgroundColor: "#7e00e0"}}
              _active={{transform: "scale(1.1)"}}>
              Reiniciar
            </Button>
          </Flex>
          {isStart && <DefaultGame />}
        </Flex>
      </Flex>
    </main>
  );
}
