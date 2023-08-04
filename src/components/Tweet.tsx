import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
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

      <div className="flex flex-col gap-2">
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

        <div className="flex items-center gap-12 mt-3">
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue">
            <ChatCircle className="w-5 h-5" />
            20
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue">
            <ArrowsClockwise className="w-5 h-5" />
            20
          </button>

          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitterBlue">
            <Heart className="w-5 h-5" />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
