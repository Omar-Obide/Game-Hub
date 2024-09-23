import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { gameQuery } from "../App";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import LoadingSkeletons from "./LoadingSkeletons";
interface Props {
  GameQuery: gameQuery;
}

const GameGrid = ({ GameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(GameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((acc, pages) => acc + pages.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        loader={<Spinner />}
        hasMore={!!hasNextPage}
      >
        <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3 }}>
          {isLoading &&
            Skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <LoadingSkeletons></LoadingSkeletons>
              </GameCardContainer>
            ))}

          {data?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
