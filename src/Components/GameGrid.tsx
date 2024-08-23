import { Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";

const GameGrid = () => {
  const { Games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
