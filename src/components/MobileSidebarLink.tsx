import { ReactNode } from "react";

interface MobileSidebarLinkProps {
    icon: ReactNode,
    text: string
}

export function MobileSidebarLink({icon, text}: MobileSidebarLinkProps) {
  return (
    <a href="#">
      <div className="p-4 flex items-center gap-5 active:bg-zinc-100">
        {icon}
        <span className="font-bold text-xl">{text}</span>
      </div>
    </a>
  );
}
