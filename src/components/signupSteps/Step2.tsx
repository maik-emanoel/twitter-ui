import { CameraPlus } from "@phosphor-icons/react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { isTouchSupported } from "../../utils/touchUtils";
import emptyUserAvatar from "../../assets/emptyUserAvatar.png";
import { UserInfo } from "../../context/UserContext";

interface Step2Props {
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  userInfo: UserInfo;
}

export function Step2({ setUserInfo, userInfo }: Step2Props) {
  const [imgFile, setImgFile] = useState<string>(emptyUserAvatar);

  function getImgFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setImgFile(imageUrl);
      setUserInfo({
        ...userInfo,
        avatar: imageUrl,
      });
    }
  }

  return (
    <div className="py-16">
      <div className="relative">
        <img
          src={imgFile}
          alt="User profile image"
          className="rounded-full w-full max-w-[200px] max-h-[200px] object-cover mx-auto mb-3 brightness-90"
        />
        <label
          htmlFor="avatarInput"
          title="Add photo"
          data-istouchsupported={isTouchSupported}
          className="cursor-pointer w-11 h-11 grid place-items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-200 bg-black/60 data-[istouchsupported=false]:hover:bg-black/40"
        >
          <CameraPlus size={24} color="#fff" />
        </label>
      </div>

      <h2 className="w-fit mx-auto font-bold text-lg">
        Add your profile photo
      </h2>
      <input
        type="file"
        id="avatarInput"
        className="hidden"
        onChange={getImgFile}
      />
    </div>
  );
}
