interface TooltipProps {
    text: string
}

export function Tooltip({ text }: TooltipProps) {
  return <span className="tooltip">{text}</span>;
}
