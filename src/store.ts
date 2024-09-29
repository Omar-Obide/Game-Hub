import { create } from "zustand";

interface gameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  GameQuery: gameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setPlatformID: (platformID: number) => void;
  setGenreID: (genreID: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  GameQuery: {},
  setSearchText: (searchText) => set(() => ({ GameQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, sortOrder } })),
  setPlatformID: (platformID) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, platformID } })),
  setGenreID: (genreID) =>
    set((store) => ({ GameQuery: { ...store.GameQuery, genreID } })),
}));

export default useGameQueryStore;
