# MooSkin UI - Topbar Component

The Mooskin Topbar Component is a simple component fixed to the top of the page with any children.

___

### Usage

To start using the Topbar Component first you have to Import it

```
Import {Topbar} from 'mooskin';
```
or modular import
```
// JS
import Topbar from 'mooskin/lib/Topbar';

// CSS
import 'mooskin/lib/Topbar/style.css';
```

And then you can simply start using it by typing

```
<Topbar attribute1="atr" attribute2="asd" >Children</Topbar>
```

The Topbar component will accept given attributes and render differently based on the given attributes

### Examples

Give it a custom style

```
<Topbar style={yourStyle} >Children</Topbar>
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `className` - css class
* `style` - Topbar style

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)