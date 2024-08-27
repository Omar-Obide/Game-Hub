import useData from "./useData";
export interface platform{
  name: string
  id: number
  slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: platform}[]
    metacritic: number
  }

const useGames = () => useData<Game>("/games")

export default useGames