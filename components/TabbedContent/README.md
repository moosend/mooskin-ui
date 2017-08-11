# MooSkin UI - TabbedContent Component

The MooSkin TabbedContent Component is like a tabbed window, with as many tabs as you like.

___

### Usage

To start using the TabbedContent Component first you have to Import its two main components

```
Import {TabbedContent, Tab, Content, Header} from 'mooskin';
```
or
```
import TabbedContent, {Tab, Content, Header} from 'mooskin/lib/TabbedContent';
```

And then you can simply start using it by typing

```
<TabbedContent>
    <Tab>
        <Header>Moosend</Header>
        <Content>Table</Content>
    </Tab>
    <Tab active>
        <Header>Home</Header>
        <Content>Some Content</Content>
    </Tab>
    <Tab>
        <Header>About</Header>
        <Content>Blla blla</Content>
    </Tab>
</TabbedContent>
```

Many props can be passed to individual components which will render them differently depending on the passed props. This can be from custom classes or styles, to more advanced props like header aligning or other types of TabbedContent.

### Examples


```
<TabbedContent>
    <Tab>
        <Header>Moosend</Header>
        <Content>Table</Content>
    </Tab>
    <Tab active>
        <Header>Home</Header>
        <Content>Some Content</Content>
    </Tab>
    <Tab>
        <Header>About</Header>
        <Content>Blla blla</Content>
    </Tab>
</TabbedContent>
```

Can be used without importing the Tab component with shorthand dot(.) notation.

```
Import {TabbedContent} from 'mooskin';

<TabbedContent>
    <TabbedContent.Tab>
        <TabbedContent.Header>Moosend</Header>
        <TabbedContent.Content>Table</Content>
    </TabbedContent.Tab>
    <TabbedContent.Tab active>
        <TabbedContent.Header>Home</Header>
        <TabbedContent.Content>Some Content</Content>
    </TabbedContent.Tab>
    <TabbedContent.Tab>
        <TabbedContent.Header>About</Header>
        <TabbedContent.Content>Blla blla</Content>
    </TabbedContent.Tab>>
</TabbedContent.TabbedContent>
```

The type component will alter the styles of the TabbedContent, like a radio styled component. Also if u want headers to appear vertically with the content on the right, there is the `vertical` prop.

```
<TabbedContent type="radio" vertical >
    <Tab>
        <Header>Moosend</Header>
        <Content>Table</Content>
    </Tab>
    <Tab active>
        <Header>Home</Header>
        <Content>Some Content</Content>
    </Tab>
    <Tab>
        <Header>About</Header>
        <Content>Blla blla</Content>
    </Tab>
</TabbedContent>
```

<div class="playground-doc">

## Supported attributes for TabbedContent

* `id` - id of the element
* `vertical` - tab headers will be aligned vertically, content on the right
* `type` - renders a different tabbed content based on the passed value, for now only `radio` is supported.
* `alignHeaders` - align tab headers to the left/center/right or top/center/bottom for vertical
* `className` - css class
* `style` - extra styles for the main container

## Supported attributes for Tab 

* `active` - sets which tab is active, the first is active by default
* `title` - (required) sets the title for the tab
* `className` - css class
* `style` -  extra styles 

## Supported attributes for Header 

* `width` - width of the header, mostly used when alignHeaders is used
* `className` - css class
* `style` -  extra styles 
* `onClick` - onClick callback function when the header is clicked

## Supported attributes for Content 

* `className` - css class
* `style` -  extra styles 

</div>

Allthough these attributes are supported, most of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)