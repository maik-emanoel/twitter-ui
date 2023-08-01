import { ArrowLeft } from "@phosphor-icons/react";
import { useState, FormEvent, KeyboardEvent } from "react";
import { TweetToolbar } from "./TweetToolbar";

interface CreateNewFormProps {
  tweets: string[];
  setTweets: React.Dispatch<React.SetStateAction<string[]>>;
  isTweetFormVisible: boolean;
  setIsTweetFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateTweetForm({
  tweets,
  setTweets,
  isTweetFormVisible,
  setIsTweetFormVisible,
}: CreateNewFormProps) {
  const [newTweet, setNewTweet] = useState("");

  function createNewTweet(e: FormEvent) {
    e.preventDefault();
    if (newTweet === "") return;

    setTweets([newTweet, ...tweets]);
    setNewTweet("");

    setTimeout(() => {
      handleHideTweetForm();
    }, 700);
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (newTweet === "") return;

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");

      setTimeout(() => {
        handleHideTweetForm();
      }, 700);
    }
  }

  function handleHideTweetForm() {
    setIsTweetFormVisible(false);
  }

  return (
    <form
      data-isvisible={isTweetFormVisible}
      onSubmit={createNewTweet}
      className="py-6 px-5 flex flex-col gap-2 sm:absolute sm:inset-0 sm:gap-0 sm:bg-white sm:z-50 dark:sm:bg-bodyDark sm:py-0 data-[isvisible=true]:sm:flex data-[isvisible=false]:sm:hidden"
    >
      <header className="hidden h-[53px] sm:flex sm:items-center">
        <ArrowLeft size={20} onClick={handleHideTweetForm} />
      </header>

      <label htmlFor="tweet" className="flex gap-3 sm:mt-4">
        <img
          src="https://github.com/maik-emanoel.png"
          alt="Maik Emanoel"
          className="w-12 h-12 rounded-full sm:w-10 sm:h-10"
        />
        <textarea
          id="tweet"
          placeholder="What's happening?"
          className="flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7073] placeholder:dark:text-[#828282] sm:min-h-[96px]"
          value={newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(e) => setNewTweet(e.target.value)}
        />
      </label>

      <TweetToolbar />

      <button
        type="submit"
        className="ml-auto bg-twitterBlue rounded-full py-3 px-6 text-white font-black transition-all duration-300 ease-in-out hover:brightness-90 disabled:opacity-60 sm:absolute sm:top-3 sm:right-5 sm:h-8 sm:px-4 sm:py-0"
        disabled={newTweet === "" ? true : false}
      >
        Tweet
      </button>
    </form>
  );
}
