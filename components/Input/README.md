# MooSkin UI - Input Component

The MooSkin Input Component works similar to the normal HTML `<input/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Input Component first you have to Import it

```
Import {Input} from 'mooskin';
```

And then you can simply start using it by typing

```
<Input />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<input/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the placeholder attribute

```
<Input placeholder="username" />
```

or making it disabled with a value, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<Input value="This one is disabled" disabled />
```

or pass it a function for event handling

```
<Input onChange={yourFunc} />
```

or just give it a custom style

```
<Input style={yourStyle} />
```

### Callback

The Input Component Callback will always return the value of the Input on each change. This can be used with a function passed via the `onChange` prop. For example, if u want to console log the callback value, pass a function to the `onChange` prop.

```
const logValue = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);
};

<Input onChange={logValue} />
```
In this case on each input change, the value will be console logged.

This can be used in various situations and combinations, for an enhanced development experience.

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `type` - type of the input (eg. text)
* `name` - name of the input
* `value` - text value of input
* `placeholder` - backtext description of input
* `minlength` - min number of characters allowed
* `maxlength` - max number of characters allowed
* `disabled` - input field should be disabled
* `required` - input field is required
* `description` - input description (small italic bottom)
* `labelWidth` - label width (default 150 px)
* `autofocus` - autofocus specified input on page load
* `autocomplete` - toggle autocomplete
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - input field style
* `onChange` - callback to be triggered on input change

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)