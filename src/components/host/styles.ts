import { style } from "typestyle";

export default {
  form: style({
    backgroundColor: "#EEE",
    border: "1px solid #DDD",
    borderRadius: "3px",
    padding: "0 20px",
    margin: "20px"
  }),
  input: style({}),
  label: style({
    display: "block",
    padding: "20px 0",
    margin: 0,
    $nest: {
      "&:not(:last-child)": {
        borderBottom: "1px solid #DDD"
      }
    }
  })
};
