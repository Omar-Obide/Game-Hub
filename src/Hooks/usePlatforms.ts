import platforms from "../Data/platforms"
import useData from "./useData"

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatform = () => ({data: platforms, error: null})

export default usePlatform
