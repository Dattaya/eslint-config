<img src="https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-no-action.svg" />

[war.ukraine.ua](https://war.ukraine.ua/), [vshymanskyy/StandWithUkraine](https://github.com/vshymanskyy/StandWithUkraine)

### Deprecated in favor of 'multi-tools' like `kcd-scripts` that have almost everything a library author might need.
# eslint-config
Config for `@ohs`'s projects, based on `eslint-config-airbnb`, batteries included

## Install

```bash
$ npm i @ohs/eslint-config eslint
$ yarn add @ohs/eslint-config eslint
```

## Usage

```js
require('@ohs/eslint-config/patch');

module.exports = {
  extends: [
    '@ohs/eslint-config',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
};
```
