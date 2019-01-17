import { h, RenderableProps } from "preact";
import TokenInput, { TokenChangeEvent } from "preact-token-input";

import styles from "./styles";

interface IProps {
  name: string;
  values: string[];
  onKeyChange?(key: string): void;
  onTagsChange?(values: string[]): void;
}
export function DataInput(props: RenderableProps<IProps>) {
  return (
    <div class={styles.input}>
      <label
        class={styles.label}
        for={props.name}
        contentEditable
        onInput={handleKeyInput(props.onKeyChange)}
      >
        {props.name}
        <TokenInput
          name={props.name}
          value={props.values}
          onChange={handleTagsInput(props.onTagsChange)}
        />
      </label>
    </div>
  );
}

function handleKeyInput(callback?: IProps["onKeyChange"]) {
  return (ev: Event) => {
    const key = (ev.target as HTMLLabelElement).innerText;
    if (callback) {
      callback(key);
    }
  };
}

function handleTagsInput(callback?: IProps["onTagsChange"]) {
  return ({ value }: TokenChangeEvent) => {
    if (callback) {
      callback(value);
    }
  };
}
