# MooSkin UI - Tags Component

___

### Usage

To start using the Tags Component first you have to Import it

```
Import {Tags} from 'mooskin';
```
or modular import
```
// JS
import Tags from 'mooskin/lib/Tags';

// CSS
import 'mooskin/lib/Tags/style.css';
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

The Tags Component Callback will always return an array of strings, which reflects the added or removed tags. Callbacks are seperated into two different functions, `onAdd` and `onRemove`. `onAdd` return an array of the newly added tag/tags which then can be used to change the state of the parent component. `onRemove` returns an array of the removed tag/tags and the index of the removed tag.

Playing with data
```
this.state = {
    cities: ['Prishtina', 'Athens']
}

onAdd = (e, data) => {            // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);      // in the case of adding `London` to the tags, `data.value` will equal `London`
};

onRemove = (e, data, index) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);         // in the case of pressing `Backspace`, `data.value` will equal `Athens`, and index is `1`
};

<Tags tags={this.state.cities} onAdd={this.onAdd} onRemove={this.onremove} />
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
* `submitOnBlur` - wether it should trigger a submission if the input is focused out
* `deletable` - wether tags should be deletable by backspace, still can be deleted by clicking on X
* `label` - tags label
* `placeholder` - placeholder on the input
* `source` - source of the searchable and selectable typeahead data, can be an array of strings or a function that returns either an array of strings or a promise that resolves into an array of strings
* `sourceLimit` - number of max results for source
* `tags` - data to appear as already tagged (array of strings)
* `onAdd` - callback func which returns a newly created tag, can be added to the component with unidirectional flow
* `onRemove` - callback func which returns the tag to be removed and the index of the tag within an array.

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)