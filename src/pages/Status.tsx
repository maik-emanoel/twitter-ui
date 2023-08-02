import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(e: FormEvent) {
    e.preventDefault();
    if(newAnswer === '') return

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if(newAnswer === '') return

    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }


  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam quod molestiae. Natus dolores corporis voluptates perspiciatis in cum, eius eos aliquam illo voluptas unde quas asperiores libero pariatur quia!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="py-6 px-5 flex items-center gap-2 border-b-[1px] border-grayBorde dark:border-grayBorderDark">
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
          disabled={newAnswer === '' ? true : false}
        >
          Answer
        </button>
      </form>

      <div className="sm:mb-12">
        {answers.map((answer) => {
          return <Tweet key={answer} content={answer} />;
        })}
      </div>
    </main>
  );
}
