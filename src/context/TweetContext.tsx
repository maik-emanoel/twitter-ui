import React, { createContext, useContext, useState } from "react";
import { TweetProps } from "../pages/Timeline";
import { initialTweets } from "../InitialTweets";

type TweetContextType = {
  tweets: TweetProps[];
  setTweets: React.Dispatch<React.SetStateAction<TweetProps[]>>;
};

const TweetContext = createContext<TweetContextType | undefined>(undefined);

export function TweetProvider({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<TweetProps[]>([...initialTweets]);

  return (
    <TweetContext.Provider value={{ tweets, setTweets }}>
      {children}
    </TweetContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTweetContext() {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error("useTweetContext deve ser usado dentro de um TweetProvider");
  }
  return context;
}
