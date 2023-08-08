import {
  ChatCircle,
  ArrowsClockwise,
  Heart,
  ChartLine,
  Export,
} from "@phosphor-icons/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonsWrapperProps {
  comments: number | undefined;
  retweets: number | undefined;
  likes: number | undefined;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  text: string | number;
  handleIncreaseLike?: () => void;
  isLiked?: boolean;

  hoverTextColor: string;
  hoverBgColor: string;
  activeTextColor: string;
  activeBgColor: string;
  ariaLabel: string;
}

function Button({
  icon: Icon,
  text,
  hoverTextColor,
  hoverBgColor,
  handleIncreaseLike,
  isLiked,
  className,
  activeTextColor,
  activeBgColor,
  ariaLabel,
}: ButtonProps) {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [showTooltip, setShowTooltip] = useState(false);

  let timeout: number;

  function handleMouseEnter() {
    timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 500);
  }

  function handleMouseLeave() {
    clearTimeout(timeout);
    setShowTooltip(false);
  }

  return (
    <button
      className={twMerge(
        `flex items-center gap-2 text-sm text-[#89a2b8] ${
          isMobile ? activeTextColor : hoverTextColor
        } group`,
        className
      )}
      onClick={handleIncreaseLike}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 ${
          isMobile ? activeBgColor : hoverBgColor
        } active:scale-95 relative`}
        aria-label={ariaLabel}
      >
        {!isLiked ? <Icon size={18.75} /> : <Icon size={18.75} weight="fill" />}
        {showTooltip && <span className="tooltip">{ariaLabel}</span>}
      </div>
      <span className="pl-1">{text}</span>
    </button>
  );
}

export function ButtonsWrapper({
  comments,
  retweets,
  likes,
}: ButtonsWrapperProps) {
  const [initialLikes, setInitialLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  function handleIncreaseLike() {
    if (isLiked) {
      setIsLiked(false);
      setInitialLikes((prevState) => (prevState ?? 2004) - 1);
    } else {
      setInitialLikes((prevState) => (prevState ?? 2004) + 1);
      setIsLiked(true);
    }
  }

  return (
    <div
      className="flex items-center mt-3 justify-between h-5"
      onClick={(e) => e.preventDefault()}
    >
      <Button
        icon={ChatCircle}
        text={comments ? comments : "01"}
        hoverTextColor="hover:text-twitterBlue"
        hoverBgColor="group-hover:bg-twitterBlue/10"
        activeTextColor="active:text-twitterBlue"
        activeBgColor="group-active:bg-twitterBlue/10"
        ariaLabel="Reply"
      />
      <Button
        icon={ArrowsClockwise}
        text={retweets ? String(retweets).padStart(2, "0") : "09"}
        hoverTextColor="hover:text-retweetGreen"
        hoverBgColor="group-hover:bg-retweetGreen/10"
        activeTextColor="active:text-retweetGreen"
        activeBgColor="group-active:bg-retweetGreen/10"
        ariaLabel="Retweet"
      />
      <Button
        icon={Heart}
        text={initialLikes ? initialLikes : 2004}
        hoverTextColor="hover:text-likePink"
        hoverBgColor="group-hover:bg-likePink/10"
        handleIncreaseLike={handleIncreaseLike}
        isLiked={isLiked}
        className={`${isLiked ? "text-likePink" : ""}`}
        activeTextColor="active:text-likePink"
        activeBgColor="group-active:bg-likePink/10"
        ariaLabel={`${isLiked ? "Unlike" : "Like"}`}
      />
      <Button
        icon={ChartLine}
        text="1.2k"
        hoverTextColor="hover:text-twitterBlue"
        hoverBgColor="group-hover:bg-twitterBlue/10"
        className="md:hidden"
        activeTextColor=""
        activeBgColor=""
        ariaLabel="View"
      />
      <Button
        icon={Export}
        text=""
        hoverTextColor="hover:text-twitterBlue"
        hoverBgColor="group-hover:bg-twitterBlue/10"
        className="md:hidden"
        activeTextColor=""
        activeBgColor=""
        ariaLabel="Share"
      />
    </div>
  );
}
