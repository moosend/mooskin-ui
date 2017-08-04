# MooSkin UI - SideBar Component

The MooSkin SideBar Component is a simple sidebar, but with pre-defined styling and attributes.

### Usage

To start using the SideBar Component first you have to Import it

```
Import {SideBar} from 'mooskin';
```

And then you can simply start using it by typing

```
<SideBar display>
    ...Whatever...
</SideBar>
```

The `SideBar` component accepts `Item` Components as children.

```
Import {Item, SideBar} from 'mooskin';

<SideBar>
    <Item />
</SideBar>
```

The SideBar `display` prop is the most important one. It can be linked to a state with which the sidebar can be toggled by changing that state value. 

For the SideBar to be displayed, the display prop must be passed, which is a boolean value.
```
<SideBar display />
```
this is a static SideBar, or
```
this.state = {
    sidebar: false
}

<SideBar display={this.state.display}>
```

In this case the SideBar is hidden and wont be displayed until the state changes. For easier toggling, the `button` prop can be passed, which "spawns" a button on the exact location in the DOM where the SideBar tag is located. The sidebar `onClick` prop accepts a function which will be called when the SideBar button is clicked.

```
this.state = {
    sidebar: false
}

<SideBar display={this.state.display} onClick={this.onButtonClick} button>

private onButtonClick = () => {
    this.setState({sidebar: true});
}
```
This way the SideBar will be displayed if the button is clicked. The SideBar can be hidden by clicking anywhere on the page, but the SideBar.

Time to fill the SideBar with Items.

```
<SideBar>
    <Item image="imagePath" label="Item Label"/>
</SideBar>
```

### Multiple SideBar usage

Items can accept other SideBar's as children. Secondary SideBars can be toggled using the SideBar display prop and toggle it by using the `onClick`, `onMouseEnter` and `onMouseLeave` props of the Item. For the secondary SideBars to appear correctly a margin must be passed by the `style` prop so it doesnt overshadow the parent SideBar. For example:

```
this.state = {
    secondarySidebar: false
}

<SideBar
    display
    onClick={this.onButtonClick}
>
    <Item
        label="Automation"
        onClick={this.toggleSecondary}
    >
        <SideBar display={this.state.secondarySideBar} style={{marginLeft: 100}}>
            <Item />
        </SideBar>
    </Item>
</SideBar>

private toggleSecondary = () => {
    this.setState({secondarySidebar: !this.state.secondarySidebar});
}
```

As you can see the main SideBar is a static one, doesnt have a button, isn't linked to a state. On the other hand the secondary SideBar is linked to a state and its currently hidden. We passed an onClick function to the parent Item of the secondary Sidebar, so when the Item is clicked, the secondary SideBar will appear. Also notice the margin that we passed to the second SideBar, so it appears next the the primary SideBar.

Another smoother experience is by using the `onMouseEnter` and `onMouseLeave` props. Lets take the same example as above, but in this case we dont pass the `onClick` function to the Item.

```

<Item
    label="Automation"
    onMouseEnter={this.toggleSecondary}
    onMouseLeave={this.toggleSecondary}
>

private toggleSecondary = () => {
    this.setState({secondarySidebar: !this.state.secondarySidebar});
}
```
Now the secondary SideBar appears when the Item is hovered, this way an href can be used on the Item or pass it an onClick function to do something else.

<div class="playground-doc">

## Supported attributes for SideBar 

* `display` - mandatory, for the sidebar to be displayed. Or linked to a state to toggle SideBar
* `button` - Displays a button on the location of the SideBar in the DOM
* `className` - custom classes
* `style` - or additional styles
* `onClick` - a function which will be called when the SideBar Button is clicked

## Supported attributes for Item

* `href` - simple href when the Item is clicked
* `label` - label below the Item
* `image` - image covering the main body of the Item
* `onClick` - function that is called when the Item is clicked
* `onMouseEnter` - function call when mouse enters the Item
* `onMouseLeave` - function call when mouse leaves the Item
* `className` - add additional classes to the SideBar
* `style` - or additional styles

</div>

Allthough these attributes are supported, only `display` for SideBar and `label` for Item are mandatory.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
