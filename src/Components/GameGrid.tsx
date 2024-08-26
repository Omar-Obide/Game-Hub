import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { Games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={5} columns={{ sm: 1, md: 2, lg: 3 }}>
        {Games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
