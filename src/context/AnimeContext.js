import { useContext } from "react";
import React from "react";

const AnimeContext = React.createContext();

export const useAnimeContext = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useCardContext must be used within a Card Provider");
  }
  return context;
};

export default AnimeContext;
