import React, { createContext, useContext, useEffect, useState } from "react";
import { TweetProps } from "../pages/Timeline";
import { loadTweets, saveTweets } from "../utils/tweetsUtils";

type TweetContextType = {
  tweets: TweetProps[];
  setTweets: React.Dispatch<React.SetStateAction<TweetProps[]>>;
};

const TweetContext = createContext<TweetContextType | undefined>(undefined);

export function TweetProvider({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<TweetProps[]>(loadTweets());

  useEffect(() => {
    saveTweets(tweets);
  }, [tweets]);

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
    throw new Error(
      "useTweetContext deve ser usado dentro de um TweetProvider"
    );
  }
  return context;
}
