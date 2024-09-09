import { SimpleGrid, Text } from "@chakra-ui/react";
import { gameQuery } from "../App";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import LoadingSkeletons from "./LoadingSkeletons";

interface Props {
  GameQuery: gameQuery
}

const GameGrid = ({ GameQuery }: Props) => {
  const { data, error, isloading } = useGames(GameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>
  return (
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3 }}>
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
  );
};

export default GameGrid;
