# eslint-config
Config for `@ohs`'s projects, based on `eslint-config-airbnb`, batteries included

## Install

```bash
$ npm i @ohs/eslint-config
$ yarn add @ohs/eslint-config
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
