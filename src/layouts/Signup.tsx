import { X } from "@phosphor-icons/react";
import { useState } from "react";
import { isTouchSupported } from "../utils/touchUtils";
import { NavLink } from "react-router-dom";
import { Step1 } from "../components/signupSteps/Step1";
import { Step2 } from "../components/signupSteps/Step2";

export function Signup() {
  const [steps, setSteps] = useState<number>(1);

  function handleSteps() {
    if (steps >= 2) return;
    setSteps((prevState) => prevState + 1);
  }

  return (
    <div className="absolute inset-0 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-[600px] min-h-[400px] py-4 px-4 bg-white shadow-menu rounded-2xl flex flex-col">
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

          <p className="text-xl font-bold">Etapa 1 de 5</p>
        </header>

        <div className="flex-1 max-w-[440px] w-full mx-auto mb-6">
          <h1 className="text-4xl font-bold mb-8">Criar sua conta</h1>

          {steps == 1 && <Step1 />}
          {steps == 2 && <Step2 />}
        </div>

        <button
          onClick={handleSteps}
          className="w-full max-w-[440px] h-[52px] mx-auto mb-2 rounded-full bg-twitterBlue text-white text-xl font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
