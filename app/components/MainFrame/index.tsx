import { getKeyFromIndex } from "@/app/services/getKeyFromIndex";
import { getLabel } from "@/app/services/getLabel";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import useGameStore from "@/app/hooks/useGameStore";
import { getWinner } from "@/app/services/getWinner";

const MainFrame = () => {

    const { values, player, winner, setValues, setPlayer, setWinner, reset } = useGameStore();

    const handleClick = (key: string) => {
        if (winner || values[key]) {
            return;
        }
        const newValues = {
            ...values,
            [key]: player
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
        <Flex flexDirection="column" alignItems="center">
            {!winner && (
                <Heading mb="1em">
                    Vez do Jogador: {getLabel(player)}
                </Heading>
            )}
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                {Array.from({ length: 9 }).map((_, index) => {
                    const key = getKeyFromIndex(index);
                    return (
                        <Button
                            key={index}
                            size="lg"
                            width="6em"
                            height="6em"
                            variant="outline"
                            borderColor="#8F00FF"
                            onClick={() => handleClick(key)}
                        >
                            <Heading>
                                {getLabel(values[key])}
                            </Heading>
                        </Button>
                    )
                })}
            </Box>
            {winner && (
                <Flex flexDirection="column">
                    <Heading mt="1em">O GANHADOR É: {winner > 0 ? "X" : "O"}</Heading>
                    <Button mt="1em" onClick={reset}>Reiniciar</Button>
                </Flex>
            )}
            {itsATie && (
                <Flex flexDirection="column">
                    <Heading mt="1em">O JOGO EMPATOU</Heading>
                    <Button mt="1em" onClick={reset}>Reiniciar</Button>
                </Flex>
            )}
        </Flex>
    );
};

export default MainFrame;
