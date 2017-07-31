# MooSkin UI - Doughnut Chart Component

The MooSkin Doughnut Chart Component is a simple round chart, typical doughnut looking, with pre-defined styling and attributes.

___

### Usage

To start using the Chart Component first you have to Import it

```
Import {Doughnut} from 'mooskin';
```
or
```
import Doughnut from 'mooskin/lib/Doughnut';
```

And then you can simply start using it by typing

```
<Doughnut data={data} />
```

The element will accept given attributes and render differently based on the given attributes

### Examples


There is a main/required prop for the Doughnut Chart, which is `data`,. `data` attribute reflects the data to be charted, and it should be an array of objects with the following properties: `label (string)`, used to label that object on the chart, `value (number or number string)` reflects the charted data and `background (string)` which is to determine the background color of that perticular object.

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

<Doughnut data={data} />
```

You can also give it custom doughnut spacing

```
<Doughnut data={...} doughnutSpace={30} />    // default is 50, more space means a thinner doughnut
```

give it a title and set its position

```
<Doughnut data={...} title="Subscribers" titlePos="bottom"/>    // top is default
```

or customize chart legend

```
<Doughnut data={...} legendColor="cyan" legendSize={15} legendPos="right" />
<Doughnut data={...} noLegend />    // this will render the chart only without legend
```

or give it a custom size and border width between data

```
<Doughnut data={...} size={300} borderWidth={3} />    // default borderWidth is 0
```

<div class="playground-doc">


## Supported attributes  {playground-docs}

* `data` - accepts an array of objects
* `doughnutSpace` - adjust doughnut width
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
* `borderWidth` - border width
* `size` - Chart size
* `maintainAspectRatio` - maintains aspect ratio

Only `data` is required, other attributes are optional and mostly for styling.

</div>

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)

### Thanks

[React ChartJS 2](https://github.com/gor181/react-chartjs-2)