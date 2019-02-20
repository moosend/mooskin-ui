# MooSkin UI - Slider Component

The MooSkin Slider Component works similar to the normal HTML `<input type="range"/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Slider Component first you have to Import it

```
Import {Slider} from '@moosend/mooskin';
```
or modular import
```
// JS
import Slider from '@moosend/mooskin/lib/Slider';

// CSS
import '@moosend/mooskin/lib/Slider/style.css';
```

And then you can simply start using it by typing

```
<Slider value={4} range={[0, 10]} />
```

### Examples

Slider component should be controlled by state and callbacks like below

```
this.state = {
    value: 34
}

<Slider
    label="Slider"
    onChange={this.onChange}
    values={['hello', 34, 'MOO!!', 98]}
    value={this.state.value}
    trackLabels
    tooltip
/>

onChange(e, data){
    this.setState({value: data.value});
}
```

Making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<Slider disabled />
```

or pass it a function for event handling

```
<Slider onChange={yourFunc} />
```

or just give it a custom style

```
<Slider style={yourStyle} />
```

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `disabled` - Slider should be disabled
* `className` - css class
* `style` - Slider style
* `label` - Slider label
* `trackLabels` - adds value labels to the Slider track
* `tooltip` - adds tooltip when dragging slider, showing the current value
* `value` - current value of the slider
* `range` - range of the slider, an array from and to, ex [0, 100]
* `values` - custom values to be available to the Slider, ex [34, 'Moo', 50]
* `dataLabel` - data label for component to be used within forms
* `onChange` - callback to be triggered when Slider changes, returning new value

# AB Slider

* `id` - id of the element
* `dataLabel` - what data is being used
* `value` - current value of the slider
* `percentage` - current percentage for an AB section
* `count` - count number to be split into section per percentage
* `max` - max number of percentage for a AB section (default: 40)
* `min` - min number of percentage for a AB section (default: 5)
* `style` - Slider style
* `className` - css class
* `onChange` - (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

</div>

Allthough these attributes are supported, all of them are optional.


#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)