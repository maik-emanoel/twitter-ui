import { Link } from "react-router-dom";
import { TweetProps } from "../pages/Timeline";
import { ButtonsWrapper } from "./ButtonsWrapper";

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
  const isMobile = window.matchMedia("(max-width: 768px)").matches

  return (
    <Link
      to="/status"
      className={`w-full py-6 px-5 grid grid-cols-[max-content_1fr] gap-3 border-b-[1px] border-grayBorder transition-colors duration-200 dark:border-grayBorderDark ${isMobile ? '' : 'hover:bg-black/[0.03] hover:dark:bg-white/[0.03]'}`}
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

        <ButtonsWrapper comments={comments} retweets={retweets} likes={likes} />
      </div>
    </Link>
  );
}
