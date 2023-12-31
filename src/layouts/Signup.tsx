import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { isTouchSupported } from "../utils/touchUtils";
import { NavLink } from "react-router-dom";
import { Step1 } from "../components/signupSteps/Step1";
import { Step2 } from "../components/signupSteps/Step2";
import { saveUser } from "../utils/saveUserUtils";
import { useUser } from "../context/UserContext";
import { saveHasUser } from "../utils/hasUserUtils";

export function Signup() {
  const [steps, setSteps] = useState<number>(1);
  const totalSteps = 2;

  const { userInfo, setUserInfo, setHasUser } = useUser();

  function handleSteps() {
    setUserInfo({
      ...userInfo,
      followers: 0,
      following: 0,
      created_at: `${new Date().getMonth() + 1} ${new Date().getFullYear()}`,
    });

    if (steps === 2) {
      saveUser(userInfo);
      saveHasUser(true);
      setHasUser(true);
    }

    setSteps((prevState) => prevState + 1);
  }

  return (
    <div className="absolute w-full h-full backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-[600px] min-h-[400px] mx-5 py-4 px-4 bg-white shadow-menu rounded-2xl flex flex-col md:max-w-none md:mx-0 md:max-h-none md:h-screen md:shadow-none md:rounded-none">
        <header className="flex items-center mb-5">
          <NavLink to="/flow">
            <button
              data-istouchsupported={isTouchSupported}
              className="w-9 h-9 rounded-full grid place-items-center mr-3
            data-[istouchsupported=false]:hover:bg-black/10"
              title="Fechar"
            >
              <X size={20} weight="bold" />
            </button>
          </NavLink>

          <p className="text-xl font-bold">
            Etapa {steps} de {totalSteps}
          </p>
        </header>

        <div className="flex-1 max-w-[440px] w-full mx-auto mb-6 md:max-w-[600px]">
          <h1 className="text-4xl font-bold mb-8">Criar sua conta</h1>

          {steps == 1 && (
            <Step1 setUserInfo={setUserInfo} userInfo={userInfo} />
          )}
          {steps == 2 && (
            <Step2 setUserInfo={setUserInfo} userInfo={userInfo} />
          )}
        </div>

        <button
          onClick={handleSteps}
          className="w-full max-w-[440px] h-[52px] mx-auto mb-2 rounded-full bg-twitterBlue text-white text-xl font-bold disabled:opacity-80 md:max-w-[600px]"
          disabled={
            userInfo.name.trim() === "" ||
            userInfo.login.trim() === "" ||
            userInfo.birthdayDate.day === null ||
            userInfo.birthdayDate.month === null ||
            userInfo.birthdayDate.year === null
          }
        >
          {steps === 1 ? "Next" : "Create"}
        </button>
      </div>
    </div>
  );
}
