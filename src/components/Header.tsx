import { Moon, Sparkle, SunDim } from "@phosphor-icons/react";
import { useState } from "react";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  function handleToggleTheme() {
    const html = document.querySelector("html");
    setIsDark((prevState) => !prevState);

    if (isDark) {
      html?.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  }

  return (
    <div className="py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] border-b-grayBorder bg-white/80 sticky top-0 backdrop-blur-md z-10 dark:border-b-grayBorderDark dark:text-tweetColor dark:bg-bodyDark/80">
      {title}
      <div className="flex items-center gap-2">
        <button onClick={handleToggleTheme}>
          {isDark ? (
            <SunDim size={24} className="text-twitterBlue" />
          ) : (
            <Moon size={24} className="text-twitterBlue" />
          )}
        </button>
        <Sparkle className="w-6 h-6 text-twitterBlue" />
      </div>
    </div>
  );
}
