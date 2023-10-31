import { isTouchSupported } from "../utils/touchUtils";

interface ProfileInfoProps {
  profileInfoRef: React.MutableRefObject<null | HTMLDivElement>;
  setMouseIsOnProfileInfo: React.Dispatch<React.SetStateAction<boolean>>;
  userAvatar: string;
  userName: string;
  userLogin: string;
}

export function ProfileInfo({
  profileInfoRef,
  userAvatar,
  userName,
  userLogin,
  setMouseIsOnProfileInfo,
}: ProfileInfoProps) {
  return (
    <div
      ref={profileInfoRef}
      onMouseEnter={() => setMouseIsOnProfileInfo(true)}
      onMouseLeave={() => setMouseIsOnProfileInfo(false)}
      onClick={(e) => e.preventDefault()}
      className="absolute top-20 left-5 w-full max-w-[300px] bg-white dark:bg-bodyDark rounded-2xl p-3 shadow-menu dark:shadow-menuDark flex flex-col gap-2 z-50"
    >
      <div className="">
        <div className="flex items-start justify-between mb-3">
          <img
            src={userAvatar}
            alt={`Foto de perfil do usuário ${userName}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <button
            data-istouchsupported={isTouchSupported}
            className="rounded-full w-20 h-9 font-bold text-sm grid transition-all duration-200 place-items-center bg-twitterBlue text-white dark:bg-textDark dark:text-bodyDark data-[istouchsupported=false]:hover:brightness-90"
          >
            Follow
          </button>
        </div>

        <div className="flex flex-col leading-5">
          <span className="font-bold">{userName}</span>
          <span className="text-mute dark:text-muteDark font-light">
            @{userLogin}
          </span>
        </div>
      </div>

      <p>Loading...</p>

      <div className="flex items-center gap-3 text-sm">
        <div>
          <span className="mr-1 font-bold dark:text-textDark">0</span>
          <span className="text-mute dark:text-muteDark">Following</span>
        </div>
        <div>
          <span className="mr-1 font-bold dark:text-textDark">0</span>
          <span className="text-mute dark:text-muteDark">Followers</span>
        </div>
      </div>
    </div>
  );
}
