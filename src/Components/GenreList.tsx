import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import GetCroppedImage from "../Services/Image-Url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { isloading, data, error } = useGenres();

  if (error) return null
  if (isloading) return <Spinner />;
  
  return (
    <>
      <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem padding="5px" key={genre.id}>
            <HStack>
              {
                <Image
                  boxSize="46px"
                  objectFit='cover'
                  borderRadius={8}
                  src={GetCroppedImage(genre.image_background)}
                ></Image>
              }
              <Button

                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                colorScheme={genre.id === selectedGenre?.id ? "teal" : "white"}
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                whiteSpace="normal"
                fontSize="lg"
                textAlign='left'
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
