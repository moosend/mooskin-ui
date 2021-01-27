# MooSkin UI - ClipboardButton Component

The MooSkin ClipboardButton Component copies value prop to clipboard, meant to be used with other components.

___

### Usage

To start using the ClipboardButton Component first you have to Import it

```
Import {ClipboardButton} from '@moosend/mooskin';
```
or modular import
```
// JS
import ClipboardButton from '@moosend/mooskin/lib/ClipboardButton';

// CSS
import '@moosend/mooskin/lib/ClipboardButton/style.css';
```

And then you can simply start using it by typing

```
<ClipboardButton attribute1="atr" attribute2="asd" />
```

### Examples

The component requires a value prop passed to it, which will be copied to the clipboard on click

```
<ClipboardButton value="some value" />
```

label of the button can be changed via the `label` prop

```
<ClipboardButton label="Some label" />
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `label` - Button label
* `value` - value to be copied to the clipboard
* `className` - css class
* `style` - button style
* `onClick` - callback to be triggered on button click

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)