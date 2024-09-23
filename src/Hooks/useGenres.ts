import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import apiClient from "../Services/api-client";
import { Response } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<Response<Genre>>("/genres").then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: 24 * 60 * 60 * 1000   //24 Hours
  });

export default useGenres;
