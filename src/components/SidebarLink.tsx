import { IconProps } from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  path: string;
  icon: React.ElementType<IconProps>;
  text: string;
}

export function SidebarLink({ path, icon: Icon, text }: SidebarLinkProps) {
  const location = useLocation(); 
  const isActive = location.pathname === path; 

  return (
    <NavLink
      to={path}
      className="flex items-center gap-5 w-fit text-xl font-bold rounded-full py-2 pl-2 pr-6 hover:bg-zinc-100 hover:dark:bg-zinc-800 md:p-2"
    >
      <Icon size={32} weight={isActive ? "fill" : "regular"} />
      <span className="md:hidden">{text}</span>
    </NavLink>
  );
}