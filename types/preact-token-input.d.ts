import { Component, RenderableProps, VNode } from "preact";

interface IProps extends JSX.HTMLAttributes {
  onInput?: (ev: TokenChangeEvent) => void;
  onChange?: (ev: TokenChangeEvent) => void;
  value?: string[];
}
export default class TokenInput extends Component<IProps> {
  public render(props: RenderableProps<IProps>, state: any): VNode;
  public getInput(): false | HTMLInputElement;
  public setInput(value: string[]): void;
}

export interface TokenChangeEvent extends Event {
  value: string[];
}
