import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import Navbar from "./Components/Navbar";
import PlatformSelector from "./Components/PlatformSelector";
import SortGames from "./Components/SortSelector";
import { Genre } from "./Hooks/useGenres";
import { Platform } from "./Hooks/usePlatforms";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

const App = () => {
  const [GameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenre={GameQuery.genre}
            onSelectedGenre={(genre) => {
              setGameQuery({ ...GameQuery, genre });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem padding={10} area="main">
        <HStack marginBottom={5} spacing="15px">
          <PlatformSelector
            selectedPlatform={GameQuery.platform}
            onselectedPlatform={(platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
          ></PlatformSelector>
          <SortGames
            SelectedSortOrder={GameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...GameQuery, sortOrder })
            }
          ></SortGames>
        </HStack>
        <GameGrid GameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
