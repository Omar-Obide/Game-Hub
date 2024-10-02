import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../Components/Expandable";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";
import useGame from "../Hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box padding={10}>
      <Heading>{game.name}:</Heading>
      <Expandable>{game.description_raw}</Expandable>
      <GameAttributes game={game}></GameAttributes>
      <GameTrailer gameId={game.id}></GameTrailer>
    </Box>
  );
};

export default GameDetailPage;
