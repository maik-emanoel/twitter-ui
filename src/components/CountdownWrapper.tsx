import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { maxCharacters } from "../utils/maxCharacters";

interface CountdownWrapper {
  characters: string;
}

export function CountdownWrapper(props: CountdownWrapper) {
  const [progress, setProgress] = useState(0);
  const numberCharacters = props.characters.length;

  useEffect(() => {
    setProgress(numberCharacters);
  }, [numberCharacters]);

  let fillColor;

  if (progress >= 260 && progress < maxCharacters) {
    fillColor = "#FFD400";
  } else if (progress >= maxCharacters) {
    fillColor = "#F4212E";
  } else {
    fillColor = "#1D9BF0";
  }

  return (
    <>
      {progress > 0 && (
        <div className="flex items-center gap-1 h-8 sm:self-end sm:mb-[2px]">
          <div
            role="circular-progress"
            className="relative w-6 h-6 rounded-full bg-gradient dark:bg-gradient-dark transition-all duration-200"
            style={
              {
                "--progress": `${progress * (360 / maxCharacters)}deg`,
                "--fillColor": fillColor,
              } as React.CSSProperties
            }
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white dark:bg-bodyDark w-5 h-5 rounded-full">
              {numberCharacters >= maxCharacters - 20 && (
                <span className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10px]">
                  {maxCharacters - numberCharacters}
                </span>
              )}
            </div>
          </div>

          <span
            role="separator"
            className="block mx-2 h-full w-[1px] bg-[rgb(185,_202,_211)] dark:bg-[rgb(62,_65,_68)]"
          ></span>

          <button className="w-6 h-6 border rounded-full grid place-items-center border-[rgb(185,_202,_211)] dark:border-grayBorderDark">
            <Plus size={16} className="text-twitterBlue" />
          </button>
        </div>
      )}
    </>
  );
}
