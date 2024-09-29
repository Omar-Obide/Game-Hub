import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import GameHeading from "./Components/GameHeading";
import GenreList from "./Components/GenreList";
import Navbar from "./Components/Navbar";
import PlatformSelector from "./Components/PlatformSelector";
import SortGames from "./Components/SortSelector";

const App = () => {
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
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem padding={10} area="main">
        <Box marginBottom={5}>
          <GameHeading></GameHeading>
        </Box>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector></PlatformSelector>
          </Box>
          <SortGames></SortGames>
        </Flex>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
