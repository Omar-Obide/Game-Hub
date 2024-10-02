import { SimpleGrid, Text } from "@chakra-ui/react";
import  Game  from "../Entities/Game";
import DefinitionItem from "./DefinitionItem";
import MetaCritic from "./MetaCritic";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return <SimpleGrid columns={2} as="dl">
  <DefinitionItem
    term={game.parent_platforms.length > 1 ? "Platforms" : "Platform"}
    children={game.parent_platforms.map(({ platform }) => (
      <Text key={platform.id}>{platform.name}</Text>
    ))}
  ></DefinitionItem>
  <DefinitionItem term="Metascore">
    {" "}
    <MetaCritic score={game.metacritic}></MetaCritic>
  </DefinitionItem>
  <DefinitionItem
    term={game.genres.length > 1 ? "Genres" : "Genre"}
    children={game.genres?.map((g) => (
      <Text key={g.id}>{g.name}</Text>
    ))}
  ></DefinitionItem>
  <DefinitionItem
    term={game.publishers.length > 1 ? "Publishers" : "Publisher"}
    children={game.publishers?.map((p) => (
      <Text key={p.id}>{p.name}</Text>
    ))}
  ></DefinitionItem>
</SimpleGrid>;
};

export default GameAttributes;
