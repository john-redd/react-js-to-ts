# React/JS to React/TS

Example of incremental conversion of a React/JS app bootstrapped with `create-react-app` to a React/TS app.

## Step 1 - Add Typescript dependencies.

`yarn add -D typescript @types/react @types/node @types/react-dom @types/jest`

---

## Step 2 - Generate a tsconfig.json

`npx tsc --init`

---

## Step 3 - Edit tsconfig.json

CRA Typescript Template:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["src"]
}
```

You may need to add the following lines to `compilerOptions`

```json
  "noFallthroughCasesInSwitch": true,
  "allowUmdGlobalAccess": true
```

#### IMPORTANT NOTE:

In order to enable gradual adoption of Typescript into your React app, you need to be sure that the `allowJs` flag in the `compilerOptions` has been set to `true`.

---

## Step 4 - Convert project incrementally

You are now free to convert your `.js` and `.jsx` file extensions to `.ts` and `.tsx` and implement Typescript at your leisure.
