import {getKeyFromIndex} from "@/src/services/DefaultGame/getKeyFromIndex";
import {getLabel} from "@/src/services/DefaultGame/getLabel";
import {Box, Button, Flex, Heading, Icon, Text} from "@chakra-ui/react";
import useGameStore from "@/src/hooks/useGameStore";
import {getWinner} from "@/src/services/DefaultGame/getWinner";
import {motion} from "framer-motion";
import {CloseIcon} from "@chakra-ui/icons";
import {FaRegCircle} from "react-icons/fa6";
import {changeButtonBackground} from "@/src/services/DefaultGame/changeButtonBackground";
import {getButtonsById} from "@/src/services/DefaultGame/getButtonsById";
import {resetGame} from "@/src/services/DefaultGame/resetGame";

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

    const winnerData = getWinner(newValues);

    if (winnerData) {
      const {result, keys} = winnerData;
      const winnerButtons = getButtonsById(keys);
      changeButtonBackground(winnerButtons, "#D299FF");
      setWinner(result > 0 ? 1 : -1);
    }
  };

  const itsATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  const currentPlayer =
    getLabel(player) === "X" ? (
      <CloseIcon color="red" />
    ) : (
      <Icon as={FaRegCircle} />
    );
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
      {!winner && !itsATie && (
        <Flex alignItems="center" mb="2em" gap={2}>
          <Text fontWeight="medium" fontSize="larger">
            Vez do Jogador:
          </Text>
          <Heading>{currentPlayer}</Heading>
        </Flex>
      )}
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        {Array.from({length: 9}).map((_, index) => {
          const key = getKeyFromIndex(index);
          return (
            <Button
              key={index}
              id={key}
              size="lg"
              width="5em"
              height="5em"
              variant="outline"
              borderColor="#8F00FF"
              onClick={() => handleClick(key)}>
              <Heading>
                {getLabel(values[key]) === "X" ? (
                  <CloseIcon color="red" />
                ) : getLabel(values[key]) === "O" ? (
                  <Icon as={FaRegCircle} />
                ) : null}
              </Heading>
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
          <Heading mt="1em">
            O GANHADOR É:{" "}
            {winner > 0 ? <CloseIcon color="red" /> : <Icon as={FaRegCircle} />}
          </Heading>
          <Button
            mt="1em"
            onClick={() => {
              resetGame();
              reset();
            }}>
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
          <Button
            mt="1em"
            onClick={() => {
              resetGame();
              reset();
            }}>
            Reiniciar
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default DefaultGame;
