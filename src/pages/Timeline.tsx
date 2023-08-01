import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { CreateTweetForm } from "../components/CreateTweetForm";
import { useState } from "react";
import { Pencil } from "@phosphor-icons/react";

export function Timeline() {
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Testandoooooooooo",
  ]);
  const [isTweetFormVisible, setIsTweetFormVisible] = useState(false)

  function handleShowTweetForm() {
    setIsTweetFormVisible(true)
  }

  return (
    <main>
      <Header title="Home" />

      <CreateTweetForm tweets={tweets} setTweets={setTweets} isTweetFormVisible={isTweetFormVisible} setIsTweetFormVisible={setIsTweetFormVisible}/>

      <Separator />

      <div className="sm:mb-12">
        {tweets.map((tweet) => {
          return <Tweet key={tweet} content={tweet} />;
        })}
      </div>

      <button className="fixed right-4 bottom-20 bg-twitterBlue w-14 h-14 rounded-full shadow-floatButton hidden sm:block" onClick={handleShowTweetForm}>
        <Pencil size={24} color="white" className="mx-auto" />
      </button>
    </main>
  );
}
