import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandable from "../Components/Expandable";
import useGame from "../Hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}:</Heading>
      <Text>
        <Expandable>{game.description_raw}</Expandable>
      </Text>
    </>
  );
};

export default GameDetailPage;
