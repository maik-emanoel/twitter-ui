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
import { useTweetContext } from "../context/TweetContext";

interface MenuItemProps {
  icon: React.ElementType<IconProps>;
  text: string;
  isDeleteButton?: boolean;
  tweetId?: string;
}

interface MenuProps {
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuVisible: boolean;
  tweetId: string;
}

function MenuItem(props: MenuItemProps) {
  const { tweets, setTweets } = useTweetContext();

  return (
    <div
      data-isdeletebutton={props.isDeleteButton}
      className="py-3 px-4 flex items-center gap-2 data-[isdeletebutton=true]:text-red-600"
      onClick={() => {
        if (props.isDeleteButton) {
          const updatedTweets = tweets.filter((tweet) => props.tweetId !== tweet.id)
          setTweets(updatedTweets)
        }
      }}
    >
      <props.icon size={18.75} />
      <span className="font-bold">{props.text}</span>
    </div>
  );
}

export function Menu({ setIsMenuVisible, isMenuVisible, tweetId }: MenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
        setIsMenuVisible(false);
      }
    }

    setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 100);

    if (window.matchMedia("(max-width: 425px)").matches && isMenuVisible) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "initial";
    };
  }, [setIsMenuVisible, isMenuVisible]);

  return (
    <div
      className="sm:bg-black/40 sm:fixed sm:z-50 sm:inset-0 sm:dark:bg-[rgba(91,_112,_131,_0.4)]"
      onClick={(e) => e.preventDefault()}
    >
      <div
        ref={menuRef}
        className="absolute top-0 right-0 w-72 h-fit z-20 bg-white rounded-xl shadow-menu dark:bg-bodyDark dark:shadow-menuDark sm:bottom-0 sm:top-auto sm:w-full sm:rounded-b-none sm:dark:shadow-none"
        onClick={(e) => e.preventDefault()}
      >
        <MenuItem icon={Trash} text="Delete" isDeleteButton tweetId={tweetId} />
        <MenuItem icon={PushPinSimple} text="Pin to your profile" />
        <MenuItem icon={Sparkle} text="Highlight on your profile" />
        <MenuItem icon={ChatCircle} text="Change who can reply" />
        <MenuItem icon={ChartBar} text="View post engagements" />
        <MenuItem icon={Code} text="Embed post" />
        <MenuItem icon={ChartBar} text="View post analytics" />

        <button
          className="hidden w-[95%] h-11 my-3 mx-auto border rounded-full items-center justify-center font-bold transition-colors duration-200 sm:flex active:bg-tweetColor dark:border-grayBorderDark dark:active:bg-white/10"
          onClick={() => setIsMenuVisible(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
