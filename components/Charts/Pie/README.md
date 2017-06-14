# MooSkin UI - Chart Component

The MooSkin Pie Chart Component is a simple round chart, typical pie looking, with pre-defined styling and attributes.

___

### Usage

To start using the Chart Component first you have to Import it

```
Import {Pie} from 'mooskin';
```
or
```
import Pie from 'mooskin/lib/Pie';
```

And then you can simply start using it by typing

```
<Pie data={data} />
```

The element will accept given attributes and render differently based on the given attributes

### Examples


There is a main/required prop for the Pie Chart, which is `data`,. `data` attribute reflects the data to be charted, and it should be an array of objects with the following properties: `label (string)`, used to label that object on the chart, `value (number or number string)` reflects the charted data and `background (string)` which is to determine the background color of that perticular object.

```
const data = [
    {
        label: 'Aragorn',
        value: 100,
        background: 'brown'
    },
    {
        label: 'Gandalf',
        value: '4000',
        background: 'white'
    }
];

<Pie data={data} />
```

give it a title and set its position

```
<Pie data={...} title="Subscribers" titlePos="bottom"/>    // top is default
```

or customize chart legend

```
<Pie data={...} legendColor="cyan" legendSize={15} legendPos="right" />
<Pie data={...} noLegend />    // this will render the chart only without legend
```

or give it a custom size and spacing between data

```
<Pie data={...} size={300} spacing={3} />    // default spacing is 0
```


## Supported attributes

* `data` - accepts an array of objects
* `id` - id of the element
* `title` - Chart title
* `titlePos` - Chart title position
* `titleSize` - Chart title size
* `titleStyle` - Chart title style (eg. bold, italic)
* `titleFont` - Chart title font family
* `titleColor` - Chart title font color
* `legendPos` - Chart legend position
* `boxWidth` - width of the colored box 
* `legendStyle` - Chart legend font style
* `legendFont` - Chart legend font family
* `legendSize` - Chart legend font size
* `legendColor` - Chart legend font color
* `noLegend` - hide chart legend
* `spacing` - border width
* `size` - Chart size

Only `data` is required, other attributes are optional and mostly for styling.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)

### Thanks

[React ChartJS 2](https://github.com/gor181/react-chartjs-2)