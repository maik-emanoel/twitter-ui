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
import React from "react";

interface TweetToolbarItemProps {
  icon: React.ElementType<IconProps>;
  isFirst?: boolean;
}

function TweetToolbarItem({ icon: Icon, isFirst }: TweetToolbarItemProps) {
  return (
    <div
      data-isfirst={isFirst}
      className="w-9 h-9 grid place-items-center rounded-full active:bg-twitterBlue/20 data-[isfirst=true]:-ml-2"
    >
      <Icon size={20} weight="bold" />
    </div>
  );
}

export function TweetToolbar() {
  return (
    <div className="hidden divide-y-[1px] divide-grayBorder text-twitterBlue dark:divide-grayBorderDark sm:flex sm:flex-col sm:mt-3">
      <div className="mb-3 px-3 -ml-3 flex items-center gap-1 rounded-full w-fit h-6 active:bg-twitterBlue/20">
        <GlobeHemisphereWest weight="fill" />
        <span className="text-sm font-medium">Everyone can reply</span>
      </div>
      <div className="pt-3 flex items-center">
        <TweetToolbarItem icon={Image} isFirst />
        <TweetToolbarItem icon={Gif} />
        <TweetToolbarItem icon={ListBullets} />
        <TweetToolbarItem icon={Smiley} />
        <TweetToolbarItem icon={CalendarBlank} />
        <TweetToolbarItem icon={MapPin} />
      </div>
    </div>
  );
}
