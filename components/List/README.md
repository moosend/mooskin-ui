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
    <ListItem image="imageUrl"/>
    <ListItem title="Some Title"/>
    <ListItem title="Another title" description="Item description" />
</List>
```

### ExpandedSection content

A list item can have an expandable hidden content which will reveal on list item click, example:

```
Import {List, ListItem, ItemContent, ExpandedSection} from 'mooskin';

<List attribute1="atr" attribute2="asd" >
    <ListItem>
        <ItemContent>
            content 1
        <ItemContent/>
        <ExpandedSection>
            expandable content 1
        <ExpandedSection/>
    </ListItem>
    <ListItem>
        <ItemContent>
            content 2
        <ItemContent/>
        <ExpandedSection>
            expandable content 2
        <ExpandedSection/>
    </ListItem>
    <ListItem>
        <ItemContent>
            content 3
        <ItemContent/>
        <ExpandedSection>
            expandable content 3
        <ExpandedSection/>
    </ListItem>
</List>
```

<div class="playground-doc">

## Supported List attributes

* `id` - id of the element
* `style` - listitem style
* `className` - css class

## Supported ListItem attributes

* `image` - image related to the list item
* `title` - list item title
* `description` - list item description
* `className` - css class
* `style` - listitem style

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)