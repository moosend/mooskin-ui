# MooSkin UI - HorizontalRangeBar Component

___

### Usage

To start using the HorizontalRangeBar Component first you have to Import it

```
Import {HorizontalRangeBar} from 'mooskin';
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

## Supported attributes

* `id` - id of the element
* `className` - css class
* `progress` - current progress where of the bar
* `range` - a tuple for the range
* `background` - background color

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)