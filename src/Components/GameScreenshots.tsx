import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreeshots from "../Hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreeshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  console.log(data);
  return (
    <SimpleGrid spacing={2} columns={{ md: 2, base: 1 }}>
      {data?.results.map((image) => (
        <Image key={image.id} src={image.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
