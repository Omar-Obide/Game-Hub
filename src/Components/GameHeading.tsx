import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import useGenre from "../Hooks/useGenre";
import useGenres from "../Hooks/useGenres";
import usePlatform from "../Hooks/usePlatform";

interface Props {
  gameQuery: gameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

const platform = usePlatform(gameQuery.platformID)

const genre = useGenre(gameQuery.genreID)

  

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
