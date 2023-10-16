import { useRef, useState } from "react";

interface InputWrapperProps {
  inputName: string;
  maxLengthCaracters: number;
}

export function InputWrapper(props: InputWrapperProps) {
  const [isFocused, setIsFocused] = useState<boolean | string>(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      setIsFocused(true);
      inputRef.current.focus();
    }
  }

  return (
    <div
      className="relative h-14 border-[2px] focus-within:border-twitterBlue group rounded mb-6"
      onClick={handleClick}
    >
      <label htmlFor={`user${props.inputName}Input`} className="sr-only">
        {props.inputName}
      </label>
      <input
        type="text"
        name={`user${props.inputName}Input`}
        ref={inputRef}
        className="w-full h-5 outline-none mt-6 px-2 text-sm"
        maxLength={props.maxLengthCaracters}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => {
          if (inputRef.current) {
            if (inputRef.current?.value.length > 0) {
              setIsFocused("hasCaracters");
              return;
            }
          }

          setIsFocused(false);
        }}
      />
      <span
        data-isfocused={isFocused}
        className="absolute opacity-70 px-2 pt-4 left-0 transition-all duration-200 data-[isfocused=true]:text-twitterBlue data-[isfocused=true]:text-xs data-[isfocused=true]:pt-2 data-[isfocused=hasCaracters]:text-xs data-[isfocused=hasCaracters]:pt-2"
      >
        {props.inputName}
      </span>
      <p className="hidden absolute right-0 top-0 px-2 pt-2 text-xs group-focus-within:block">
        {inputValue.length} / {props.maxLengthCaracters}
      </p>
    </div>
  );
}
