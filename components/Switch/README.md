# MooSkin UI - Switch Component

The MooSkin Switch Component works similar to the Checkbox HTML element, but with pre-defined styling and attributes.

___

### Usage

To start using the Switch Component first you have to Import it

```
Import {Switch} from '@moosend/mooskin';
```
or modular import
```
// JS
import Switch from '@moosend/mooskin/lib/Switch';

// CSS
import '@moosend/mooskin/lib/Switch/style.css';
```

And then you can simply start using it by typing

```
<Switch />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

The component will accept given attributes and render differently based on the given attributes

### Examples

Passing the id attribute

```
<Switch id="mySwitch" />
```

or making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<Switch disabled />
```

or pass it a function for event handling

```
<Switch onClick={yourFunc} />
```

or just give it a custom style

```
<Switch style={yourStyle} />
```

### Callback

The Switch Component Callback will always return the boolean value of the Switch on each click. This can be used with a function passed via the `onClick` prop. For example, if u want to fire a function if the Switch is turned on (oh yea), pass a function to the `onClick` prop.

```
const onSwitch = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    if(data.value){                 // this can be either true or false depending on the Switch, so if the Switch is on or not
        // do something on Switch on
    }      
};

<Switch onClick={onSwitch} />
```
In this case the statement block will get fired if the Switch is turned on.

This can be used in various situations and combinations, for an enhanced development experience.

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `disabled` - element should be disabled
* `onLabel` - element label when on
* `offLabel` - element label when off
* `disabledLabel` - element label when disabled
* `on` - element is required
* `className` - css class
* `style` - custom style
* `dataLabel` - label what kind of data 
* `onClick` - callback to be triggered on click

</div>

Allthough these attributes are supported, all of them are optional.

___


#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)