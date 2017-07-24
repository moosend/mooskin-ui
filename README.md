# MooSkin (WIP)


[![Build Status](https://travis-ci.org/moosend/mooskin-ui.svg?branch=master)](https://travis-ci.org/moosend/mooskin-ui)


A collection of React components with pre-defined styles for Moosend UI, at the moment very much a work in progress and a lot of things are subject to change.

___

### Demo

**[Component Playground...](https://mooskin.herokuapp.com/)**

### Prerequisites

Since it is a React Component Library, we recommend that you get to know [React](https://facebook.github.io/react/) before using MooSkin.  [Webpack](https://webpack.github.io/) is recommended as well, but any build tool that can handle importing css will work too.

 
### Installation

MooSkin-UI is available as an npm package.

```
npm install mooskin --save
```
 
### Usage

Apart from [React](https://facebook.github.io/react/) itself, you need to be able to import the CSS file for the library by using a loader or some plugin for your build tool of choice(css-loader if you re using webpack, which is recommended).

```
import 'mooskin/lib/index/style.css'
``` 
and then you can simply import the desired component and start using it
```
import {Input} from 'mooskin';
```
Modular usageis also possible for both css and js(components) files, if you just want to use a few components, you should not have to import the whole CSS file, but instead have just what you need.

```
import 'mooskin/lib/Button/style.css';
import 'mooskin/lib/Button';
// import {Button} from 'mooskin';  //this works as well
```

### Example
```
import 'mooskin/lib/index/style.css'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'mooskin';

class App extends Component (
  render(){
    return (
      <div>
        <Button>Click me!</Button>
      </div>
    );
  }
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

Please refer to each component's documentation page to see how they should be imported.

 
### Usage with Typescript

Mooskin itself is written in Typescript, so it has type definitions out of the box, no need to install any. Just import stuff as usual. Static types should greatly help with potential bugs and autocompletion. Here is an example below.

```
import 'mooskin/lib/index/style.css'

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Button} from 'mooskin';

interface IProps {
  //some prop types
}

interface IState {
  //some state types
}

class App extends React.Component<IProps, IState> (
  render(){
    return (
      <div>
        <Button>Click me!</Button>
        <Button value="asdads">Click me!</Button> //compiler error because attribute 'value' does not exist in Button component
      </div>
    );
  }
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

If the compiler complains about the css file import, you can add a type declaration for the css import in a declaration file(.d.ts) .You can place this file in the root folder, newer versions of Typescript will pick it up automatically, otherwise you would need a `///<reference path="..."/>` statement at the top of your index file.

```
declare module '*.css' {
  const content: any;
  export default content;
}

```
 
### Other Examples

As you may have noticed, for easy use, the components are named similar to normal HTML components but with a capital first letter.

Lets say we want to use the Select Component. First we have to import it

```
import {Select, Option} from 'mooskin';
```

And then you can simply start using it by typing

```
<Select dataLabel="countries" onChange={callback}>
    <Option whatever>England</Option> 				//<Select.Option whatever>England</Option> //this works too
    <Option whatever>Germany</Option>
</Select>
```

The components are built to support attributes like normal HTML elements. For example, an Input component with a placeholder:

```
import {Input} from 'mooskin'

<Input placeholder="Your Name" />
```

## List of Components

* [Button](https://github.com/moosend/mooskin-ui/tree/master/components/Button)
* [Input](https://github.com/moosend/mooskin-ui/tree/master/components/Input)
* [Radio](https://github.com/moosend/mooskin-ui/tree/master/components/Radio)
* [CheckBox](https://github.com/moosend/mooskin-ui/tree/master/components/Checkbox)
* [TextArea](https://github.com/moosend/mooskin-ui/tree/master/components/TextArea)
* [Form](https://github.com/moosend/mooskin-ui/tree/master/components/Form)
* [Switch](https://github.com/moosend/mooskin-ui/tree/master/components/Switch)
* [Select](https://github.com/moosend/mooskin-ui/tree/master/components/Select)
* [Headings](https://github.com/moosend/mooskin-ui/tree/master/components/Headings)
* [Fieldset](https://github.com/moosend/mooskin-ui/tree/master/components/Fieldset)
* [SmallIconButton](https://github.com/moosend/mooskin-ui/tree/master/components/SmallIconButton)
* [TabbedContent](https://github.com/moosend/mooskin-ui/tree/master/components/TabbedContent)
* [RadioTabs](https://github.com/moosend/mooskin-ui/tree/master/components/RadioTabs)
* [RadioAccordion](https://github.com/moosend/mooskin-ui/tree/master/components/Accordion)
* [CheckListItem](https://github.com/moosend/mooskin-ui/tree/master/components/CheckListItem)
* [TopNotification](https://github.com/moosend/mooskin-ui/tree/master/components/TopNotification)
* [HorizontalRangeBar](https://github.com/moosend/mooskin-ui/tree/master/components/HorizontalRangeBar)

#### Charts
* [Pie](https://github.com/moosend/mooskin-ui/tree/master/components/Charts/Pie)
* [Doughnut](https://github.com/moosend/mooskin-ui/tree/master/components/Charts/Doughnut)
* [Bar](https://github.com/moosend/mooskin-ui/tree/master/components/Charts/Bar)
* [Line](https://github.com/moosend/mooskin-ui/tree/master/components/Charts/Line)

## Playground (development)

Clone the [Mooskin](https://github.com/moosend/mooskin-ui) repository first. Then install dependencies with

```
npm install
```
or

```
yarn install
```

After installation run `start-development.bat` on the Mooskin root folder, wait for build to complete then go to `http://localhost:8080/`. Have fun playing with the components.

If you want to add a new component that is in development to the playground, create an example component in `/playground/examples/` which returns an instance of the component in development. Add the example to `/playground/App.tsx` and you're good to go.
 
### Contribute

MooSkin-UI came to life because of the love for [React](https://facebook.github.io/react/), and if you share the same love, we'd greatly appreciate any [contribution](https://github.com/moosend/mooskin-ui/blob/master/CONTRIBUTING.md) you make.

 
### License

This project is licensed under the terms of the [MIT License](https://github.com/moosend/mooskin-ui/blob/master/LICENSE)



