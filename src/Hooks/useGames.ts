import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../api-client";
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
  }
  
  interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [Games, setGames] = useState<Game[]>([]);
    const [error, seterror] = useState("");
  
    useEffect(() => {
    const controller = new AbortController()
    apiClient
        .get<Response>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            seterror(err.message)
        });
        return () => controller.abort()
    }, []);
  
    return {error, Games}
}

export default useGames