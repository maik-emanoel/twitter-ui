import { ArrowLeft } from "@phosphor-icons/react";
import { isTouchSupported } from "../utils/touchUtils";
import { Header } from "../components/Header";

export function Profile() {
  return (
    <>
      <Header title="" className="justify-normal py-0 gap-9">
        <button
          onClick={() => window.history.back()}
          data-istouchsupported={isTouchSupported}
          className="w-9 h-9 grid place-items-center rounded-full data-[istouchsupported=false]:hover:bg-black/10 dark:data-[istouchsupported=false]:hover:bg-white/10"
        >
          <ArrowLeft size={20} weight="bold" />
        </button>

        <div className="flex flex-col">
          <span>Maik</span>
          <span className="text-xs font-normal opacity-70">1 post</span>
        </div>
      </Header>

      <div>
        <div aria-label="User profile banner">
          <div
            className="w-full bg-twitterBlue flex-shrink-0"
            style={{
              height: "min(33vw, 199px)",
            }}
          ></div>
        </div>

        <div className="px-4 pt-3 mb-4">
          <div className="grid items-start relative min-h-[48px]">
            <div
              style={{
                width: "max(45px, min(135px, 22vw))",
              }}
              className="p-1 rounded-full bg-white dark:bg-bodyDark absolute -translate-y-[52%]"
            >
              <img
                src="https://github.com/maik-emanoel.png"
                alt="Maik Emanoel"
                className="rounded-full"
              />
            </div>

            <button
              data-istouchsupported={isTouchSupported}
              className="justify-self-end w-28 h-9 rounded-full font-bold text-white/95a border border-black/10 dark:border-white/40 transition-all duration-200 
            data-[istouchsupported=false]:hover:bg-black/10 
            dark:data-[istouchsupported=false]:hover:bg-white/10"
            >
              Edit Profile
            </button>
          </div>

          <div
            style={{
              padding: "min(calc(2vw + 7px), 67px) 0 0 0",
            }}
          >
            oi
          </div>
        </div>
      </div>
    </>
  );
}
