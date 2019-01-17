# preact-combinations
Pass an array of value per props; get the element rendered as all possible combinations of those props.

## Install

```bash
npm i preact-combinations
```

## Use

Pass an object of props, with each prop being an arry of potential values to take.

```tsx
const combinations = {
  color: ["red","green","blue"],
  elevation: [1,2,5,10],
  children: ["Button", "🌍"]
}
<Combinations component={Button} combinations={combinations}/>
```

Style the per-element wrapper to add gaps, etc.

```tsx
const style = {
  margin: "1em .5em"
}
<Combinations component={Button} combinations={combinations} style={style}/>
```
