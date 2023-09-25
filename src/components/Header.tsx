import { Moon, Sparkle, SunDim } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import twitterLogo from "../assets/logo-twitter.svg";
import { useSidebarContext } from "../context/SidebarContext";
import { loadDarkModeValue, saveDarkModeValue } from "../utils/darkModeUtils";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(loadDarkModeValue());
  const { handleShowMobileSidebar } = useSidebarContext()

  function handleToggleTheme() {
    const html = document.querySelector("html");
    setIsDark((prevState) => !prevState);

    if (isDark) {
      html?.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  }

  function handleShowSidebar() {
    handleShowMobileSidebar()
  }

  useEffect(() => {
      saveDarkModeValue(isDark);

      const html = document.querySelector("html");
  
      if (isDark) {
        html?.classList.remove("dark");
      } else {
        html?.classList.add("dark");
      }
  }, [isDark])

  return (
    <div className="py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] border-b-grayBorder bg-white/75 sticky top-0 backdrop-blur-md z-10 dark:border-b-grayBorderDark dark:text-tweetColor dark:bg-bodyDark/60 sm:py-3">
      <div className="hidden sm:block" onClick={handleShowSidebar}>
        <img
          src="https://github.com/maik-emanoel.png"
          alt="Maik Emanoel"
          className="w-8 h-8 rounded-full"
        />
      </div>
      <span className="sm:hidden">{title}</span>

      <img src={twitterLogo} alt="Logo do Twitter" className="hidden w-6 h-6 sm:block" />
      <div className="flex items-center gap-2">
        <button onClick={handleToggleTheme}>
          {isDark ? (
            <SunDim size={24} className="text-twitterBlue" />
          ) : (
            <Moon size={24} className="text-twitterBlue" />
          )}
        </button>

        <Sparkle className="w-6 h-6 text-twitterBlue sm:hidden" />
      </div>
    </div>
  );
}
