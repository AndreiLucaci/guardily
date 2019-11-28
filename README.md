# <span style='color: red'>WIP: note that please, it's not yet deployed as a package!!!</span>

# guardily

Helper method that guards function parameters

## description

Exports a `Guard` helper method:

```javascript
```

## install

`yarn add guardily`
`npm install guardily`

## usage

ts:

```typescript
import { Guard } from "guardily";

// don't throw exception, use a custom callback
const testFunc = x => {
  Guard.argumentNotValid(
    x,
    "x",
    { doNotThrow: true, useCallback: true },
    null,
    () => {
      console.log("argument is not valid");
    }
  );
};
```
