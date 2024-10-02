import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../Components/Expandable";
import GameAttributes from "../Components/GameAttributes";
import GameScreenshots from "../Components/GameScreenshots";
import GameTrailer from "../Components/GameTrailer";
import useGame from "../Hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box padding={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}:</Heading>
          <Expandable>{game.description_raw}</Expandable>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetailPage;
