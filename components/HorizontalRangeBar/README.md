# MooSkin UI - HorizontalRangeBar Component

___

### Usage

To start using the HorizontalRangeBar Component first you have to Import it

```
Import {HorizontalRangeBar} from '@moosend/mooskin';
```
or modular import
```
// JS
import HorizontalRangeBar from '@moosend/mooskin/lib/HorizontalRangeBar';

// CSS
import '@moosend/mooskin/lib/HorizontalRangeBar/style.css';
```

And then you can simply start using it by typing

```
<HorizontalRangeBar progress={20} attribute2="asd" />
```

### Examples


It must have an attribute called 'progress' which determines the width of the bar

```
<HorizontalRangeBar progress={24}/>
```

it must have an optional range determining between what numbers must the progress be and to calculate the percentage accordingly, by default it is 0 - 100, percentage in the bar is calculated correctly no matter the range.

```
<HorizontalRangeBar progress={24} range={[0, 1000]}/>
```

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `className` - css class
* `progress` - current progress where of the bar
* `range` - a tuple for the range
* `background` - background color
* `style` - adds styles to the main element
* `fallbackColor` - fallback color for horizontal range bar, when text exceeds bar width, to prevent text blending in the same background color 

</div>

Allthough these attributes are supported, only 'progress' is required.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)