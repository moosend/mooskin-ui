# MooSkin UI - Button Component

The MooSkin Button Component works similar to the normal HTML `<button/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Button Component first you have to Import it

```
Import {Button} from 'mooskin';
```
or
```
import Button from 'mooskin/lib/Button';
```

And then you can simply start using it by typing

```
<Button attribute1="atr" attribute2="asd" >button1</Button>
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<button/>` element it will accept given attributes and render differently based on the given attributes

### Examples


Making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<Button disabled >button1</Button>
```

or pass it a function for event handling

```
<Button onClick={yourFunc} >button1</Button>
```

or just give it a custom style

```
<Button style={yourStyle} >button1</Button>
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `disabled` - button should be disabled
* `className` - css class
* `inverseStyle` - a style variaton of the button 
* `style` - button style
* `onClick` - callback to be triggered on button click

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)