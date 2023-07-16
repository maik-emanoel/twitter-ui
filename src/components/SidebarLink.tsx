import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
    path: string,
    icon: ReactNode,
    text: string
}

export function SidebarLink( {path, icon, text} :SidebarLinkProps ) {
  return (
    <NavLink to={path} className="flex items-center gap-5 text-xl font-bold">
      {icon}
      <span className="md:hidden">{text}</span>
    </NavLink>
  );
}
