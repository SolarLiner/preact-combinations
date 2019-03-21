import { Component, h } from "preact";

import CombinationsTable from "../combinations/table";
import Button from "../example-button";
import { DataInput } from "./DataInput";
import styles from "./styles";

interface IState {
  data: { color: string[]; elevation: string[] };
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
                return <DataInput name={key} values={values} onTagsChange={this.handleTagsChange(key)} />;
              })}
          </div>
          {data && (
            <div>
              <CombinationsTable
                component={Button}
                one={{ name: "color", values: data.color }}
                two={{ name: "elevation", values: data.elevation.map(e => Number.parseInt(e)) }}
                style={{ margin: "1em .5em" }}
              >
                Button content
              </CombinationsTable>
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
