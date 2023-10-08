import {
  Bell,
  Envelope,
  House,
  IconProps,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";
import { useScrollDirection } from "../context/ScrollContext";

interface BottombarLinkProps {
  to: string;
  icon: React.ElementType<IconProps>;
}

function BottombarLink({ to, icon: Icon }: BottombarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname.split("/", 2).join("/") === to;

  return (
    <NavLink to={to} className="flex items-center h-full justify-center">
      <Icon
        size={24}
        weight={isActive ? "fill" : "regular"}
        className={`${isActive ? "text-twitterBlue" : ""}`}
      />
    </NavLink>
  );
}

export function Bottombar() {
  const scrollDirection = useScrollDirection();

  return (
    <nav
      data-isscrolldown={scrollDirection === "down"}
      className="hidden fixed bottom-0 w-full h-14 bg-white border-t-[1px] border-grayBorder transition-opacity duration-200 dark:bg-bodyDark dark:border-grayBorderDark sm:block data-[isscrolldown=true]:opacity-30"
    >
      <div className="flex items-center h-full justify-around">
        <BottombarLink to="/" icon={House} />
        <BottombarLink to="/explorer" icon={MagnifyingGlass} />
        <BottombarLink to="/notifications" icon={Bell} />
        <BottombarLink to="/messages" icon={Envelope} />
      </div>
    </nav>
  );
}
