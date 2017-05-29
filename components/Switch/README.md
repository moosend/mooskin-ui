# MooSkin UI - Switch Component

The MooSkin Switch Component works similar to the Checkbox HTML element, but with pre-defined styling and attributes.

___

### Usage

To start using the Switch Component first you have to Import it

```
Import {Switch} from 'mooskin';
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
<Switch onChange={yourFunc} />
```

or just give it a custom style

```
<Switch style={yourStyle} />
```

## Supported attributes

* `id` - id of the element
* `type` - default being 'checkbox'
* `disabled` - input field should be disabled
* `required` - input field is required
* `className` - css class
* `style` - input field style
* `onChange` - callback to be triggered on input change

Allthough these attributes are supported, all of them are optional.

___


#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)