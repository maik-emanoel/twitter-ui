import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

const tweets = ["Meu primeiro tweet", "Teste", "Testandoooooooooo"];

export function Timeline() {
    return (
        <main>
          <Header title="Home" />

          <form className='py-6 px-5 flex flex-col gap-2'>
            <label htmlFor="tweet" className='flex gap-3'>
              <img src="https://github.com/maik-emanoel.png" alt="Maik Emanoel" className='w-12 h-12 rounded-full'/>
              <textarea id='tweet' placeholder="What's happening?" className='flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-[#5b7073]'/>
            </label>

            <button type='submit' className='ml-auto bg-twitterBlue rounded-full py-3 px-6 text-white font-black hover:brightness-90'>Tweet</button>
          </form>

          <Separator />

          {
            tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
            })
          }
        </main>
    )
}