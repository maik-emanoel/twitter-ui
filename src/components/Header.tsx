import { Moon, Sparkle, SunDim } from "@phosphor-icons/react";
import { ReactNode, useEffect, useState } from "react";
import twitterLogo from "../assets/logo-twitter.svg";
import { useSidebarContext } from "../context/SidebarContext";
import { loadDarkModeValue, saveDarkModeValue } from "../utils/darkModeUtils";
import { isTouchSupported } from "../utils/touchUtils";
import { twMerge } from "tailwind-merge";
import { initialUser } from "../initialUser";

interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  children?: ReactNode;
}

export function Header({ title, children, className }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(loadDarkModeValue());
  const { handleShowMobileSidebar } = useSidebarContext();

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
    handleShowMobileSidebar();
  }

  useEffect(() => {
    saveDarkModeValue(isDark);

    const html = document.querySelector("html");

    if (isDark) {
      html?.classList.remove("dark");
    } else {
      html?.classList.add("dark");
    }
  }, [isDark]);

  return (
    <div
      className={twMerge(
        "py-6 px-5 h-[76px] flex items-center justify-between text-xl font-bold border-b border-b-grayBorder bg-white/75 sticky top-0 backdrop-blur-md z-10 dark:border-b-grayBorderDark dark:text-tweetColor dark:bg-bodyDark/60 sm:py-3 sm:h-16",
        className
      )}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="hidden sm:block" onClick={handleShowSidebar}>
            <img
              src={initialUser.avatarURL}
              alt={`Foto de perfil do usuário ${initialUser.name}`}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <span className="sm:hidden">{title}</span>

          <img
            src={twitterLogo}
            alt="Logo do Twitter"
            className="hidden w-6 h-6 sm:block"
          />
          <div className="flex items-center gap-3">
            <button
              data-istouchsupported={isTouchSupported}
              onClick={handleToggleTheme}
              className="outline outline-transparent outline-8 data-[istouchsupported=false]:hover:outline-twitterBlue/10 data-[istouchsupported=false]:hover:bg-twitterBlue/10 rounded-full"
            >
              {isDark ? (
                <SunDim size={24} className="text-twitterBlue" />
              ) : (
                <Moon size={24} className="text-twitterBlue" />
              )}
            </button>

            <button
              data-istouchsupported={isTouchSupported}
              className="outline outline-transparent outline-8 data-[istouchsupported=false]:hover:outline-twitterBlue/10 data-[istouchsupported=false]:hover:bg-twitterBlue/10 rounded-full sm:hidden"
            >
              <Sparkle size={24} className="text-twitterBlue" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
