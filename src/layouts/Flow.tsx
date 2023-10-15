import {
  ChatCircle,
  IconProps,
  MagnifyingGlass,
  UsersThree,
} from "@phosphor-icons/react";
import logoTwitter from "../assets/logo-twitter.svg";
import { isTouchSupported } from "../utils/touchUtils";
import { useState } from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";

interface ContentProps {
  icon: React.ElementType<IconProps>;
  text: string;
}

function Content(props: ContentProps) {
  return (
    <p className="flex items-center gap-3">
      <props.icon size={24} />
      <span>{props.text}</span>
    </p>
  );
}

export function Flow() {
  const [isUserAuthenticated] = useState(false);

  if (isUserAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex items-center w-full h-screen">
      <div className="flex-1 h-full bg-twitterBlue flex items-center justify-center relative overflow-hidden md:hidden">
        <div className="text-white flex flex-col gap-8 z-10">
          <Content icon={MagnifyingGlass} text="Follow your interests." />
          <Content
            icon={UsersThree}
            text="Hear what people are talking about."
          />
          <Content icon={ChatCircle} text="Join the conversation." />
        </div>

        <img
          src={logoTwitter}
          alt="Logo do Twitter"
          className="w-full h-full brightness-90 absolute -right-[25%]"
        />
      </div>

      <div className="flex-1 h-full flex items-center justify-center mx-5 relative">
        <div className="max-w-[280px]">
          <div className="mb-12">
            <img src={logoTwitter} alt="Logo do Twitter" className="w-9 h-9" />
            <p className="text-2xl font-bold mt-3">
              See what's happening in the world right now
            </p>
          </div>

          <div>
            <p className="font-bold mb-3">Join Twitter today.</p>

            <NavLink to="/flow/signup">
              <button
                data-istouchsupported={isTouchSupported}
                className="w-full rounded-full bg-twitterBlue px-3 py-2 text-white font-bold transition-all duration-300
            data-[istouchsupported=false]:hover:brightness-90"
              >
                Sign Up
              </button>
            </NavLink>

            <button
              data-istouchsupported={isTouchSupported}
              className="w-full rounded-full px-3 py-2 text-twitterBlue font-bold border border-twitterBlue mt-3 transition-all duration-300
            data-[istouchsupported=false]:hover:bg-zinc-50"
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
