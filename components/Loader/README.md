# MooSkin UI - Loader Component

The MooSkin Loader Component is a out of the box loader to be used within the Col(Grid) component for automatic hide/show content depending on the status of the Loader.

___

### Usage

To start using the Loader Component first you have to Import it

```
Import {Loader} from '@moosend/mooskin';
```
or modular import
```
// JS
import Loader from '@moosend/mooskin/lib/Loader';

// CSS
import '@moosend/mooskin/lib/Loader/style.css';
```

And then you can simply start using it by typing

```
<Loader attribute1="atr" attribute2="asd" />
```

The `<Loader/>` component accepts different props, mostly used for customization.

### Examples


Pass it a custom loader

```
<Loader loader="some loader url" />
```

or pass it a custom animation

```
<Loader animation="animation class or style" />
```
<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `active` - wether the loader is active or not (this is a mandatory prop as it is required in relation with the Col(Grid) component)
* `loader` - custom loader image
* `animation` - custom animation
* `className` - css class
* `style` - loader style

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)