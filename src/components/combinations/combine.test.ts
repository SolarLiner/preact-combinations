import test from "ava";

import { combine, product } from "./combine";

test("product() should accept any number of items and return an array", t => {
  const results = [product([1, 2], ["a", "b"]), product([1, 2], ["a", "b", "c"], [true], [])];
  for (const result of results) {
    t.true(Array.isArray(result));
  }
});
test("product() should return the cartesian product of the terms in the input", t => {
  const result = product([1, 2], ["a", "b", "c"]);
  t.deepEqual(result, [[1, "a"], [1, "b"], [1, "c"], [2, "a"], [2, "b"], [2, "c"]]);
});

test("combine() should combine input object into array of objects", t => {
  const input = {
    a: [1, 2],
    b: ["a", "b", "c"]
  };
  const output = combine(input);
  t.deepEqual(output, [
    { a: 1, b: "a" },
    { a: 1, b: "b" },
    { a: 1, b: "c" },
    { a: 2, b: "a" },
    { a: 2, b: "b" },
    { a: 2, b: "c" }
  ]);
});
