import { NavLink } from "react-router-dom";
import { isTouchSupported } from "../utils/touchUtils";

export function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-bold px-2 leading-10">Oops!</h1>
      <p className="mb-8 text-center">
        Sorry, an unexpected error has occured!
      </p>
      <NavLink
        to="/"
        data-istouchsupported={isTouchSupported}
        className="rounded-full bg-twitterBlue px-3 py-2 text-white font-bold 
        data-[istouchsupported=false]:hover:brightness-90"
      >
        Back to home
      </NavLink>
    </div>
  );
}
