import { NavLink, useLocation } from "react-router-dom";
import { isTouchSupported as touchIsSupported } from "../utils/touchUtils";

interface LinkProps {
  path: string;
  name: string;
}

export function Link({ path, name }: LinkProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavLink
      to={path}
      className={`w-full h-full grid place-items-center text-inherit relative ${
        isActive ? "dark:text-white" : "text-zinc-400 dark:text-white/40"
      } ${
        touchIsSupported
          ? ""
          : "hover:bg-zinc-100 hover:dark:bg-white/10"
      }`}
    >
      <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
        {name}
      </span>
      {isActive && (
        <span className="absolute bottom-[1px] w-14 h-1 bg-twitterBlue rounded-full"></span>
      )}
    </NavLink>
  );
}