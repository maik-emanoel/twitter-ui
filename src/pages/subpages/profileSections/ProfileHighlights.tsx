import { isTouchSupported } from "../../../utils/touchUtils";

const buttonColors = {
  light: {
    text: "text-white",
    bg: "bg-[#0f1419]",
  },
  dark: {
    text: "text-[#0f1419]",
    bg: "bg-[rgb(239,_243,_244)]",
  },
};

export function ProfileHighlights() {
  return (
    <div className="max-w-[336px] my-8 mx-auto px-8 min-h-[50vh]">
      <h2 className="text-3xl font-extrabold mb-2 dark:text-textDark">
        Highlight on your profile
      </h2>
      <p className="text-sm dark:text-muteDark">
        You must be subscribed to Premium to highlight posts on your profile.
      </p>
      <button
        data-istouchsupported={isTouchSupported}
        className={`mt-6 rounded-full px-8 min-h-[52px] text-lg font-bold ${buttonColors.light.bg} ${buttonColors.light.text} dark:${buttonColors.dark.bg} dark:${buttonColors.dark.text} transition-all duration-300
        data-[istouchsupported=false]:hover:brightness-75 dark:data-[istouchsupported=false]:hover:brightness-75`}
      >
        Subscribe to Premium
      </button>
    </div>
  );
}
