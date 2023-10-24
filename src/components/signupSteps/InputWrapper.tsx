import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { UserInfo } from "../../context/UserContext";

interface InputWrapperProps {
  inputName: string;
  maxLengthCaracters: number;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  userInfo: UserInfo;
  value?: string;
  type?: string;

  setEditNameValue?: Dispatch<SetStateAction<string>>;
  setEditBioValue?: Dispatch<SetStateAction<string>>;
}

export function InputWrapper(props: InputWrapperProps) {
  const [isFocused, setIsFocused] = useState<boolean | string>(false);
  const [caractersNumber, setCaractersNumber] = useState<string>(
    props.value || ""
  );

  const inputRef = useRef<null | HTMLInputElement>(null);
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  function handleClick() {
    if (inputRef.current) {
      setIsFocused(true);
      inputRef.current.focus();
    }

    if (textareaRef.current) {
      setIsFocused(true);
      textareaRef.current.focus();
    }
  }

  useEffect(() => {
    if (props.type === "editName" && inputRef.current) {
      setIsFocused(true);
      inputRef.current.focus();
    }
  }, [props.type]);

  return (
    <div
      className={`relative border-[2px] focus-within:border-twitterBlue group rounded mb-6 dark:bg-bodyDark dark:border-grayBorderDark dark:focus-within:border-twitterBlue ${
        props.type != "editBio" ? "h-14" : "h-fit"
      }`}
      onClick={handleClick}
    >
      <label htmlFor={`user${props.inputName}Input`} className="sr-only">
        {props.inputName}
      </label>
      {props.type != "editBio" ? (
        <input
          type="text"
          name={`user${props.inputName}Input`}
          ref={inputRef}
          value={props.value}
          className={`w-full h-5 outline-none mt-6 px-2 text-sm bg-transparent`}
          maxLength={props.maxLengthCaracters}
          onChange={(e) => {
            setCaractersNumber(e.target.value.trim());

            if (
              props.inputName === "Name" &&
              props.type != "editName" &&
              inputRef.current
            ) {
              props.setUserInfo({
                ...props.userInfo,
                name: inputRef.current?.value,
              });
            }

            if (props.inputName === "Login" && inputRef.current) {
              props.setUserInfo({
                ...props.userInfo,
                login: inputRef.current?.value,
              });
            }

            if (
              props.type === "editName" &&
              inputRef.current &&
              props.setEditNameValue
            ) {
              props.setEditNameValue(inputRef.current?.value);
            }
          }}
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
      ) : (
        <textarea
          name={`user${props.type}Input`}
          ref={textareaRef}
          value={props.value}
          className={`w-full outline-none mt-6 px-2 text-sm bg-transparent`}
          maxLength={props.maxLengthCaracters}
          onChange={(e) => {
            setCaractersNumber(e.target.value.trim());

            if (
              props.type === "editBio" &&
              textareaRef.current &&
              props.setEditBioValue
            ) {
              props.setEditBioValue(textareaRef.current?.value);
            }
          }}
          onBlur={() => {
            if (textareaRef.current) {
              if (textareaRef.current?.value.length > 0) {
                setIsFocused("hasCaracters");
                return;
              }
            }

            setIsFocused(false);
          }}
        />
      )}
      <span
        data-isfocused={isFocused}
        className="absolute opacity-70 px-2 pt-4 left-0 transition-all duration-200 data-[isfocused=true]:text-twitterBlue data-[isfocused=true]:text-xs data-[isfocused=true]:pt-2 data-[isfocused=hasCaracters]:text-xs data-[isfocused=hasCaracters]:pt-2"
      >
        {props.inputName}
      </span>
      <p className="hidden absolute right-0 top-0 px-2 pt-2 text-xs group-focus-within:block">
        {caractersNumber.length} / {props.maxLengthCaracters}
      </p>
    </div>
  );
}
