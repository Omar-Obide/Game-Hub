import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";

interface Props {
  card: Game;
}

const GameCard = ({ card }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={card.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{card.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
