import getContrastRatio from "get-contrast-ratio";
import { h, RenderableProps } from "preact";

interface IProps {
  color: string;
  elevation: number;
  href?: string;
  onClick?(ev: Event): void;
}
export default function Button({
  color,
  elevation,
  href,
  children,
  onClick
}: RenderableProps<IProps>) {
  const style = {
    display: "inline-block",
    backgroundColor: color,
    color: getInvertColor(color),
    padding: ".5em 1em",
    boxShadow:
      !!elevation && `0 ${0.2 * elevation}px ${elevation}px rgba(0,0,0,50%)`,
    borderRadius: "5px",
    cursor: "pointer",
    userSelect: "none"
  };

  return (
    <a href={href} style={style} onClick={onClick}>
      {children}
    </a>
  );
}

function getInvertColor(color: string) {
  const contrast = getContrastRatio(color, "white");
  if (contrast > 4) {
    return "white";
  } else {
    return "black";
  }
}
