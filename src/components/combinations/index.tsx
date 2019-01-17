import { AnyComponent, h, RenderableProps } from "preact";
import { combine } from "./combine";
import { Combination } from "./types";

interface IProps<T> {
  component: AnyComponent<T>;
  combinations: Combination<T>;
  style?: any;
}

const containerStyle = {
  display: "flex",
  flexFlow: "row wrap"
};

export default function Combinations<T>({
  component,
  combinations,
  children,
  style
}: RenderableProps<IProps<T>>) {
  const props = combine(combinations);
  return (
    <div style={containerStyle}>
      {props.map(p => (
        <div style={style}>{h(component, { ...p, children })}</div>
      ))}
    </div>
  );
}
