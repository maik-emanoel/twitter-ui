import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

const answers = [
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main>
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quam quod molestiae. Natus dolores corporis voluptates perspiciatis in cum, eius eos aliquam illo voluptas unde quas asperiores libero pariatur quia!" />

      <Separator />

      <form className="py-6 px-5 flex items-center gap-2 border-b-[1px] border-grayBorder">
        <label htmlFor="tweet" className="flex items-center gap-3 flex-1">
          <img
            src="https://github.com/maik-emanoel.png"
            alt="Maik Emanoel"
            className="w-12 h-12 rounded-full"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            className="flex-1 text-xl font-medium mt-5 resize-none focus:outline-none placeholder:text-[#5b7073]"
          />
        </label>

        <button
          type="submit"
          className="ml-auto bg-twitterBlue rounded-full py-3 px-6 text-white font-black hover:brightness-90"
        >
          Answer
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
