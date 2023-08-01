import {
  GlobeHemisphereWest,
  Gif,
  ListBullets,
  Smiley,
  CalendarBlank,
  MapPin,
  Image,
} from "@phosphor-icons/react";

export function TweetToolbar() {
  return (
    <div className="hidden divide-y-[1px] divide-grayBorder text-twitterBlue dark:divide-grayBorderDark sm:flex sm:flex-col sm:mt-3">
      <div className="pb-3 sm:flex sm:items-center sm:gap-1">
        <GlobeHemisphereWest weight="fill" />
        <span className="text-sm font-medium">Everyone can reply</span>
      </div>
      <div className="pt-3 flex items-center">
        <div className="w-9 h-9 grid place-items-center -ml-2">
          <Image size={20} weight="bold" />
        </div>
        <div className="w-9 h-9 grid place-items-center">
          <Gif size={20} weight="bold" />
        </div>
        <div className="w-9 h-9 grid place-items-center">
          <ListBullets size={20} weight="bold" />
        </div>
        <div className="w-9 h-9 grid place-items-center">
          <Smiley size={20} weight="bold" />
        </div>
        <div className="w-9 h-9 grid place-items-center">
          <CalendarBlank size={20} weight="bold" />
        </div>
        <div className="w-9 h-9 grid place-items-center">
          <MapPin size={20} weight="bold" />
        </div>
      </div>
    </div>
  );
}
