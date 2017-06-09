# MooSkin UI - Small Icon Button Component

The MooSkin Small Icon Button Component works similar to the normal HTML `<button/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Small Icon Button Component first you have to Import it

```
Import {SmallIconButton} from 'mooskin';
```
or
```
import SmallIconButton from 'mooskin/lib/SmallIconButton';
```

And then you can simply start using it by typing

```
<SmallIconButton attribute1="atr" attribute2="asd" />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<button/>` element it will accept given attributes and render differently based on the given attributes

### Examples


Making it disabled with a value, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<SmallIconButton value="This one is disabled" disabled />
```

or pass it a function for event handling

```
<SmallIconButton onClick={yourFunc} />
```

or just give it a custom style

```
<SmallIconButton style={yourStyle} />
```

but the most important one is to give it an icon

```
<SmallIconButton icon={'search'} />
```

give it an inverse style where only the icon is visible

```
<SmallIconButton inverseStyle />
```

## Supported attributes

* `id` - id of the element
* `icon` - icon for the button
* `disabled` - button should be disabled
* `className` - css class
* `inverseStyle` - a style variaton of the button 
* `style` - button style
* `onClick` - callback to be triggered on button click

Allthough these attributes are supported, all of them are optional.

## Supported icons (so far)

* `search`
* `add`
* `add box`
* `add circle`
* `add outline`
* `remove`
* `remove circle`
* `remove outline`
* `close`
* `star`
* `account`
* `build`
* `alarm`
* `alarm add`
* `alarm off`
* `alarm on`
* `done`
* `favorite`
* `home`
* `power`
* `settings`
* `verified`
* `visibility`
* `visibility off`
* `alert`
* `loop`
* `play`
* `pause`
* `stop`
* `contacts`
* `email`
* `mail outline`
* `forum`
* `message`
* `create`
* `block`
* `send`
* `download`
* `upload`
* `down`
* `up`
* `left`
* `right`
* `edit`
* `dropdown`
* `dropup`
* `check`
* `refresh`
* `sync`
* `group`
* `group add`
* `person`
* `person add`
* `notifications`
* `notifications active`
* `notifications none`
* `notifications off`
* `notifications paused`
* `check box`
* `indeterminate check box`
* `check box off`
* `radio checked`
* `radio unchecked`

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)