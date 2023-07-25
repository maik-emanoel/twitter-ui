import {
  ArrowSquareUpRight,
  BookmarkSimple,
  ChartLine,
  FileText,
  Gear,
  Plus,
  Question,
  RocketLaunch,
  SignOut,
  TwitterLogo,
  User,
  Users,
  X,
} from "@phosphor-icons/react";
import { useSidebarContext } from "../context/SidebarContext";
import { MobileSidebarLink } from "./MobileSidebarLink";
import { SectionLinks } from "./SectionLinks";

export function MobileSidebar() {
  const { handleHideMobileSidebar } = useSidebarContext();

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-20">
      <div className="min-w-[280px] max-w-[70%] min-h-screen bg-white shadow-lg dark:bg-bodyDark dark:shadow-zinc-800">
        <div className="h-[53px] px-4 flex items-center justify-between">
          <span className="font-bold">Account Info</span>
          <button onClick={handleHideMobileSidebar}>
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex flex-col">
          <div className="flex justify-between">
            <img
              src="https://github.com/maik-emanoel.png"
              alt="Maik Emanoel"
              className="w-10 h-10 rounded-full"
            />
            <div className="w-8 h-8 rounded-full border border-grayBorder flex items-center justify-center">
              <Plus size={18} />
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <span className="font-bold leading-5">Maik</span>
            <span className="text-sm opacity-80">@maik_emanoel</span>
          </div>

          <div className="flex mt-3 text-sm gap-5">
            <div>
              <span className="font-bold mr-1 opacity-80">3</span>
              <span>Following</span>
            </div>
            <div>
              <span className="font-bold mr-1 opacity-80">1.232</span>
              <span>Follower</span>
            </div>
          </div>
        </div>

        <MobileSidebarLink icon={<User size={24} />} text="Profile" />
        <MobileSidebarLink
          icon={<TwitterLogo size={24} weight="fill" />}
          text="Twitter Blue"
        />
        <MobileSidebarLink icon={<FileText size={24} />} text="Lists" />
        <MobileSidebarLink
          icon={<BookmarkSimple size={24} />}
          text="Bookmarks"
        />
        <MobileSidebarLink icon={<Users size={24} />} text="Communities" />

        <div>
          <span className="w-[89%] h-[1px] bg-grayBorder block mx-auto my-[2px]"></span>
        </div>

        <div>
          <SectionLinks title="Creator Studio">
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <ChartLine size={18} />
              <span className="leading-5">Analytics</span>
            </a>
          </SectionLinks>
          <SectionLinks title="Professional Tools">
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <RocketLaunch size={18} />
              <span className="leading-5">Twitter for Professionals</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <ArrowSquareUpRight size={18} />
              <span className="leading-5">Twitter Ads</span>
            </a>
          </SectionLinks>
          <SectionLinks title="Settings and Support">
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <Gear size={18} />
              <span className="leading-5">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <Question size={18} />
              <span className="leading-5">Help Center</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 p-3 active:bg-zinc-100 active:dark:bg-zinc-800"
            >
              <SignOut size={18} />
              <span className="leading-5">Log Out</span>
            </a>
          </SectionLinks>
        </div>
      </div>
    </div>
  );
}
