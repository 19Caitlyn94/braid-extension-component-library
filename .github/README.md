This is a simple react component library intended to be used as a starter pack for any new component library - built using React, Typescript and Rollup. 

## Prerequisites

- node v20.10.0 - if using nvm run `nvm install 20` and `nvm use 20`
- npm v10.2.5 - `brew install npm` with Homebrew on Mac 
- react v16.14.0
- an account on https://www.npmjs.com/


## Getting started 

1. Fork this repo and rename the folder to the name of your project. 
2. Initialise your project by running `git init` in your project directory. Give your component library a name, version number, your new github repo url (if ), keywords and description. From this point on, wherever 'react-component-library' is referenced in this readme, swap it out with your component library name. 
2. Make sure you are running the right node and package versions locally and in your project.
3. Install node modules `npm i`
4. Bundle your project with rollup `npm run rollup`

#### Update this README

Update npm_README.md with your own package specifications and guide

#### Publish your project

`npm adduser` to create account or login to npmjs.com
`npm publish` to publish your changes

#### Make changes and republish

1. After making changes to your project, change the version number in your package.json, run `npm i` to update your package-lock.json and then `npm run rollup` to bundle your project
2. Run `npm publish` to publish your changes
3. Check that it has updated on https://www.npmjs.com/package/{your-package-name}?activeTab=versions 

## Usage

1. Once published, install your new component library into your react project. In the project directory. eg. `npm i react-component-library`
2. Check if it's working - import the button component into your project 
```
import { Button } from 'react-component-library'

const Example = () => {
    <Button>Button</Button>
}
```



