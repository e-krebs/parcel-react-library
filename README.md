# What
This is a repro repository for a [parcel bug](https://github.com/parcel-bundler/parcel/issues/7652) happening when building a react library
- it is built using **parcel**
  - the target is configured to have a **browser** context & being a **library** in `package.json > targets > main`
- it outputs a dummy **react** component exported through the `src/index.ts` file
  - it uses the modern **react-jsx** transformer configured in `tsconfig.json > compilerOptions > react`

## setup
run `yarn`

## with babel
This repo setup works when using babel, but output some warnings because we use babel for things parcel can handle. (**parcel** uses babel because it sees the `babel.config.json` file).

Both `yarn build` & `yarn watch` command works.

## without babel
To reproduce the bug, simply remove `babel.config.json`.

`yarn build` still works
`yarn watch` will fail with the following error:
> ```sh
> @parcel/packager-js: Asset was skipped or not found.
> AssertionError [ERR_ASSERTION]: Asset was skipped or not found.
> at ScopeHoistingPackager.getSymbolResolution
> ...
> ```

## recap
| | with babel| without babel |
|-|-|-|
| how | - | remove file: `babel.config.json` |
| `yarn build` | ✅ | ✅ |
| `yarn watch` | ✅ | ❌ |
