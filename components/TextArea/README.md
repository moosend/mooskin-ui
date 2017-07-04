# MooSkin UI - TextArea Component

The MooSkin TextArea Component works similar to the normal HTML `<textarea/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the TextArea Component first you have to Import it

```
Import {TextArea} from 'mooskin';
```

And then you can simply start using it by typing

```
<TextArea />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<textarea/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the placeholder attribute

```
<TextArea placeholder="username" />
```

or making it disabled with a value, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<TextArea value="This one is disabled" disabled />
```

or pass it a function for event handling

```
<TextArea onChange={yourFunc} />
```

or just give it a custom style

```
<TextArea style={yourStyle} />
```

## Supported attributes

* `id` - id of the element
* `type` - type of the textarea (eg. text)
* `name` - name of the textarea
* `value` - text value of textarea
* `placeholder` - backtext description of textarea
* `minlength` - min number of characters allowed
* `maxlength` - max number of characters allowed
* `disabled` - textarea field should be disabled
* `required` - textarea field is required
* `description` - textarea description (small italic bottom)
* `spacing` - spacing between label and textarea
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - textarea field style
* `onChange` - callback to be triggered on textarea change

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)