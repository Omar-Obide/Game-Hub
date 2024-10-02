import { Box } from "@chakra-ui/react";
import useTrailers from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box marginBottom={5}>
      <video
        poster={data?.results[0]?.preview}
        controls
        src={data?.results[0]?.data[480]}
      ></video>
    </Box>
  );
};

export default GameTrailer;
