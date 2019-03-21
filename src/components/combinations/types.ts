export type Combination<T> = { [P in keyof T]?: T[P][] };
