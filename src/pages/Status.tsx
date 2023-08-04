import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { TweetProps } from "./Timeline";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<TweetProps[]>([
    {
      userAvatar: "https://github.com/maik-emanoel.png",
      userName: "Maik Emanoel",
      userLogin: "maik_emanoel",
      content: "Estamos fazendo progresso",
    },
    {
      userAvatar: "https://github.com/diego3g.png",
      userName: "Diego Fernandes",
      userLogin: "diego_3g",
      content: "Realmente, faz sentido",
    },
  ]);

  const newAnswerObj: TweetProps = {
    userAvatar: "https://github.com/maik-emanoel.png",
    userName: "Maik Emanoel",
    userLogin: "maik_emanoel",
    content: newAnswer,
  };

  function createNewAnswer(e: FormEvent) {
    e.preventDefault();
    if (newAnswer === "") return;

    setAnswers([newAnswerObj, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (newAnswer === "") return;

    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswerObj, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main>
      <Header title="Tweet" />

      <Tweet
        userAvatar="https://github.com/maik-emanoel.png"
        userName="Maik Emanoel"
        userLogin="maik_emanoel"
        content="adipisci suscipit beatae perferendis doloribus facere voluptate. Ipsam aperiam reiciendis reprehenderit quas animi recusandae."
      />

      <Separator />

      <form
        onSubmit={createNewAnswer}
        className="py-6 px-5 flex items-center gap-2 border-b-[1px] border-grayBorde dark:border-grayBorderDark"
      >
        <label htmlFor="tweet" className="flex items-center gap-3 flex-1">
          <img
            src="https://github.com/maik-emanoel.png"
            alt="Maik Emanoel"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            className="flex-1 text-xl font-medium mt-5 resize-none focus:outline-none placeholder:text-[#5b7073] placeholder:dark:text-[#828282]"
            onChange={(e) => setNewAnswer(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitterBlue rounded-full py-3 px-6 text-white font-black transition-all duration-300 ease-in-out hover:brightness-90 disabled:opacity-60"
          disabled={newAnswer === "" ? true : false}
        >
          Answer
        </button>
      </form>

      <div className="sm:mb-12">
        {answers.map((answer, index) => {
          return (
            <Tweet
              key={index}
              userAvatar={answer.userAvatar}
              userName={answer.userName}
              userLogin={answer.userLogin}
              content={answer.content}
            />
          );
        })}
      </div>
    </main>
  );
}
