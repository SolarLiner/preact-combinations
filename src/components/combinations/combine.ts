import { Combination } from "./types";

export function combine<T extends any>(props: Combination<T>): T[] {
  const keys = Object.keys(props);
  const entries = Object.values(props);
  const produced = product(...entries);
  return produced.map(p => Object.assign({}, ...p.map((v, i) => ({ [keys[i]]: v }))));
}

export function product(...terms: Iterable<any>[]) {
  const pools = terms.map(t => Array.from(t));
  let result = [[]];
  for (const pool of pools) {
    const newarray = [];
    for (const x of result) {
      for (const y of pool) {
        newarray.push([...x, y]);
      }
    }
    result = newarray.slice();
  }
  return result;
}
