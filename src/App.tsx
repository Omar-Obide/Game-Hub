import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./Components/GameGrid";
import GameHeading from "./Components/GameHeading";
import GenreList from "./Components/GenreList";
import Navbar from "./Components/Navbar";
import PlatformSelector from "./Components/PlatformSelector";
import SortGames from "./Components/SortSelector";
import { Platform } from "./Hooks/usePlatforms";

export interface gameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
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
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenreID={GameQuery.genreID}
            onSelectedGenre={(genre) => {
              setGameQuery({ ...GameQuery, genreID: genre.id });
            }}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem padding={10} area="main">
        <Box marginBottom={5}>
          <GameHeading gameQuery={GameQuery}></GameHeading>
        </Box>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatformID={GameQuery.platformID}
              onselectedPlatform={(platform) =>
                setGameQuery({ ...GameQuery, platformID: platform.id })
              }
            ></PlatformSelector>
          </Box>
          <SortGames
            SelectedSortOrder={GameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...GameQuery, sortOrder })
            }
          ></SortGames>
        </Flex>
        <GameGrid GameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
