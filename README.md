# mooskin-ui (WIP)


[![Build Status](https://travis-ci.org/moosend/mooskin-ui.svg?branch=master)](https://travis-ci.org/moosend/mooskin-ui)


A collection of React components with pre-defined styles for Moosend UI.

___

### Prequisites

Since it is a React Component Library, we recommend that you get to know [React](https://facebook.github.io/react/) before using MooSkin-UI.

### Installation

MooSkin-UI is available as an npm package.

```
npm install mooskin --save
```

### Usage

Apart from [React](https://facebook.github.io/react/) itself, MooSkin-UI uses [PostCSS](https://github.com/postcss/postcss) so that needs to be imported aswell.

```
import React from 'react';
import ReactDOM from 'react-dom';
import 'mooskin/lib/style.css'
```

and then you can simply import the desired component and start using it

```
import {Button} from 'mooskin';

const App = () => (
  <Button />
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
<Select whatever >
    <Option whatever>Select me!</Option>
    <Option whatever>No, Select me!</Option>
</Select>
```

The components are build to support attributes like normal HTML elements. For example, an Input component with a placeholder:

```
import {Input} from 'mooskin'

<Input placeholder="Your Name" />
```

### Contribute

MooSkin-UI came to life because of the love for [React](https://facebook.github.io/react/), and if you share the same love, we'd greatly appreciate any contribution you make.

###

This project is licensed under the terms of the [MIT License](https://github.com/moosend/mooskin-ui/blob/master/LICENSE)



