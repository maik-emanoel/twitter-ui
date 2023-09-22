import {
  ChartBar,
  ChatCircle,
  Code,
  IconProps,
  PushPinSimple,
  Sparkle,
  Trash,
} from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

interface MenuItemProps {
  icon: React.ElementType<IconProps>;
  text: string;
}

interface MenuProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuItem(props: MenuItemProps) {
  return (
    <div className="py-3 px-4 flex items-center gap-2">
      <props.icon size={18.75} />
      <span className="font-bold">{props.text}</span>
    </div>
  );
}

export function Menu({ setIsMenuVisible }: MenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
        console.log("oi");
        setIsMenuVisible(false);
      }
    }

    setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setIsMenuVisible]);

  return (
    <div className="sm:bg-red-500 sm:fixed sm:z-50 sm:inset-0">
      <div
        ref={menuRef}
        className="absolute top-0 right-0 w-72 h-fit z-20 bg-white rounded-xl shadow-menu dark:bg-bodyDark dark:shadow-menuDark sm:w-full sm:bottom-2"
        onClick={(e) => e.preventDefault()}
      >
        <MenuItem icon={Trash} text="Delete" />
        <MenuItem icon={PushPinSimple} text="Pin to your profile" />
        <MenuItem icon={Sparkle} text="Highlight on your profile" />
        <MenuItem icon={ChatCircle} text="Change who can reply" />
        <MenuItem icon={ChartBar} text="View post engagements" />
        <MenuItem icon={Code} text="Embed post" />
        <MenuItem icon={ChartBar} text="View post analytics" />
      </div>
    </div>
  );
}
