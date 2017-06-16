# MooSkin UI - Check List Item Component

___

### Usage

To start using the Check List Item Component first you have to Import it

```
Import {CheckListItem} from 'mooskin';
```
or
```
import CheckListItem from 'mooskin/lib/Button';
```

And then you can simply start using it by typing

```
<CheckListItem attribute1="atr" attribute2="asd" />
```

The Component will accept given attributes and render differently based on the given attributes

### Examples


Making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<CheckListItem title="Do this" text="this has to be done" />
```

or pass it a function for event handling

```
<CheckListItem onClick={yourFunc} />
```

or just give it a custom style

```
<CheckListItem style={yourStyle} />
```

## Supported attributes

* `id` - id of the element
* `className` - css class
* `status` - status of the check list item (active/nonactive, done/undone)
* `title` - Check list item title
* `text` - Check list item text
* `style` - button style
* `onClick` - callback to be triggered on button click

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)