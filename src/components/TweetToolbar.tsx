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
import React, { ChangeEvent, useState } from "react";
import { isTouchSupported } from "../utils/touchUtils";
import { Tooltip } from "./Tooltip";

interface TweetToolbarItemProps {
  icon: React.ElementType<IconProps>;
  isFirst?: boolean;
  isLast?: boolean;
  isHidden?: boolean;
  isMediaButton?: boolean;
  setImageTweetFile?: React.Dispatch<React.SetStateAction<string | undefined>>;

  label: string;
}

function TweetToolbarItem({
  icon: Icon,
  isFirst,
  isLast,
  isHidden,
  isMediaButton,
  setImageTweetFile,
  label,
}: TweetToolbarItemProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

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
      
      const fileSizeInMegabytes = file.size / (1024 * 1024);
      // console.log(`Tamanho do arquivo: ${fileSizeInMegabytes.toFixed(2)} MB`);

      if (fileSizeInMegabytes > 2) {
        alert('O tamanho da imagem é muito grande. Por favor, selecione uma imagem menor (limite: 2 MB).')
        e.target.value = "";
        return
      }

      reader.readAsDataURL(file);
    }

    e.target.value = "";
  }

  let timeout: NodeJS.Timeout;

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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-isfirst={isFirst}
      data-islast={isLast}
      data-ishidden={isHidden}
      data-istouchsupported={isTouchSupported}
      className="w-[34.4px] h-[34.4px] grid place-items-center rounded-full data-[istouchsupported=false]:hover:bg-twitterBlue/20 active:bg-twitterBlue/20 data-[isfirst=true]:-ml-2 data-[islast=true]:opacity-40 data-[islast=true]:pointer-events-none data-[ishidden=true]:md:hidden data-[ishidden=true]:sm:grid md:w-7 md:h-7 sm:w-[34.4px] sm:h-[34.4px] cursor-pointer relative"
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

      {showTooltip && !isTouchSupported && <Tooltip text={label} />}
    </div>
  );
}

interface TweetToolbarProps {
  setImageTweetFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function TweetToolbar({ setImageTweetFile }: TweetToolbarProps) {
  return (
    <div className="sm:divide-y-[1px] divide-grayBorder text-twitterBlue dark:divide-grayBorderDark flex sm:flex-col sm:mt-3 select-none">
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
          label="Media"
        />
        <TweetToolbarItem icon={Gif} label="GIF" />
        <TweetToolbarItem icon={ListBullets} isHidden label="Poll" />
        <TweetToolbarItem icon={Smiley} label="Emoji" />
        <TweetToolbarItem icon={CalendarBlank} isHidden label="Schedule" />
        <TweetToolbarItem icon={MapPin} isLast label="" />
      </div>
    </div>
  );
}
