import {
  ArrowsClockwise,
  ChartLine,
  ChatCircle,
  Export,
  Heart,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { TweetProps } from "../pages/Timeline";

export function Tweet({
  userAvatar,
  userName,
  userLogin,
  content,
  imageUrl,
}: TweetProps) {
  return (
    <Link
      to="/status"
      className="w-full py-6 px-5 grid grid-cols-[3rem_1fr] gap-3 border-b-[1px] border-grayBorder dark:border-grayBorderDark"
    >
      <img src={userAvatar} alt={userName} className="w-12 h-12 rounded-full" />

      <div className="flex flex-col gap-2 max-w-[500px]">
        <div className="flex items-center gap-1">
          <strong>{userName}</strong>
          <span className="text-sm text-[#89a2b8] dark:text-[#828282]">
            @{userLogin}
          </span>
        </div>

        <div>
          <p className="leading-5 dark:text-tweetColor max-w-[600px] break-words">
            {content}
          </p>
          {imageUrl && (
            <div className="max-w-[500px] w-full mt-2">
              <img
                src={imageUrl}
                alt=""
                className="rounded-2xl aspect-square w-full"
              />
            </div>
          )}
        </div>

        <div
          className="flex items-center gap-12 mt-3 justify-between h-5"
          onClick={(e) => e.preventDefault()}
        >
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <ChatCircle size={18.75} />
            </div>
            <span>20</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-retweetGreen group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full transition-colors duration-200 group-hover:bg-retweetGreen/10">
              <ArrowsClockwise size={18.75} />
            </div>
            <span>20</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-likePink group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full transition-colors duration-200 group-hover:bg-likePink/10">
              <Heart size={18.75} />
            </div>
            <span>20</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <ChartLine size={18.75} />
            </div>
            <span>20</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <Export size={18.75} />
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
}
