import { Box } from "@chakra-ui/react"
import useGenres from "../Hooks/useGenres"


const GenreList = () => {
    const {genres} = useGenres()
  return (
    <Box>   
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </Box>
  )
}

export default GenreList