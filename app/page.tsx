"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Flex
        flexDirection="column"
        minWidth="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center">
        <Heading mb="3em" fontSize="x-large">
          Qual jogo você deseja jogar?
        </Heading>
        <Flex flexDirection="column" width="30%">
          <Button
            backgroundColor="#8F00FF"
            color="#FFF"
            _hover={{ backgroundColor: "#7e00e0" }}
            _active={{ transform: "scale(1.1)" }}>
            <Link href="/main-game" _hover={{ textUnderlineOffset: false }}>
              Jogo da Velha (normal)
            </Link>
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
