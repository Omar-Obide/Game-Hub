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
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { isloading, data } = useGenres();

  if (isloading) return <Spinner />;
  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem padding="5px" key={genre.id}>
            <HStack>
              {
                <Image
                  boxSize="46px"
                  borderRadius={8}
                  src={GetCroppedImage(genre.image_background)}
                ></Image>
              }
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                whiteSpace="wrap"
                fontSize="lg"
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
