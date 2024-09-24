import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../Data/platforms";
import APIClient from "../Services/api-client";

const ApiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: ApiClient.getAll,
    initialData: platforms,
    staleTime: ms('24h')
  });

export default usePlatforms;
