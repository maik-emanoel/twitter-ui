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
import { useState } from "react";
import { useUser } from "../context/UserContext";

export function MobileSidebar() {
  const { handleHideMobileSidebar } = useSidebarContext();
  const [isVisible, setIsVisible] = useState(true);
  const { userInfo } = useUser();

  function addDelayOnCloseMobileSidebar() {
    setIsVisible(false);

    setTimeout(() => {
      handleHideMobileSidebar();
    }, 200);
  }

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm z-20"
      onClick={() => addDelayOnCloseMobileSidebar()}
    >
      <div
        data-visible={isVisible}
        className="min-w-[280px] max-w-[70%] h-screen bg-white shadow-lg overflow-y-auto dark:bg-bodyDark dark:shadow-zinc-800 data-[visible=true]:animate-fadeIn data-[visible=false]:animate-fadeOut"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[53px] px-4 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-30 dark:bg-bodyDark/95">
          <span className="font-bold">Account Info</span>
          <button onClick={() => addDelayOnCloseMobileSidebar()}>
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex flex-col">
          <div className="flex justify-between">
            <img
              src={userInfo.avatar}
              alt={`Foto de perfil do usuário ${userInfo.name}`}
              className="w-10 h-10 rounded-full object-cover object-top"
            />
            <div className="w-8 h-8 rounded-full border border-grayBorder flex items-center justify-center">
              <Plus size={18} />
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <span className="font-bold leading-5">{userInfo.name}</span>
            <span className="text-sm opacity-80">@{userInfo.login}</span>
          </div>

          <div className="flex mt-3 text-sm gap-5">
            <div>
              <span className="font-bold mr-1 opacity-80">
                {userInfo.following}
              </span>
              <span>Following</span>
            </div>
            <div>
              <span className="font-bold mr-1 opacity-80">
                {userInfo.followers}
              </span>
              <span>Follower</span>
            </div>
          </div>
        </div>

        <MobileSidebarLink
          path={`/${userInfo.login}`}
          icon={<User size={24} />}
          text="Profile"
        />
        <MobileSidebarLink
          path=""
          icon={<TwitterLogo size={24} weight="fill" />}
          text="Twitter Blue"
        />
        <MobileSidebarLink path="" icon={<FileText size={24} />} text="Lists" />
        <MobileSidebarLink
          path=""
          icon={<BookmarkSimple size={24} />}
          text="Bookmarks"
        />
        <MobileSidebarLink
          path=""
          icon={<Users size={24} />}
          text="Communities"
        />

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
