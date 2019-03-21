import test from "ava";
import { h } from "preact";
import { shallowRender } from "preact-render-to-string";
import Combinations from ".";
import Button from "../example-button";

test("Component matches snapshot", t => {
  const combinations = {
    color: ["red", "green", "blue"],
    elevation: [1, 2, 5, 10],
    children: ["Button", "🌍"]
  };
  const html = shallowRender(h(Combinations, { component: Button, combinations }));
  t.snapshot(html);
});
