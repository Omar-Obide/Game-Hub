import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import { Genre } from "../Hooks/Genre";
import GetCroppedImage from "../Services/Image-Url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreID = useGameQueryStore((s) => s.GameQuery.genreID);
  const setGenreID = useGameQueryStore((s) => s.setGenreID);
  const { isLoading, data, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem padding="5px" key={genre.id}>
            <HStack>
              {
                <Image
                  boxSize="46px"
                  objectFit="cover"
                  borderRadius={8}
                  src={GetCroppedImage(genre.image_background)}
                ></Image>
              }
              <Button
                fontWeight={genre.id === selectedGenreID ? "bold" : "normal"}
                colorScheme={genre.id === selectedGenreID ? "teal" : "white"}
                onClick={() => setGenreID(genre.id)}
                variant="link"
                whiteSpace="normal"
                fontSize="lg"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
