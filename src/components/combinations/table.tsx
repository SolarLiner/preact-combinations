/* eslint-disable @typescript-eslint/no-explicit-any */
import { h, RenderableProps, AnyComponent } from "preact";

interface CTableProps<T, A extends keyof T, B extends keyof T> {
  component: AnyComponent<T>;
  one: {
    name: A;
    values: (T[A])[];
  };
  two: {
    name: B;
    values: (T[B])[];
  };
  style: any;
}

export default function CombinationsTable<T, A extends keyof T, B extends keyof T>(
  props: RenderableProps<CTableProps<T, A, B>>
) {
  return (
    <table style={Object.assign({}, props.style, { border: "1px black" })}>
      <tbody>
        <tr>
          <th>
            {props.one.name}\{props.two.name}
          </th>
          {props.one.values.map(v => (
            <th>{v.toString()}</th>
          ))}
        </tr>
        {props.two.values.map(vt => (
          <tr>
            <th>{vt.toString()}</th>
            {props.one.values.map(vo => (
              <td>{h(props.component, { [props.one.name]: vo, [props.two.name]: vt } as any, props.children)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
