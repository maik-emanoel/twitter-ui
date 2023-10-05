import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context/SidebarContext";

interface MobileSidebarLinkProps {
  icon: ReactNode;
  text: string;
  path: string;
}

export function MobileSidebarLink({
  icon,
  text,
  path,
}: MobileSidebarLinkProps) {
  const { handleHideMobileSidebar } = useSidebarContext();

  return (
    <NavLink to={path} onClick={() => handleHideMobileSidebar()}>
      <div className="p-4 flex items-center gap-5 active:bg-zinc-100 active:dark:bg-zinc-800">
        {icon}
        <span className="font-bold text-xl">{text}</span>
      </div>
    </NavLink>
  );
}
