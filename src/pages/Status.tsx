import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

interface AnswerProps {
  userAvatar: string,
  userName: string,
  userLogin: string,
  content: string,
  comments: number,
  retweets: number,
  likes: number
}

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState<AnswerProps[]>([
    {
      userAvatar: "https://github.com/maykbrito.png",
      userName: "Mayk Brito",
      userLogin: "maykbrito",
      content: "Estamos fazendo progresso",
      comments: 1,
      retweets: 9,
      likes: 2004
    },
    {
      userAvatar: "https://github.com/diego3g.png",
      userName: "Diego Fernandes",
      userLogin: "diego_3g",
      content: "Realmente, faz sentido",
      comments: 13,
      retweets: 46,
      likes: 3021
    },
  ]);

  const newAnswerObj: AnswerProps = {
    userAvatar: "https://github.com/maik-emanoel.png",
    userName: "Maik Emanoel",
    userLogin: "maik_emanoel",
    content: newAnswer,
    comments: 0,
    retweets: 0,
    likes: 0
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
        comments={1}
        retweets={9}
        likes={2004}
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
        {answers.map((answer) => {
          return (
            <Tweet
              key={answer.content}
              userAvatar={answer.userAvatar}
              userName={answer.userName}
              userLogin={answer.userLogin}
              content={answer.content}
              comments={answer.comments}
              retweets={answer.retweets}
              likes={answer.likes}
            />
          );
        })}
      </div>
    </main>
  );
}
