import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../Entities/Game";
import { HStack } from "@chakra-ui/react";
import MetaCritic from "./MetaCritic";
import PlatformsIconsList from "./PlatformsIconsList";
import GetCroppedImage from "../Services/Image-Url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={GetCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Stack spacing={2}>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformsIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformsIconsList>
            <MetaCritic score={game.metacritic}></MetaCritic>
          </HStack>
        </Stack>
        <Heading fontSize="2xl">
          <Link to={"/games" + "/" + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};

export default GameCard;
