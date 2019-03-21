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
    <table style={props.style}>
      <tbody>
        <tr>
          {props.one.values.map(v => (
            <th>{v.toString()}</th>
          ))}
        </tr>
        {props.two.values.map(vt => (
          <tr>
            <th>{vt.toString()}</th>
            {props.one.values.forEach(vo =>
              h(props.component, { [props.one.name]: vo, [props.two.name]: vt } as any, props.children)
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
