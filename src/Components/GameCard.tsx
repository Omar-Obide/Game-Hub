import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import { HStack } from "@chakra-ui/react";
import MetaCritic from "./MetaCritic";
import PlatformsIconsList from "./PlatformsIconsList";
import GetCroppedImage from "../Services/Image-Url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={GetCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Stack spacing={2}>
          <HStack justifyContent="space-between">
            <PlatformsIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformsIconsList>
            <MetaCritic score={game.metacritic}></MetaCritic>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
