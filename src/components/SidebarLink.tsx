import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
    path: string,
    icon: ReactNode,
    text: string
}

export function SidebarLink( {path, icon, text} :SidebarLinkProps ) {
  return (
    <NavLink to={path} className="flex items-center gap-5 w-fit text-xl font-bold rounded-full py-2 pl-2 pr-6 hover:bg-zinc-100 hover:dark:bg-zinc-800 md:p-2">
      {icon}
      <span className="md:hidden">{text}</span>
    </NavLink>
  );
}
