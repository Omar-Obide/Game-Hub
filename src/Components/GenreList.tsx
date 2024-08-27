import { Box } from "@chakra-ui/react"
import useGames from "../Hooks/useGames"

const GenreList = () => {
    const {data} = useGames()
  return (
    <Box>   
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </Box>
  )
}

export default GenreList