<p align="center">
    <img src="https://cdn.stat-track.com/20170803-2017-0803-2017-080320170803/ca5ad9249d284435955b75e1a22aa15cmooskinLogo.png" width="100" />
    <div align="center">
        <img src="https://travis-ci.org/moosend/mooskin-ui.svg?branch=master">
    </div>
  	<h3 align="center">MooSkin</h3>
<p align="center">
    A collection of React components with pre-defined styles for Moosend UI, at the moment very much a work in progress and a lot of things are subject to change.
</p>
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
Modular usage is also possible for both css and js(components) files, if you just want to use a few components, you should not have to import the whole CSS file, but instead have just what you need.

```
import 'mooskin/lib/Button/style.css';
import Button from 'mooskin/lib/Button';
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
* [Carousel](https://github.com/moosend/mooskin-ui/tree/master/components/Carousel)
* [CheckBox](https://github.com/moosend/mooskin-ui/tree/master/components/Checkbox)
* [CheckListItem](https://github.com/moosend/mooskin-ui/tree/master/components/CheckListItem)
* [ClipboardButton](https://github.com/moosend/mooskin-ui/tree/master/components/ClipboardButton)
* [DatePicker](https://github.com/moosend/mooskin-ui/tree/master/components/DatePicker)
* [Fieldset](https://github.com/moosend/mooskin-ui/tree/master/components/Fieldset)
* [File](https://github.com/moosend/mooskin-ui/tree/master/components/File)
* [Form](https://github.com/moosend/mooskin-ui/tree/master/components/Form)
* [Grid](https://github.com/moosend/mooskin-ui/tree/master/components/Grid)
* [Headings](https://github.com/moosend/mooskin-ui/tree/master/components/Headings)
* [HorizontalRangeBar](https://github.com/moosend/mooskin-ui/tree/master/components/HorizontalRangeBar)
* [Input](https://github.com/moosend/mooskin-ui/tree/master/components/Input)
* [Label](https://github.com/moosend/mooskin-ui/tree/master/components/Label)
* [List](https://github.com/moosend/mooskin-ui/tree/master/components/List)
* [Loader](https://github.com/moosend/mooskin-ui/tree/master/components/Loader)
* [LoadingBar](https://github.com/moosend/mooskin-ui/tree/master/components/LoadingBar)
* [Modal](https://github.com/moosend/mooskin-ui/tree/master/components/Modal)
* [Pagination](https://github.com/moosend/mooskin-ui/tree/master/components/Pagination)
* [Radio](https://github.com/moosend/mooskin-ui/tree/master/components/Radio)
* [RadioAccordion](https://github.com/moosend/mooskin-ui/tree/master/components/RadioAccordion)
* [Select](https://github.com/moosend/mooskin-ui/tree/master/components/Select)
* [Sidebar](https://github.com/moosend/mooskin-ui/tree/master/components/Sidebar)
* [Slider](https://github.com/moosend/mooskin-ui/tree/master/components/Slider)
* [SmallIconButton](https://github.com/moosend/mooskin-ui/tree/master/components/SmallIconButton)
* [StatsBox](https://github.com/moosend/mooskin-ui/tree/master/components/StatsBox)
* [Steps](https://github.com/moosend/mooskin-ui/tree/master/components/Steps)
* [Switch](https://github.com/moosend/mooskin-ui/tree/master/components/Switch)
* [TabbedContent](https://github.com/moosend/mooskin-ui/tree/master/components/TabbedContent)
* [Table](https://github.com/moosend/mooskin-ui/tree/master/components/Table)
* [Tags](https://github.com/moosend/mooskin-ui/tree/master/components/Tags)
* [TextArea](https://github.com/moosend/mooskin-ui/tree/master/components/TextArea)
* [TextEditor](https://github.com/moosend/mooskin-ui/tree/master/components/TextEditor)
* [Topbar](https://github.com/moosend/mooskin-ui/tree/master/components/Topbar)
* [TopNotification](https://github.com/moosend/mooskin-ui/tree/master/components/TopNotification)

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

If you want to add a new component that is in development to the playground, create an example component in `/playground/examples/` which returns a component in development. Add the example to `/playground/App.tsx` and you're good to go.
 
### Contribute

MooSkin-UI came to life because of the love for [React](https://facebook.github.io/react/), and if you share the same love, we'd greatly appreciate any [contribution](https://github.com/moosend/mooskin-ui/blob/master/CONTRIBUTING.md) you make.

 
### License

This project is licensed under the terms of the [MIT License](https://github.com/moosend/mooskin-ui/blob/master/LICENSE)
