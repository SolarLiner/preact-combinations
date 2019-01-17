import { Component, h } from "preact";

import Combinations from "../combinations";
import Button from "../example-button";
import { DataInput } from "./DataInput";
import styles from "./styles";

interface IState {
  data: { [x: string]: string[] };
}
export default class Host extends Component<{}, IState> {
  public componentDidMount() {
    this.setState({ data: { color: ["red"], elevation: ["1"] } });
  }
  public render({}, { data }: IState) {
    return (
      <div>
        <div>
          <p>
            <b>Component props</b>
          </p>
          <div class={styles.form}>
            {data &&
              Object.entries(data).map(([key, values]) => {
                return (
                  <DataInput
                    name={key}
                    values={values}
                    onTagsChange={this.handleTagsChange(key)}
                  />
                );
              })}
          </div>
          {data && (
            <div>
              <Combinations
                component={Button}
                combinations={data}
                style={{ margin: "1em .5em" }}
              >
                Button content
              </Combinations>
            </div>
          )}
        </div>
      </div>
    );
  }

  private handleTagsChange(key: string) {
    return (values: string[]) => {
      const { data } = this.state;
      this.setState({ data: { ...data, [key]: values } });
    };
  }
}
