import { Header } from "../components/Header";

export function Messages() {
  return (
    <>
      <Header title="Messages" />
      <div className="max-w-[400px] my-8 mx-auto px-8">
        <h2 className="text-3xl font-extrabold mb-2">Welcome to your inbox!</h2>
        <p className="text-sm mb-7 dark:text-white/60">
          Drop a line, share posts and more with private conversations between
          you and others on X.
        </p>

        <button className="rounded-full bg-twitterBlue px-8 min-h-[52px] text-white text-lg font-bold hover:brightness-90">
          Write a message
        </button>
      </div>
    </>
  );
}
