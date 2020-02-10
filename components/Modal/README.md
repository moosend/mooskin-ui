# MooSkin UI - Modal Component

___

### Usage

To start using the Modal Component first you have to Import it

```
Import {Modal} from '@moosend/mooskin';
```
or modular import
```
// JS
import Modal from '@moosend/mooskin/lib/Modal';

// CSS
import '@moosend/mooskin/lib/Modal/style.css';
```


And then you can simply start using it by typing

```
<Modal active>
    <whatever/>....
</Modal>
```

Anything can go inside the Modal component.

### Examples

Give it a class 

```
<Modal className={myStyle} />
```

or just give it a custom style

```
<Modal style={yourStyle} />
```

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `active` - wether the modal is active or not.
* `title` - adds a header to the modal.
* `onClickCover` - callback function when the cover behind the modal is clicked, can be used to toggle the modal off.
* `onClickclose` - callback function when the close icon is clicked, can be used to toggle the modal off.
* `className` - css class
* `style` - Modal style

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)