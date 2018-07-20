# MooSkin UI - Pagination Component

___

### Usage

To start using the Pagination Component first you have to Import it

```
Import {Pagination} from 'mooskin';
```
or modular import
```
// JS
import Pagination from 'mooskin/lib/Pagination';

// CSS
import 'mooskin/lib/Pagination/style.css';
```

And then you can simply start using it by typing

```
<Pagination attribute1="atr" attribute2="asd" />
```

### Examples


Adding prev and next buttons

```
<Pagination items={5} prevBtn nextBtn />
```

or pass it a callback for event handling when a user clicks on a button

```
<Pagination items={20} onClick={yourFunc} />
```

or just give it a custom style

```
<Pagination items={20} style={yourStyle} />
```

<div class="playground-doc">

## Supported attributes

* `items` - (required) number of pages to be paginated
* `currentItem` - (required) indicates the current page, defaults to 1
* `maxButtons` - indicates the max number of buttons to be dispayed, defaults to 5 
* `nextBtn` - boolean, whether to show the 'next' button, defaults to false
* `prevBtn` - boolean, whether to show the 'prev' button, defaults to false
* `firstBtn` - boolean, whether to show the 'navigate to first' button, defaults to false
* `lastBtn` - boolean, whether to show the 'navigate to last' button, defaults to false
* `onClick` - callback to be triggered on button click, takes item number as an argument
* `id` - main element id
* `inverseStyle` - inverse stying for pagination
* `className` - main element css class
* `style` - main element style

</div>

Allthough these attributes are supported, most of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)