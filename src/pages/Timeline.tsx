import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { CreateTweetForm } from "../components/CreateTweetForm";
import { useState } from "react";
import { Pencil } from "@phosphor-icons/react";

export interface TweetProps {
  userAvatar: string;
  userName: string;
  userLogin: string;
  content: string;
  hasImage?: boolean;
}

export function Timeline() {
  const [isTweetFormVisible, setIsTweetFormVisible] = useState(false);
  const [tweets, setTweets] = useState<TweetProps[]>([
    {
      userAvatar: "https://github.com/maik-emanoel.png",
      userName: "Maik Emanoel",
      userLogin: "maik_emanoel",
      content: "Meu primeiro tweet",
      hasImage: false,
    },
    {
      userAvatar: "https://github.com/diego3g.png",
      userName: "Diego Fernandes",
      userLogin: "diego_3g",
      content: "Teste teste",
      hasImage: false,
    },
  ]);

  function handleShowTweetForm() {
    setIsTweetFormVisible(true);
  }

  return (
    <main>
      <Header title="Home" />

      <CreateTweetForm
        tweets={tweets}
        setTweets={setTweets}
        isTweetFormVisible={isTweetFormVisible}
        setIsTweetFormVisible={setIsTweetFormVisible}
      />

      <Separator />

      <div className="sm:mb-12">
        {tweets.map((tweet, index) => {
          return (
            <Tweet
              key={index}
              userAvatar={tweet.userAvatar}
              userName={tweet.userName}
              userLogin={tweet.userLogin}
              content={tweet.content}
              hasImage={tweet.hasImage} />
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
