import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import usePlatform from "../Hooks/usePlatforms";

interface Props {
  gameQuery: gameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreID);

  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find(platform => platform.id === gameQuery.platformID)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
