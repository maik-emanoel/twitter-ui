import { Link } from "react-router-dom";
import { TweetProps } from "../pages/Timeline";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { isTouchSupported } from "../utils/touchUtils";
import { DotsThree } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Menu } from "./Menu";
import { ProfileInfo } from "./ProfileInfo";

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
  isLiked,
}: TweetProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isProfileInfoVisible, setIsProfileInfoVisible] = useState(false);
  const profileInfoRef = useRef<null | HTMLDivElement>(null);

  const path = window.location.pathname;

  function handleMouseEnter() {
    if (path != "/") return;

    setTimeout(() => {
      setIsProfileInfoVisible(true);
    }, 500);
  }

  let timeout: number;

  function handleMouseLeave() {
    if (path != "/") return;
    if (profileInfoRef.current) {
      setIsProfileInfoVisible(true)

      profileInfoRef.current.onmouseenter = () => {
        clearTimeout(timeout)
      }

      profileInfoRef.current.onmouseleave = () => {
        setTimeout(() => {
          setIsProfileInfoVisible(false)
        }, 500)
      }
    }

    timeout = setTimeout(() => {
      setIsProfileInfoVisible(false)
    }, 1000)
  }

  return (
    <Link
      to={`/status/${id}`}
      data-istouchsupported={isTouchSupported}
      className="w-full py-6 px-5 grid grid-cols-[max-content_1fr] gap-3 border-b border-grayBorder transition-[background] duration-200 dark:border-grayBorderDark relative 
      data-[istouchsupported=false]:hover:bg-black/[0.03] 
      data-[istouchsupported=false]:hover:dark:bg-white/[0.03]"
    >
      <img
        src={userAvatar}
        alt={userName}
        className="w-10 h-10 rounded-full object-cover object-top"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className="flex flex-col flex-1 gap-[2px] max-w-[500px]">
        <div
          data-ismenuvisible={isMenuVisible}
          className="flex items-center justify-between relative
          sm:data-[ismenuvisible=true]:static"
        >
          <div className="w-full grid grid-cols-[auto,1fr] gap-x-1 pr-8 sm:gap-0 overflow-hidden">
            <strong
              className="whitespace-nowrap w-full overflow-hidden text-ellipsis leading-5 sm:mr-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {userName}
            </strong>
            <span
              className="text-sm text-[#89a2b8] dark:text-[#828282] w-fit"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              @{userLogin}
            </span>
          </div>

          <div
            data-istouchsupported={isTouchSupported}
            className="absolute -top-2 right-0 w-[34.75px] h-[34.75px] group rounded-full grid place-items-center 
            data-[istouchsupported=false]:hover:bg-twitterBlue/10"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuVisible(true);
            }}
            title="Menu"
          >
            <DotsThree
              weight="bold"
              size={18.75}
              data-istouchsupported={isTouchSupported}
              className="text-black/50 dark:text-white/50 data-[istouchsupported=false]:group-hover:text-twitterBlue"
            />
          </div>

          {isMenuVisible && (
            <Menu
              setIsMenuVisible={setIsMenuVisible}
              isMenuVisible={isMenuVisible}
              tweetId={id}
              userLogin={userLogin}
            />
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

        <ButtonsWrapper
          comments={comments}
          retweets={retweets}
          likes={likes}
          id={id}
          isLikedTweet={isLiked}
        />
      </div>

      {isProfileInfoVisible && (
        <ProfileInfo
          profileInfoRef={profileInfoRef}
          userAvatar={userAvatar}
          userName={userName}
          userLogin={userLogin}
        />
      )}
    </Link>
  );
}
