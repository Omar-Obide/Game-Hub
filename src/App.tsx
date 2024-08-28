import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside"><GenreList></GenreList></GridItem>
      </Show>
      <GridItem padding={10} area="main"><GameGrid></GameGrid></GridItem>
    </Grid>
  );
};

export default App;
