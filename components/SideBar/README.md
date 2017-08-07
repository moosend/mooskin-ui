# MooSkin UI - SideBar Component

The MooSkin SideBar Component is a simple sidebar, but with pre-defined styling and attributes.

### Usage

To start using the SideBar Component first you have to Import it

```
Import {SideBar} from 'mooskin';
```

And then you can simply start using it by typing

```
<SideBar>
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

A SideBar can be toggleable or static, this is decided by passing the `button` prop, which "spawns" a button on the exact location in the DOM where the SideBar tag is located.
This way the SideBar will be displayed if the button is clicked. The SideBar can be hidden by clicking anywhere on the page, but the SideBar.

```
Import {Item, SideBar} from 'mooskin';

<SideBar>
    <Item />
</SideBar>
```

Time to fill the SideBar with Items.

### Multiple SideBar usage

Secondary SideBar is also available to be assigned to SideBar Items. For example:

```
Import {Item, SideBar, Secondary} from 'mooskin';

<SideBar
>
    <Item
        label="Automation"
        onClick={this.toggleSecondary}
    >
        <Secondary>
            <Item />
        </SideBar>
    </Item>
</SideBar>

```

As you can see the main SideBar is a static one, doesnt have a button. When an Item is hovered that has the `Secondary` child the second SideBar will appear with its children.

<div class="playground-doc">

## Supported attributes for SideBar 

* `button` - Displays a button on the location of the SideBar in the DOM
* `className` - custom classes
* `style` - or additional styles

## Supported attributes for Item

* `href` - simple href when the Item is clicked
* `label` - label below the Item
* `image` - image covering the main body of the Item
* `onClick` - function that is called when the Item is clicked
* `className` - add additional classes to the SideBar
* `style` - or additional styles

## Supported attributes for Secondary

* `className` - custom classes
* `style` - or additional styles

</div>

Allthough these attributes are supported, only `label` of te Item is mandatory.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
