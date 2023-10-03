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
import { isTouchSupported } from "../utils/touchUtils";
import { initialUser } from "../initialUser";

export function Sidebar() {
  return (
    <aside className="pt-6 px-5 flex flex-col justify-between md:items-center h-screen sticky top-0 md:px-0 sm:hidden">
      <div className="flex flex-col gap-8 md:items-center">
        <img
          src={twitterLogo}
          alt="Logo"
          className="w-8 h-8 ml-2 cursor-pointer"
        />

        <nav className="flex flex-col gap-1">
          <SidebarLink path="/" icon={House} text="Home" />
          <SidebarLink
            path="/explorer"
            icon={MagnifyingGlass}
            text="Explorer"
          />
          <SidebarLink path="/notifications" icon={Bell} text="Notifications" />
          <SidebarLink path="/messages" icon={Envelope} text="Messages" />
          <SidebarLink
            path="/bookmarks"
            icon={BookmarkSimple}
            text="Bookmarks"
          />
          <SidebarLink path="/lists" icon={FileText} text="Lists" />
          <SidebarLink path={`/${initialUser.login}`} icon={User} text="Profile" />
          <SidebarLink path="" icon={DotsThreeCircle} text="More" isNotAlink />
        </nav>

        <button data-istouchsupported={isTouchSupported} className="bg-twitterBlue rounded-full flex justify-center items-center w-full h-14 text-white text-xl font-black md:p-2 md:w-10 md:h-10 data-[istouchsupported=false]:hover:brightness-90">
          <Pencil className="w-6 h-6 hidden md:block" />
          <span className="md:hidden">Tweet</span>
        </button>
      </div>

      <div
      data-istouchsupported={isTouchSupported}
        className="p-4 flex items-center gap-3 my-3 rounded-full transition-colors duration-200 select-none cursor-pointer
        md:w-16 md:h-16 md:p-3 
        data-[istouchsupported=false]:hover:bg-zinc-100 
        data-[istouchsupported=false]:hover:dark:bg-zinc-800"
      >
        <img
          src={initialUser.avatarURL}
          alt={`Foto de perfil do usuário ${initialUser.name}`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-1 justify-between items-center md:hidden">
          <div className="flex flex-col flex-shrink-0 text-sm">
            <span className="font-bold">{initialUser.name}</span>
            <span className="opacity-70 dark:opacity-50">@{initialUser.login}</span>
          </div>
          <div>
            <DotsThree weight="bold" size={18.75} />
          </div>
        </div>
      </div>
    </aside>
  );
}
