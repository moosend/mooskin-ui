# MooSkin UI - Check List Item Component

___

### Usage

To start using the Check List Item Component first you have to Import it

```
Import {CheckListItem} from 'mooskin';
```
or modular import
```
// JS
import CheckListItem from 'mooskin/lib/CheckListItem';

// CSS
import 'mooskin/lib/CheckListItem/style.css';
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

### Callback

The CheckListItem Component Callback will always return the boolean value of the CheckListItem when it changes. This can be used with a function passed via the `onClick` prop. For example, if u want to fire a function if the Switch is turned on (oh yea), pass a function to the `onClick` prop.

```
const onCheck = (e, data) => {      // data is the callback object, which consists of value and a dataLabel(not required)
    if(data.value){                 // this can be either true or false, so if the CheckListItem checked(done) or not
        // do something
    }      
};

<CheckListItem onClick={onCheck} />
```
In this case the statement block will get fired if the CheckListItem is checked(done).

This can be used in various situations and combinations, for an enhanced development experience.

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `className` - css class
* `status` - status of the check list item (active/nonactive, done/undone)
* `title` - Check list item title
* `text` - Check list item text
* `style` - button style
* `onClick` - callback to be triggered on button click

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)