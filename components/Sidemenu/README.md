# MooSkin UI - SideBar Component

The MooSkin SideBar Component is a simple sidebar, but with pre-defined styling and attributes.

### Usage

To start using the SideBar Component first you have to Import it

```
Import {SideBar} from '@moosend/mooskin';
```
or modular import
```
// JS
import SideBar, {SidebarItem} from '@moosend/mooskin/lib/SideBar';

// CSS
import '@moosend/mooskin/lib/SideBar/style.css';
```

And then you can simply start using it by typing

```
<SideBar>
    ...Whatever...
</SideBar>
```

The `SideBar` component accepts `SidebarItem` Components as children.

```
Import {SidebarItem, SideBar} from '@moosend/mooskin';

<SideBar>
    <SidebarItem />
</SideBar>
```

A SideBar can be toggleable or static, this is decided by passing the `button` prop, which "spawns" a button on the exact location in the DOM where the SideBar tag is located.
This way the SideBar will be displayed if the button is clicked. The SideBar can be hidden by clicking anywhere on the page, but the SideBar.

```
Import {Item, SideBar} from '@moosend/mooskin';

<SideBar>
    <Item />
</SideBar>
```

Time to fill the SideBar with Items.

### Multiple SideBar usage

Secondary SideBar is also available to be assigned to SideBar Items. For example:

```
Import {SidebarItem, SideBar} from '@moosend/mooskin';

<SideBar
>
    <SidebarItem
        label="Automation"
        onClick={this.toggleSecondary}
    >
        <SidebarItem />
    </SidebarItem>
</SideBar>

```

As you can see the main SideBar is a static one, doesnt have a button. When an SidebarItem is hovered that has the another `SidebarItem` child the second SideBar will appear with its children.

### Custom SidebarItem

Custom SidebarItems can be created by passing children to the component.

```
Import {SidebarItem, SideBar} from '@moosend/mooskin';

<SideBar>
    <SidebarItem>
        <label> this is a custom SidebarItem </label>
        and whatever else here....
    </SidebarItem>
</SideBar>

```

This also applies to SubMenu items, the same way.

<div class="playground-doc">

## Supported attributes for SideBar 

* `button` - Displays a button on the location of the SideBar in the DOM
* `className` - custom classes
* `style` - or additional styles

## Supported attributes for SidebarItem

* `label` - label below the Item
* `image` - image covering the main body of the Item
* `imageOn` - image to replace the `image` prop when the Item is active
* `subMenuStyle` - styles for the sub menu
* `subMenuClasses` - classes for the sub menu
* `subMenuFixed` - makes the subMenu for this item fixed, while the item is active. It will behave with hover on small screens (works only on fixed SideBar)
* `onClick` - function that is called when the Item is clicked
* `className` - add additional classes to the SideBar
* `style` - or additional styles

</div>

Allthough these attributes are supported, only `label` of te SidebarItem is mandatory.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
