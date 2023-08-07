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
  comments,
  retweets,
  likes,
}: TweetProps) {
  return (
    <Link
      to="/status"
      className="w-full py-6 px-5 grid grid-cols-[max-content_1fr] gap-3 border-b-[1px] border-grayBorder transition-colors duration-200 dark:border-grayBorderDark hover:bg-black/[0.03] hover:dark:bg-white/[0.03]"
    >
      <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full" />

      <div className="flex flex-col gap-[2px] max-w-[500px]">
        <div className="flex items-center gap-1">
          <strong>{userName}</strong>
          <span className="text-sm text-[#89a2b8] dark:text-[#828282]">
            @{userLogin}
          </span>
        </div>

        <div>
          <p
            className="leading-5 dark:text-tweetColor w-full whitespace-pre-line"
            style={{ overflowWrap: "anywhere" }}
          >
            {content}
          </p>
          {imageUrl && (
            <div className="max-w-[500px] w-full mt-2 min-w-0">
              <img
                src={imageUrl}
                alt="Imagem aleatória"
                className="rounded-2xl aspect-square w-full object-cover"
              />
            </div>
          )}
        </div>

        <div
          className="flex items-center mt-3 justify-between h-5"
          onClick={(e) => e.preventDefault()}
        >
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <ChatCircle size={18.75} />
            </div>
            <span className="pl-1">{comments ? comments : "01"}</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-retweetGreen group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-retweetGreen/10">
              <ArrowsClockwise size={18.75} />
            </div>
            <span className="pl-1">
              {retweets ? String(retweets).padStart(2, "0") : "09"}
            </span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-likePink group">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-likePink/10">
              <Heart size={18.75} />
            </div>
            <span className="pl-1">{likes ? likes : 2004}</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group sm:hidden">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <ChartLine size={18.75} />
            </div>
            <span className="pl-1">1.2k</span>
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue group sm:hidden">
            <div className="w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-twitterBlue/10">
              <Export size={18.75} />
            </div>
          </button>
        </div>
      </div>
    </Link>
  );
}
