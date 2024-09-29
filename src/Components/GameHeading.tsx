import { Heading } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformID = useGameQueryStore((s) => s.GameQuery.platformID);
  const platform = usePlatform(platformID);

  const genreID = useGameQueryStore((s) => s.GameQuery.genreID);
  const genre = useGenre(genreID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
