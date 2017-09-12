# MooSkin UI - Tags Component

___

### Usage

To start using the Tags Component first you have to Import it

```
Import {Tags} from 'mooskin';
```
or
```
import Tags from 'mooskin/lib/TabbedContent';
```

And then you can simply start using it by typing

```
<Tags />
```

Now this is a simple input, taggind data by submitting it. Submission by `enter` is default, this can be changed though.

We'll be looking at the following examples, to understand how to utilize this component.

### Examples


```
this.state = {
    cities: ['Prishtina', 'Athens']              // accepts and returns an array of strings
}

<Tags tags={this.state.cities} />
```

Now those cities will appear as tags in the component, further tags can be added of course by typing.

Pre defined data can be passed as props, so when typing has started on the component, suggestions will appear to select and tag them.


```
this.state = {
    cities: ['Prishtina', 'Athens']
}

const sources = ['London', 'Berlin', 'Beijing', 'New York';]

<Tags tags={this.state.cities} source={sources} />
```

Or you can pass a function that returns an array of strings, or a promise that resolves into an array of strings, if you have to get suggestions from an api call

```
this.state = {
    cities: ['Prishtina', 'Athens']
}

const promiseFunc = () => {
    return fetch('https://api.github.com/users?since=135') // fetch function returns a promise
                .then(rsp => rsp.json())
                .then(data => data.map(user => user.login));
}
<Tags tags={this.state.cities} source={promiseFunc} />
```

Now as far as submission goes, `Enter` is the default key to do it, but this can be changed via the `delimiters` prop, which accepts `keyCode` idendifier or `key` idendifier.

```
this.state = {
    cities: ['Prishtina', 'Athens']  
}

<Tags tags={this.state.cities} delimiters=['Enter', 32, 188] />    // 32 and 188 are keyCodes for `space` and `,`
```

### Callback

The Tags Component Callback will always return an array of strings, which reflects the state of the component. This can be used with a function passed via the `onChange` prop. For example, if u want to log the state of the Tags, pass a function to the `onChange` prop.

Playing with data
```
const logValues = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);         // this will log the array of objects, with the state of each Radio
};

<Tags onChange={this.logValues} />
```

This can be used in various situations and combinations, for an enhanced development experience.

<div class="playground-doc">

## Supported attributes for Tags

* `id` - id of the element
* `className` - css class
* `style` - extra styles for the main container
* `tagStyles` - styles for individual tags
* `tagClasses` - classes for individual tags
* `delimiters` - an array of keys (string) or keyCodes (number) which will trigger a submission
* `deletable` - wether tags should be deletable by backspace, still can be deleted by clicking on X
* `label` - tags label
* `placeholder` - placeholder on the input
* `source` - source of the searchable and selectable typeahead data, can be an array of strings or a function that returns either an array of strings or a promise that resolves into an array of strings
* `sourceLimit` - number of max results for source
* `tags` - data to appear as already tagged (array of strings)
* `onChange` - callback func when tags change

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)