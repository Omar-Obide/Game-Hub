import genres from "../Data/genres"

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => ({data: genres, isloading: false, error: false})

export default useGenres

