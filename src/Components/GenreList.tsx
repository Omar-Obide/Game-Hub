import { Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

import useGenres from "../Hooks/useGenres";
import GetCroppedImage from "../Services/Image-Url";

const GenreList = () => {
  const { isloading, data } = useGenres();
  
  if(isloading) return <Spinner />
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
