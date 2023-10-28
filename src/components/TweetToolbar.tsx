import {
  GlobeHemisphereWest,
  Gif,
  ListBullets,
  Smiley,
  CalendarBlank,
  MapPin,
  Image,
  IconProps,
} from "@phosphor-icons/react";
import React, { ChangeEvent } from "react";
import { isTouchSupported } from "../utils/touchUtils";

interface TweetToolbarItemProps {
  icon: React.ElementType<IconProps>;
  isFirst?: boolean;
  isLast?: boolean;
  isHidden?: boolean;
  isMediaButton?: boolean;
  setImageTweetFile?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function TweetToolbarItem({
  icon: Icon,
  isFirst,
  isLast,
  isHidden,
  isMediaButton,
  setImageTweetFile,
}: TweetToolbarItemProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        if (setImageTweetFile) {
          setImageTweetFile(imageUrl);
        }
      };

      reader.readAsDataURL(file);
    }

    e.target.value = "";
  }

  return (
    <div
      data-isfirst={isFirst}
      data-islast={isLast}
      data-ishidden={isHidden}
      data-istouchsupported={isTouchSupported}
      className="w-[34.4px] h-[34.4px] grid place-items-center rounded-full data-[istouchsupported=false]:hover:bg-twitterBlue/20 active:bg-twitterBlue/20 data-[isfirst=true]:-ml-2 data-[islast=true]:opacity-40 data-[islast=true]:pointer-events-none data-[ishidden=true]:md:hidden data-[ishidden=true]:sm:grid md:w-7 md:h-7 sm:w-[34.4px] sm:h-[34.4px] cursor-pointer"
    >
      {!isMediaButton ? (
        <Icon size={20} weight="bold" className="active:scale-90" />
      ) : (
        <label htmlFor="imageUrlInput" className="cursor-pointer">
          <Icon size={20} weight="bold" className="active:scale-90" />
          <input
            type="file"
            id="imageUrlInput"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      )}
    </div>
  );
}

interface TweetToolbarProps {
  setImageTweetFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function TweetToolbar({ setImageTweetFile }: TweetToolbarProps) {
  return (
    <div className="sm:divide-y-[1px] divide-grayBorder text-twitterBlue dark:divide-grayBorderDark flex sm:flex-col sm:mt-3">
      <div className="hidden mb-3 px-3 -ml-3 sm:flex items-center gap-1 rounded-full w-fit h-6 active:bg-twitterBlue/20">
        <GlobeHemisphereWest weight="fill" />
        <span className="text-sm font-medium">Everyone can reply</span>
      </div>
      <div className="sm:pt-3 flex items-center">
        <TweetToolbarItem
          icon={Image}
          isFirst
          isMediaButton
          setImageTweetFile={setImageTweetFile}
        />
        <TweetToolbarItem icon={Gif} />
        <TweetToolbarItem icon={ListBullets} isHidden />
        <TweetToolbarItem icon={Smiley} />
        <TweetToolbarItem icon={CalendarBlank} isHidden />
        <TweetToolbarItem icon={MapPin} isLast />
      </div>
    </div>
  );
}
