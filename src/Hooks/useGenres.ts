import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../Data/genres";
import APIClient from "../Services/api-client";
import { Genre } from "./Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    initialData: genres,
    staleTime: ms("24h"),
  });

export default useGenres;
