This is a simple component library intended as an extension of the Braid Design System - built using React, Typescript and Rollup.

## Prerequisites

- node v20.10.0 - if using nvm run `nvm install 20` and `nvm use 20`
- npm v10.2.5 - `brew install npm` with Homebrew on Mac 
- react v17 and react-dom v17 (Braid requires react@^17)
- an account on https://www.npmjs.com/

## Install

Using npm:

`npm install braid-extension-component-library`

## Usage

Wrap your project in BraidProvider
```
import { BraidProvider } from 'braid-design-system';

export default () => (
  <BraidProvider>
    <App />
  </BraidProvider>
);
```

Import a component into your project 

```
import { Button } from 'braid-extension-component-library'

const Example = () => {
    <Button>Button</Button>
}
```



