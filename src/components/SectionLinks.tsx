import { CaretDown } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

interface SectionLinksProps {
  children: ReactNode;
  title: string;
}

export function SectionLinks({ children, title }: SectionLinksProps) {
  const [sectionIsVisible, setSectionIsVisible] = useState(false);

  function handleShowSection() {
    setSectionIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <div
        className="flex items-center justify-between p-4 transition-all duration-100 active:bg-zinc-100 active:dark:bg-[rgb(22,_24,_28)] "
        onClick={handleShowSection}
      >
        <span className="font-bold">{title}</span>
        <CaretDown
          className={`${
            sectionIsVisible ? "rotate-180 text-twitterBlue" : ""
          } transition-transform duration-150`}
        />
      </div>

      {sectionIsVisible && <section>{children}</section>}
    </>
  );
}
