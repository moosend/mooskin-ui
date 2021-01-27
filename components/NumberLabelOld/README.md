# MooSkin UI - Label Component

The MooSkin Label Component, a simple labeling component with pre-defined styling and attributes.

___

### Usage

To start using the Label Component first you have to Import it

```
Import {Label} from '@moosend/mooskin';
```
or modular import
```
// JS
import Label from '@moosend/mooskin/lib/Label';

// CSS
import '@moosend/mooskin/lib/Label/style.css';
```

And then you can simply start using it by typing

```
<Label attribute1="atr" attribute2="asd" >Label text</Label>
```

The component it will accept given attributes and render differently based on the given attributes

### Examples


Making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)


Give it custom styles

```
<Label style={yourStyle} >Label content</Label>
```

or abbreviate numerical values by passing the `abbreviate` prop

```
<Label abbreviate>13400</Label>
```
this returns a label with a value of 13.4K. Works with higher values aswell.

and round it aswell with `round` prop

```
<Label abbreviate round>13400</Label>
```

this results in a value of 13K.


<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `className` - css class
* `style` - button style
* `abbreviate` - abbreviates large numerical values
* `abbrAccuracy` - how many decimal digits should be on the abbreviation
* `round` - rounds large numerical values to the nearest thousand, million, billion etc 
* `roundAccuracy` - determines wether it should round the values to hundreds or thousands and so on. Supported values are: `high` | `low` 

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)