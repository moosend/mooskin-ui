# MooSkin UI - Input Component

The MooSkin Input Component works similar to the normal HTML `<input/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Input Component first you have to Import it

```
Import {Input} from 'mooskin';
```
or modular import
```
// JS
import Input from 'mooskin/lib/Input';

// CSS
import 'mooskin/lib/Input/style.css';
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

### Validation

The Input Component can be validated using the `status` and `validate` props. The `status` prop will accept an 'error' or 'success' string to apply the appropriate classes to the input, or none for that matter. The `validate` prop is the validation function which accepts a arg of an object containing `value`, `dataLabel` and `required` props of the component as properties, and depending on the received value, you can use any kind of validation you like. The `description` prop can also be used in the process to inform the user about validation errors. The validation will fire the first time onBlur, and every other time onChange.

#### Example

```
this.state = {
    status: '',
    message: '',
    value: ''
}

<Input
    value={this.state.value}
    validate={this.validate}
    status={this.state.status}
    description={this.state.message}
    onChange={this.onChange}
/>

onChange(e, data) {
    this.setState({value: data.value})
}

validate(data){
    if (data.value){
        if (data.value.length < 5){
            this.setState({status: 'error', message: 'Input should have 5 or more characters'});
        } else {
            this.setState({status: '', message: ''})
        }
    } else {
        this.setState({status: 'error', message: 'This input field is required'});
    }
}
```

In this case, when the user focuses the input and blurs away immediately, an error class will get applied to the input and the user will get informed that thee input field is required. When the user starts typing, the error message will change, saying that the input should have 5 or more characters, when this is done, the error classes will get removed. Alternatevely, when the validation passes, we can pass a success status to apply the related class.

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
* `customDropdown` - adds a custom dropdown like the dropdown for emoji or personalization tags. Should consist of the follow object, `icon` which will appear as dropdown icon, `label`, which will appear as label & `content` which should be a JSX element or an array of such. The prop acceps an array of such dropdown objects aswell, rendering multiple dropdowns.
* `labelWidth` - label width (default 150 px)
* `autofocus` - autofocus specified input on page load
* `autocomplete` - toggle autocomplete
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - input field style
* `icon` - icon inside input (material icon names)
* `iconPosition` - left or right (right is default)
* `iconClass` - class to be applied to the icon
* `iconStyle` - styles to be applied to the icon
* `onChange` - callback to be triggered on input change
* `validate` - validate function
* `minmax` - an array of one or two number values, if array has one value, that will be set as the maximum allowed number, if array has two values, the first will be set as the minimum value, the second will be set as the maximum value (only works with type="number" input)
* `emoji` - adds emoji icon to the input, which opens a dropdown for adding emojis
* `personalizationTags` - adds personalization tags based on passed prop, should be an array of object {label: string, value: string}
& `closeOnTagAdd` - closes personalization tags dropdown when a personalization tag is added
* `status` - to be used with validate, to apply classes based on error or success
* `extraHtmlAttr` - extra html attributes applied to the input

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)