import { combine, product } from "./combine";

describe("product()", () => {
  it("should accept any number of items and return an array", () => {
    const results = [product([1, 2], ["a", "b"]), product([1, 2], ["a", "b", "c"], [true], [])];
    for (const result of results) {
      expect(Array.isArray(result)).toBeTruthy();
    }
  });
  it("should return the cartesian product of the terms in input", () => {
    const result = product([1, 2], ["a", "b", "c"]);
    expect(result).toEqual([[1, "a"], [1, "b"], [1, "c"], [2, "a"], [2, "b"], [2, "c"]]);
  });
});

describe("combine()", () => {
  it("should combine input object into array of objects", () => {
    const input = {
      a: [1, 2],
      b: ["a", "b", "c"]
    };
    const output = combine(input);
    expect(output).toEqual([
      { a: 1, b: "a" },
      { a: 1, b: "b" },
      { a: 1, b: "c" },
      { a: 2, b: "a" },
      { a: 2, b: "b" },
      { a: 2, b: "c" }
    ]);
  });
});
