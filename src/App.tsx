import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem padding={10} area="main"><GameGrid></GameGrid></GridItem>
    </Grid>
  );
};

export default App;
