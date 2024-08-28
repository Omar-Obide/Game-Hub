import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import LoadingSkeletons from "./LoadingSkeletons";

const GameGrid = () => {
  const { data, error, isloading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 2, lg: 3 }}>
        {isloading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeletons></LoadingSkeletons>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
