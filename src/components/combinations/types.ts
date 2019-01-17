export type Combination<T> = { [P in keyof T]?: Array<T[P]> };
