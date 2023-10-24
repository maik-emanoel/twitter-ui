import { CameraPlus, X } from "@phosphor-icons/react";
import { isTouchSupported } from "../utils/touchUtils";
import { ChangeEvent, useState } from "react";
import { useUser } from "../context/UserContext";
import { InputWrapper } from "./signupSteps/InputWrapper";

interface EditProfileProps {
  setIsEditProfileVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditProfile({ setIsEditProfileVisible }: EditProfileProps) {
  const { userInfo, setUserInfo } = useUser();

  const [imgFile, setImgFile] = useState<string | undefined>(userInfo.avatar);
  const [editNameValue, setEditNameValue] = useState(userInfo.name);
  const [editBioValue, setEditBioValue] = useState(userInfo.bio)

  function getImgFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setImgFile(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  function handleSaveNewInfo() {
    setTimeout(() => {
      setIsEditProfileVisible(false);
      setUserInfo({
        ...userInfo,
        avatar: imgFile as string,
        name: editNameValue,
      });
    }, 500);
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-[600px] min-h-[400px] mx-5 py-4 px-4 bg-white dark:bg-bodyDark shadow-menu rounded-2xl flex flex-col md:max-w-none md:mx-0 md:max-h-none md:h-screen md:shadow-none md:rounded-none">
        <header className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <button
              onClick={() => setIsEditProfileVisible(false)}
              data-istouchsupported={isTouchSupported}
              className="w-9 h-9 rounded-full grid place-items-center mr-5
              data-[istouchsupported=false]:hover:bg-black/10 dark:data-[istouchsupported=false]:hover:bg-white/10"
              title="Fechar"
            >
              <X size={20} weight="bold" />
            </button>

            <h2 className="text-xl font-bold dark:text-textDark">
              Edit profile
            </h2>
          </div>

          <button
            onClick={handleSaveNewInfo}
            data-istouchsupported={isTouchSupported}
            className="rounded-full w-16 h-8 font-bold text-sm grid transition-all duration-200 place-items-center bg-twitterBlue text-white dark:bg-textDark dark:text-bodyDark data-[istouchsupported=false]:hover:brightness-90"
          >
            Save
          </button>
        </header>

        <div>
          <div className="relative w-fit mt-12 mb-5">
            <img
              src={imgFile}
              alt="User profile image"
              className="rounded-full w-28 h-28 object-cover brightness-90"
            />
            <label
              htmlFor="avatarInput"
              title="Add photo"
              data-istouchsupported={isTouchSupported}
              className="cursor-pointer w-10 h-10 grid place-items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-200 bg-black/60 data-[istouchsupported=false]:hover:bg-black/40"
            >
              <CameraPlus size={24} color="#fff" />
            </label>

            <input
              type="file"
              id="avatarInput"
              className="hidden"
              accept="image/*"
              onChange={getImgFile}
            />
          </div>

          <div>
            <InputWrapper
              inputName="Name"
              maxLengthCaracters={50}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              value={editNameValue}
              setEditNameValue={setEditNameValue}
              type="editName"
            />

            <InputWrapper
              inputName="Bio"
              maxLengthCaracters={160}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              value={editBioValue}
              setEditBioValue={setEditBioValue}
              type="editBio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
