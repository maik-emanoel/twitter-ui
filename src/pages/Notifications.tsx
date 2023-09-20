import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { isTouchSupported as touchIsSupported } from "../utils/touchUtils";

interface NotificationsLinkProps {
  path: string;
  name: string;
}

function NotificationsLink({ path, name }: NotificationsLinkProps) {
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
          : "hover:bg-zinc-100 hover:dark:bg-zinc-800"
      }`}
    >
      <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
        {name}
      </span>
      {isActive && (
        <span className="absolute bottom-0 w-14 h-1 bg-twitterBlue rounded-full"></span>
      )}
    </NavLink>
  );
}

export function Notifications() {
  return (
    <>
      <Header title="Notifications" />
      <div className="flex h-[53px] items-center justify-around">
        <NotificationsLink path="/notifications" name="All" />
        <NotificationsLink path="/notifications/verified" name="Verified" />
        <NotificationsLink path="/notifications/mentions" name="Mentions" />
      </div>
      <Outlet />
    </>
  );
}
