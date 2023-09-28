import { ArrowLeft } from "@phosphor-icons/react";
import { useState, FormEvent, KeyboardEvent, useRef, useEffect } from "react";
import { TweetToolbar } from "./TweetToolbar";
import { TweetProps } from "../pages/Timeline";
import { v4 as uuidv4 } from "uuid";
import { isTouchSupported } from "../utils/touchUtils";
import { CountdownWrapper } from "./CountdownWrapper";
import { maxCharacters } from "../utils/maxCharacters";

interface CreateNewFormProps {
  tweets: TweetProps[];
  setTweets: React.Dispatch<React.SetStateAction<TweetProps[]>>;
  isTweetFormVisible: boolean;
  setIsTweetFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  scrollPosition: number;
}

export function CreateTweetForm({
  tweets,
  setTweets,
  isTweetFormVisible,
  setIsTweetFormVisible,
  scrollPosition,
}: CreateNewFormProps) {
  const [newTweet, setNewTweet] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const newTweetObj: TweetProps = {
    id: uuidv4(),
    userAvatar: "https://github.com/maik-emanoel.png",
    userName: "Maik Emanoel",
    userLogin: "maik_emanoel",
    content: newTweet,
    comments: 0,
    retweets: 0,
    likes: 0,
  };

  function createNewTweet(e: FormEvent) {
    e.preventDefault();
    if (newTweet.trim() === "") return;

    setTweets([newTweetObj, ...tweets]);
    setNewTweet("");

    setTimeout(() => {
      handleHideTweetFormAndShowTweetOnTop();
    }, 700);
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (newTweet.trim() === "") return;
    if (newTweet.trim().length > maxCharacters) return;

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweetObj, ...tweets]);
      setNewTweet("");

      setTimeout(() => {
        handleHideTweetFormAndShowTweetOnTop();
      }, 700);
    }
  }

  function handleHideTweetFormAndShowTweetOnTop() {
    setIsTweetFormVisible(false);
    window.scrollTo(0, 0);
    document.body.style.overflow = "initial";
  }

  function handleHideTweetForm() {
    setIsTweetFormVisible(false);
    window.scrollTo(0, scrollPosition);
    document.body.style.overflow = "initial";
  }

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [newTweet])

  return (
    <form
      data-isvisible={isTweetFormVisible}
      onSubmit={createNewTweet}
      className="py-6 px-5 flex flex-col gap-2 sm:absolute sm:inset-0 sm:gap-0 sm:bg-white sm:z-50 dark:sm:bg-bodyDark sm:py-0 data-[isvisible=true]:sm:flex data-[isvisible=false]:sm:hidden sm:max-h-screen overflow-hidden"
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
          ref={textareaRef}
          placeholder="What's happening?"
          className="flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7073] placeholder:dark:text-[#828282] min-h-[56px] sm:min-h-[96px]"
          value={newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(e) => setNewTweet(e.target.value)}
          maxLength={380}
        />
      </label>

      <div className="ml-auto sm:ml-0 sm:flex sm:justify-between">
        <TweetToolbar />

        <div className="flex items-center gap-3">
          <CountdownWrapper characters={newTweet} />

          <button
            type="submit"
            data-istouchsupported={isTouchSupported}
            className="bg-twitterBlue rounded-full py-3 px-6 text-white font-black transition-all duration-300 ease-in-out select-none disabled:opacity-60 disabled:pointer-events-none sm:absolute sm:top-3 sm:right-5 sm:h-8 sm:px-4 sm:py-0
        data-[istouchsupported=false]:hover:brightness-90"
            disabled={
              newTweet.trim() === "" || newTweet.trim().length > maxCharacters
                ? true
                : false
            }
          >
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
}
