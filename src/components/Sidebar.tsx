import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThree,
  DotsThreeCircle,
  Envelope,
  FileText,
  House,
  MagnifyingGlass,
  Pencil,
  User,
} from "@phosphor-icons/react";
import { SidebarLink } from "./SidebarLink";

export function Sidebar() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <aside className="pt-6 px-5 flex flex-col justify-between md:items-center h-screen sticky top-0 md:px-0 sm:hidden">
      <div className="flex flex-col gap-8 md:items-center">
        <img src={twitterLogo} alt="Logo" className="w-8 h-8" />

        <nav className="flex flex-col gap-1">
          <SidebarLink
            path="/"
            icon={<House size={32} weight="fill" />}
            text="Home"
          />
          <SidebarLink
            path=""
            icon={<MagnifyingGlass size={32} />}
            text="Explorer"
          />
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

        <button className="bg-twitterBlue rounded-full flex justify-center items-center w-full h-14 text-white text-xl font-black hover:brightness-90 md:p-2 md:w-10 md:h-10">
          <Pencil className="w-6 h-6 hidden md:block" />
          <span className="md:hidden">Tweet</span>
        </button>
      </div>

      <div
        className={`p-4 flex items-center gap-3 my-3 rounded-full transition-colors duration-200 select-none cursor-pointer ${
          !isMobile ? "hover:bg-zinc-100 hover:dark:bg-zinc-800" : ""
        } md:w-16 md:h-16 md:p-3`}
      >
        <img
          src="https://github.com/maik-emanoel.png"
          alt="Foto de perfil do usuário"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-1 justify-between items-center md:hidden">
          <div className="flex flex-col flex-shrink-0 text-sm">
            <span className="font-bold">Maik</span>
            <span className="opacity-70 dark:opacity-50">@maik_emanoel</span>
          </div>
          <div>
            <DotsThree weight="bold" size={18.75} />
          </div>
        </div>
      </div>
    </aside>
  );
}
