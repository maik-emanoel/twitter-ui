import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { CreateTweetForm } from "../components/CreateTweetForm";
import { useState } from "react";
import { Pencil } from "@phosphor-icons/react";
import { useTweetContext } from "../context/TweetContext";
import { initialTweets } from "../InitialTweets";

export interface TweetProps {
  id: string;
  userAvatar: string;
  userName: string;
  userLogin: string;
  content: string;
  imageUrl?: string | undefined;
  comments: number;
  retweets: number;
  likes: number;
}

export function Timeline() {
  const [isTweetFormVisible, setIsTweetFormVisible] = useState(false);
  const { tweets, setTweets } = useTweetContext();

  const [scrollPosition, setScrollPosition] = useState(0);

  function handleShowTweetForm() {
    setScrollPosition(window.scrollY);
    setIsTweetFormVisible(true);

    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  }
  return (
    <main>
      <Header title="Home" />

      <CreateTweetForm
        tweets={tweets}
        setTweets={setTweets}
        isTweetFormVisible={isTweetFormVisible}
        setIsTweetFormVisible={setIsTweetFormVisible}
        scrollPosition={scrollPosition}
      />

      <Separator />

      <div className="sm:mb-12">
        {tweets.concat(initialTweets).map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              userAvatar={tweet.userAvatar}
              userName={tweet.userName}
              userLogin={tweet.userLogin}
              content={tweet.content}
              imageUrl={tweet.imageUrl}
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
            />
          );
        })}
      </div>

      <button
        className="fixed right-4 bottom-20 bg-twitterBlue w-14 h-14 rounded-full shadow-floatButton hidden sm:block"
        onClick={handleShowTweetForm}
      >
        <Pencil size={24} color="white" className="mx-auto" />
      </button>
    </main>
  );
}
