import { Link } from "react-router-dom";
import { TweetProps } from "../pages/Timeline";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { isTouchSupported } from "../utils/touchUtils";
import { DotsThree } from "@phosphor-icons/react";
import { useState } from "react";
import { Menu } from "./Menu";

export function Tweet({
  userAvatar,
  userName,
  userLogin,
  content,
  imageUrl,
  comments,
  retweets,
  likes,
  id,
}: TweetProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <Link
      to={`/status/${id}`}
      data-istouchsupported={isTouchSupported}
      className="w-full py-6 px-5 grid grid-cols-[max-content_1fr] gap-3 border-b-[1px] border-grayBorder transition-colors duration-200 dark:border-grayBorderDark 
      data-[istouchsupported=false]:hover:bg-black/[0.03] 
      data-[istouchsupported=false]:hover:dark:bg-white/[0.03]"
    >
      <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full" />

      <div className="flex flex-col gap-[2px] max-w-[500px]">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-1">
            <strong>{userName}</strong>
            <span className="text-sm text-[#89a2b8] dark:text-[#828282]">
              @{userLogin}
            </span>
          </div>

          <div
            data-istouchsupported={isTouchSupported}
            className="absolute -top-2 right-0 w-[34.75px] h-[34.75px] group rounded-full grid place-items-center 
            data-[istouchsupported=false]:hover:bg-twitterBlue/10"
            onClick={(e) => {
              e.preventDefault()
              setIsMenuVisible(true)
            }}
          >
            <DotsThree
              weight="bold"
              size={18.75}
              data-istouchsupported={isTouchSupported}
              className="text-black/50 dark:text-white/50 data-[istouchsupported=false]:group-hover:text-twitterBlue"
            />
          </div>

          {isMenuVisible && (
            <Menu setIsMenuVisible={setIsMenuVisible} />
          )}
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
