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
        <div aria-label="Banner">
          <img
            src="https://source.unsplash.com/random?sun"
            alt="User profile banner"
            className="max-h-[200px] w-full"
            style={{
                height: 'calc(100% - 20vh)'
            }}
          />
        </div>
        <div></div>
      </div>
    </>
  );
}
