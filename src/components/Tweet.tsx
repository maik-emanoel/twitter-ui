import { ArrowsClockwise, ChatCircle, Heart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link
      to="/status"
      className="w-full py-6 px-5 grid grid-cols-[3rem_1fr] gap-3 border-b-[1px] border-grayBorder dark:border-grayBorderDark"
    >
      <img
        src="https://github.com/maik-emanoel.png"
        alt="Maik Emanoel"
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong>Maik Emanoel</strong>
          <span className="text-sm text-[#89a2b8] dark:text-[#828282]">@maik_emanoel</span>
        </div>

        <p className="leading-5 dark:text-tweetColor max-w-[600px] break-words">{content}</p>

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
