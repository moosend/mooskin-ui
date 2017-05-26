# MooSkin (WIP)


[![Build Status](https://travis-ci.org/moosend/mooskin-ui.svg?branch=master)](https://travis-ci.org/moosend/mooskin-ui)


A collection of React components with pre-defined styles for Moosend UI.

___

### Prequisites

Since it is a React Component Library, we recommend that you get to know [React](https://facebook.github.io/react/) before using MooSkin.  [Webpack](https://webpack.github.io/) is recommended as well, but any build tool that can handle importing css will work too.

### Installation

MooSkin-UI is available as an npm package.

```
npm install mooskin --save
```

### Usage

Apart from [React](https://facebook.github.io/react/) itself, you need to be able to import the CSS file for the library by using a loader or some plugin for your build tool of choice(css-loader if you re using webpack, which is recommended).

```
import React from 'react';
import ReactDOM from 'react-dom';
import 'mooskin/lib/style.css'
```

and then you can simply import the desired component and start using it

```
import {Button} from 'mooskin';

const App = () => (
  <Button>Click me!</Button>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

Please refer to each component's documentation page to see how they should be imported.

### Other Examples

As you may noticed, for easy use, the components are named similar to normal HTML components but with a capital first letter.

Lets say we want to use the Select Component. First we have to import it

```
import {Select} from 'mooskin';
```

And then you can simply start using it by typing

```
<Select dataLabel="countries" onChange={callback}>
    <Option whatever>England</Option>
    <Option whatever>Germany</Option>
</Select>
```

The components are build to support attributes like normal HTML elements. For example, an Input component with a placeholder:

```
import {Input} from 'mooskin'

<Input placeholder="Your Name" />
```

### Contribute

MooSkin-UI came to life because of the love for [React](https://facebook.github.io/react/), and if you share the same love, we'd greatly appreciate any contribution you make.

### License

This project is licensed under the terms of the [MIT License](https://github.com/moosend/mooskin-ui/blob/master/LICENSE)



