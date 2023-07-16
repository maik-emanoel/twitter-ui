import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(["Meu primeiro tweet", "Teste", "Testandoooooooooo"])

  function createNewTweet(e: FormEvent) {
    e.preventDefault();
    if(newTweet === '') return

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if(newTweet === '') return

    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="py-6 px-5 flex flex-col gap-2">
        <label htmlFor="tweet" className="flex gap-3">
          <img
            src="https://github.com/maik-emanoel.png"
            alt="Maik Emanoel"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            className="flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7073] placeholder:dark:text-[#828282]"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => setNewTweet(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitterBlue rounded-full py-3 px-6 text-white font-black transition-all duration-300 ease-in-out hover:brightness-90 disabled:brightness-75"
          disabled={newTweet === '' ? true : false}
        >
          Tweet
        </button>
      </form>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
