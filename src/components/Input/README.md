# MooSkin UI - Input Component

The MooSkin Input Component works similar to the normal HTML <input/> element, but with pre-defined styling and attributes.

___

### Usage

To start using the Input Component first you have to Import it

```
Import {Input} from 'mooskin';
```

And then you can simply start using it by typing

```
<Input whatever />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the <input/> element it will accept given attributes and render differently based on the given attributes

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

## Supported attributes

* `type` - type of the input (eg. text)
* `name` - name of the input
* `value` - text value of input
* `placeholder` - backtext description of input
* `size` - size of the input field
* `minlength` - min number of characters allowed
* `maxlength` - max number of characters allowed
* `disabled` - input field should be disabled
* `required` - input field is required
* `style` - input field style

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)