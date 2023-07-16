import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "@phosphor-icons/react";
import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8 md:items-center">
      <img src={twitterLogo} alt="Logo" className="w-8 h-8" />

      <nav className="flex flex-col gap-2">
        <SidebarLink
          path="/"
          icon={<House size={32} weight="fill" />}
          text="Home"
        />
        <SidebarLink path="" icon={<Hash size={32} />} text="Explorer" />
        <SidebarLink path="" icon={<Bell size={32} />} text="Notifications" />
        <SidebarLink path="" icon={<Envelope size={32} />} text="Messages" />
        <SidebarLink
          path=""
          icon={<BookmarkSimple size={32} />}
          text="Bookmarks"
        />
        <SidebarLink path="" icon={<FileText size={32} />} text="Lists" />
        <SidebarLink path="" icon={<User size={32} />} text="Profile" />
        <SidebarLink
          path=""
          icon={<DotsThreeCircle size={32} />}
          text="More"
        />
      </nav>

      <button className="bg-twitterBlue rounded-full p-4 flex justify-center w-full text-white text-xl font-black hover:brightness-90 md:p-2">
        <Pencil className="w-6 h-6 hidden md:block" />
        <span className="md:hidden">Tweet</span>
      </button>
    </aside>
  );
}
