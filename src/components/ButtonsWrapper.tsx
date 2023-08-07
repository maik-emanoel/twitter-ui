import {
  ChatCircle,
  ArrowsClockwise,
  Heart,
  ChartLine,
  Export,
} from "@phosphor-icons/react";

interface ButtonsWrapperProps {
  comments: number | undefined;
  retweets: number | undefined;
  likes: number | undefined;
}

interface ButtonProps {
  icon: React.ElementType;
  text: string | number;
  hoverColorClass: string;
}

function Button({ icon: Icon, text, hoverColorClass }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-2 text-sm text-[#89a2b8] hover:text-${hoverColorClass} group`}
    >
      <div
        className={`w-[34.75px] h-[34.75px] grid place-items-center rounded-full -m-2 transition-colors duration-200 group-hover:bg-${hoverColorClass}/10`}
      >
        <Icon size={18.75} />
      </div>
      <span className="pl-1">{text}</span>
    </button>
  );
}

export function ButtonsWrapper({
  comments,
  retweets,
  likes,
}: ButtonsWrapperProps) {
  return (
    <div
      className="flex items-center mt-3 justify-between h-5"
      onClick={(e) => e.preventDefault()}
    >
      <Button
        icon={ChatCircle}
        text={comments ? comments : "01"}
        hoverColorClass="twitterBlue"
      />
      <Button
        icon={ArrowsClockwise}
        text={retweets ? String(retweets).padStart(2, "0") : "09"}
        hoverColorClass="retweetGreen"
      />
      <Button
        icon={Heart}
        text={likes ? likes : 2004}
        hoverColorClass="likePink"
      />
      <Button 
        icon={ChartLine} 
        text="1.2k" 
        hoverColorClass="twitterBlue" 
      />
      <Button 
        icon={Export} 
        text="" 
        hoverColorClass="twitterBlue" 
      />
    </div>
  );
}
