# MooSkin UI - List & ListItem Component

The MooSkin List & ListItem Component works similar to the normal HTML `<ol/>`, `<ul/>`, `<li/>` elements, but with pre-defined styling and attributes.

___

### Usage

To start using the List & ListItem Component first you have to Import it

```
Import {List, ListItem, ItemContent} from 'mooskin';
```
or modular import
```
// JS
import List, {ListItem} from 'mooskin/lib/List';

// CSS
import 'mooskin/lib/List/style.css';
```

And then you can simply start using it by typing

```
<List attribute1="atr" attribute2="asd" >
    <ListItem>
        <ItemContent>
            content 1
        <ItemContent/>
    </ListItem>
    <ListItem>
        <ItemContent>
            content 2
        <ItemContent/>
    </ListItem>
    <ListItem>
        <ItemContent>
            content 3
        <ItemContent/>
    </ListItem>
</List>
```

Like normal html elements, it will accept given attributes and render differently based on the given attributes

### Examples

Give it a custom class or style

```
<List style={yourStyle} className={yourClass} >...</List>
```

or pass props to the LinkItem component

```
<List>
    <ListItem style={yourStyle} className={yourClass}>...</ListItem>
</List>
```

### ExpandedSection content

A list item can have an expandable hidden content which will reveal when the `ListItem` prop of `expanded` is true, example:

```
Import {List, ListItem, ItemContent, ExpandedSection} from 'mooskin';

<List attribute1="atr" attribute2="asd" >
    <ListItem>
        <ItemContent>
            content 1
        <ItemContent/>
        <ExpandedSection expanded={true || false}>
            expandable content 1
        <ExpandedSection/>
    </ListItem>
    <ListItem>
        <ItemContent>
            content 2
        <ItemContent/>
        <ExpandedSection expanded={true || false}>
            expandable content 2
        <ExpandedSection/>
    </ListItem>
    <ListItem expanded>
        <ItemContent>
            content 3
        <ItemContent/>
        <ExpandedSection expanded={true || false}>
            expandable content 3
        <ExpandedSection/>
    </ListItem>
</List>
```
so in the above example, the third and last list item will have the hidden section expanded, the others will have the section hidden.

<div class="playground-doc">

## Supported List attributes

* `id` - id of the element
* `style` - listitem style
* `className` - css class

## Supported ListItem attributes

* `image` - image related to the list item
* `title` - list item title
* `expanded` - expands the hidden section of the list item
* `description` - list item description
* `className` - css class
* `style` - listitem style

## Supported ListContent attributes

* `id` - id of the element
* `style` - listitem style
* `className` - css class

## Supported ExpandedSection attributes

* `id` - id of the element
* `style` - listitem style
* `className` - css class
* `expanded` - if true, displays hidden content
* `arrow` - boolean value wether to display expanded section arrow, defaults to true

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)