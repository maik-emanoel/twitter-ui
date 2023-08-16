import { Bell, Envelope, House, IconProps, MagnifyingGlass } from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";

interface BottombarLinkProps {
  to: string;
  icon: React.ElementType<IconProps>;
}

export function BottombarLink({ to, icon: Icon }: BottombarLinkProps) {
  const location = useLocation();
  const isActive = location.pathname.split('/', 2).join('/') === to;

  return (
    <NavLink
      to={to}
      className="flex items-center h-full justify-center"
    >
      <Icon size={24} weight={isActive ? "fill" : "regular"} />
    </NavLink>
  );
}

export function Bottombar() {
  return (
    <nav className="hidden fixed bottom-0 w-full h-14 bg-white border-t-[1px] border-grayBorder dark:bg-bodyDark dark:border-grayBorderDark sm:block">
      <div className="flex items-center h-full justify-around">
        <BottombarLink to="/" icon={House} />
        <BottombarLink to="/explorer" icon={MagnifyingGlass} />
        <BottombarLink to="/notifications" icon={Bell} />
        <BottombarLink to="/messages" icon={Envelope} />
      </div>
    </nav>
  );
}
