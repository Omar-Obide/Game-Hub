import { useEffect, useState } from "react";
import apiClient from "../api-client";

interface Game {
  id: number;
  name: string;
}

interface Response {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [Games, setGames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    apiClient
      .get<Response>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => seterror(err.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {Games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
