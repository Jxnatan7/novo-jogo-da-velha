import {getKeyFromIndex} from "@/src/services/DefaultGame/getKeyFromIndex";
import {getLabel} from "@/src/services/DefaultGame/getLabel";
import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import useGameStore from "@/src/hooks/useGameStore";
import {getWinner} from "@/src/services/DefaultGame/getWinner";
import {motion} from "framer-motion";

const DefaultGame = () => {
  const {values, player, winner, setValues, setPlayer, setWinner, reset} =
    useGameStore();

  const handleClick = (key: string) => {
    if (winner || values[key]) {
      return;
    }
    const newValues = {
      ...values,
      [key]: player,
    };
    setValues(newValues);
    setPlayer(player * -1);
    const newWinner = getWinner(newValues);
    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1);
    }
  };

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  return (
    <Box
      display="flex"
      as={motion.div}
      flexDirection="column"
      alignItems="center"
      transition="0.3s linear"
      initial={{
        x: -600,
      }}
      animate={{
        x: 0,
      }}>
      {!winner && (
        <Heading mb="2em">Vez do Jogador: {getLabel(player)}</Heading>
      )}
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        {Array.from({length: 9}).map((_, index) => {
          const key = getKeyFromIndex(index);
          return (
            <Button
              key={index}
              size="lg"
              width="5em"
              height="5em"
              variant="outline"
              borderColor="#8F00FF"
              onClick={() => handleClick(key)}>
              <Heading>{getLabel(values[key])}</Heading>
            </Button>
          );
        })}
      </Box>
      {winner && (
        <Flex
          flexDirection="column"
          as={motion.div}
          initial={{y: 300}}
          animate={{y: 0}}
          transition="0.3s linear">
          <Heading mt="1em">O GANHADOR É: {winner > 0 ? "X" : "O"}</Heading>
          <Button mt="1em" onClick={reset}>
            Reiniciar
          </Button>
        </Flex>
      )}
      {itsATie && (
        <Flex
          flexDirection="column"
          as={motion.div}
          initial={{y: 300}}
          animate={{y: 0}}
          transition="0.3s linear">
          <Heading mt="1em">HOUVE UM EMPATE</Heading>
          <Button mt="1em" onClick={reset}>
            Reiniciar
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default DefaultGame;
