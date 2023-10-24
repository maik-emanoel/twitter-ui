import { ArrowLeft, CalendarBlank } from "@phosphor-icons/react";
import { isTouchSupported } from "../utils/touchUtils";
import { Header } from "../components/Header";
import { Link } from "../components/Link";
import { Outlet, useLocation } from "react-router-dom";
import { useTweetContext } from "../context/TweetContext";
import { useUser } from "../context/UserContext";
import { getMonth } from "../utils/monthUtils";
import { useState } from "react";
import { EditProfile } from "../components/EditProfile";

export function Profile() {
  const { tweets } = useTweetContext();
  const { userInfo } = useUser();
  const location = useLocation().pathname;

  const [isEditProfileVisible, setIsEditProfileVisible] =
    useState<boolean>(false);

  let message: string;
  let number: number;

  const likedTweets = tweets.filter((tweet) => tweet.isLiked);
  const tweetsWithImages = tweets.filter((tweet) => tweet.imageUrl);

  if (location === `/${userInfo.login}/media`) {
    message =
      tweetsWithImages.length === 1 ? "Photo & video" : "Photos & videos";
    number = tweetsWithImages.length;
  } else if (location === `/${userInfo.login}/likes`) {
    message = likedTweets.length === 1 ? "Like" : "Likes";
    number = likedTweets.length;
  } else {
    message = tweets.length === 1 ? "Post" : "Posts";
    number = tweets.length;
  }

  const getMonthUserWasCreated = Number(userInfo.created_at.split(" ")[0]);
  const getYearUserWasCreated = Number(userInfo.created_at.split(" ")[1]);

  return (
    <>
      <Header title="" className="justify-normal py-0 gap-9">
        <button
          onClick={() => window.history.back()}
          data-istouchsupported={isTouchSupported}
          className="w-9 h-9 grid place-items-center rounded-full data-[istouchsupported=false]:hover:bg-black/10 dark:data-[istouchsupported=false]:hover:bg-white/10"
        >
          <ArrowLeft size={20} weight="bold" />
        </button>

        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="overflow-hidden text-ellipsis">{userInfo.name}</span>
          <span className="text-xs font-normal opacity-70">
            {number} {message}
          </span>
        </div>
      </Header>

      <div>
        <div aria-label="User profile banner">
          <div
            className="w-full bg-twitterBlue flex-shrink-0"
            style={{
              height: "min(33vw, 199px)",
            }}
          ></div>
        </div>

        <div className="px-4 pt-3 mb-4">
          <div className="grid items-start relative min-h-[48px]">
            <div
              style={{
                width: "max(45px, min(135px, 22vw))",
                height: "max(45px, min(135px, 22vw))",
              }}
              className="p-1 rounded-full bg-white dark:bg-bodyDark absolute -translate-y-[52%]"
            >
              <img
                src={userInfo.avatar}
                alt={`Foto de perfil do usuário ${userInfo.name}`}
                className="rounded-full w-full h-full object-cover object-top"
              />
            </div>

            <button
              onClick={() => setIsEditProfileVisible(true)}
              data-istouchsupported={isTouchSupported}
              className="justify-self-end w-28 h-9 rounded-full font-bold dark:text-textDark border border-black/10 dark:border-white/40 transition-all duration-200 
              data-[istouchsupported=false]:hover:bg-black/10 
              dark:data-[istouchsupported=false]:hover:bg-white/10"
            >
              Edit Profile
            </button>
          </div>

          <div
            style={{
              padding: "min(calc(2vw + 7px), 67px) 0 0 0",
            }}
            className="flex flex-col flex-1 overflow-hidden gap-3"
          >
            <div className="flex flex-col flex-1">
              <span className="text-xl font-bold leading-6 overflow-hidden text-ellipsis pr-2 dark:text-textDark">
                {userInfo.name}
              </span>
              <span className="text-mute dark:text-muteDark">
                @{userInfo.login}
              </span>
            </div>

            <p role="user-bio" className="break-words">{userInfo.bio}</p>

            <div
              role="presentation"
              className="flex items-center gap-1 text-mute dark:text-muteDark"
            >
              <CalendarBlank size={18.75} />
              <span>
                Joined {getMonth(getMonthUserWasCreated)}{" "}
                {getYearUserWasCreated}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div>
                <span className="mr-1 font-bold dark:text-textDark">
                  {userInfo.following}
                </span>
                <span className="text-mute dark:text-muteDark">Following</span>
              </div>
              <div>
                <span className="mr-1 font-bold dark:text-textDark">
                  {userInfo.followers}
                </span>
                <span className="text-mute dark:text-muteDark">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex h-[53px] items-center justify-around border-b border-grayBorder dark:border-grayBorderDark">
        <Link path={`/${userInfo.login}`} name="Posts" />
        <Link path={`/${userInfo.login}/with_replies`} name="Replies" />
        <Link path={`/${userInfo.login}/highlights`} name="Highlights" />
        <Link path={`/${userInfo.login}/media`} name="Media" />
        <Link path={`/${userInfo.login}/likes`} name="Likes" />
      </nav>

      <Outlet />
      {isEditProfileVisible && <EditProfile setIsEditProfileVisible={setIsEditProfileVisible} />}
    </>
  );
}
