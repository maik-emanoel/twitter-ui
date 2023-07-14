import { NavLink } from "react-router-dom";
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

export function Sidebar() {
  return (
    <aside className="py-6 px-5 flex flex-col gap-8 md:items-center">
      <img src={twitterLogo} alt="Logo" className="w-8 h-8" />

      <nav className="flex flex-col gap-8">
        <NavLink to="/" className="flex items-center gap-5 text-xl font-bold">
          <House className="w-8 h-8" weight="fill" />
          <span className="md:hidden">Home</span>
        </NavLink>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <Hash className="w-8 h-8" />
          <span className="md:hidden">Explorer</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <Bell className="w-8 h-8" />
          <span className="md:hidden">Notifications</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <Envelope className="w-8 h-8" />
          <span className="md:hidden">Messages</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <BookmarkSimple className="w-8 h-8" />
          <span className="md:hidden">Bookmarks</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <FileText className="w-8 h-8" />
          <span className="md:hidden">Lists</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <User className="w-8 h-8" />
          <span className="md:hidden">Profile</span>
        </a>
        <a href="" className="flex items-center gap-5 text-xl font-bold">
          <DotsThreeCircle className="w-8 h-8" />
          <span className="md:hidden">More</span>
        </a>
      </nav>

      <button className="bg-twitterBlue rounded-full p-4 flex justify-center w-full text-white text-xl font-black hover:brightness-90 md:p-2">
        <Pencil className="w-6 h-6" />
        <span className="md:hidden">Tweet</span>
      </button>
    </aside>
  );
}
