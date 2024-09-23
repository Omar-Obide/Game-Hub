import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import APIClient from "../Services/api-client";

const ApiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: ApiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatform;
