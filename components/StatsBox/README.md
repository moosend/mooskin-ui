# MooSkin UI - StatsBox Component

___

### Usage

To start using the StatsBox Component first you have to Import it

```
Import {StatsBox, StatsNumber, StatsResult, StatsTitle} from '@moosend/mooskin';
```
or modular import
```
// JS
import StatsBox, {StatsNumber, StatsResult, StatsTitle} from '@moosend/mooskin/lib/StatsBox';

// CSS
import '@moosend/mooskin/lib/StatsBox/style.css';
```

And then you can simply start using it by typing

```
<StatsBox>
    <StatsTitle>Title</StatsTitle>
    <StatsNumber>Some percentage or number</StatsNumber>
    <StatsResult>whatever else</StatsResult>
</StatsBox>

```

<div class="playground-doc">

## Supported attributes for StatsBox, StatsTitle, StatsNumber and StatsResult

* `className` - main element css class
* `style` - main element style

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)