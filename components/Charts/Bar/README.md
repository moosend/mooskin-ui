# MooSkin UI - Bar Chart Component

The MooSkin Bar Chart Component is a simple bar chart, typical chart with bars, with pre-defined styling and attributes.

___

### Usage

To start using the Chart Component first you have to Import it

```
Import {Bar} from '@moosend/mooskin';
```
or
```
import Bar from '@moosend/mooskin/lib/Bar';
```

And then you can simply start using it by typing

```
<Bar data={data} />
```

The element will accept given attributes and render differently based on the given attributes

### Examples


There is a main/required prop for the Pie Chart, which is `data`. `data` attribute reflects the data to be charted, and it should be an array of objects with the following properties: `label (string)`, used to label that object on the chart, `value (number or number string)` reflects the charted data and `background (string)` which is to determine the background color of that perticular object.

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

<Bar data={data} />
```

You can aslo give it a title and set its position

```
<Bar data={...} title="Subscribers" titlePos="top"/>    // bottom is default
```

give it a label and customize chart legend

```
<Bar data={...} label="Magic powers" legendColor="cyan" legendSize={15} legendPos="right" />
```

give it a custom bar width, with borders and border color

```
<Bar data={...} barPercentage={0.6} borderWidth={1} borderColor="cyan" />    // default borderWidth is 0, barPercentage from 0 to 1
```

custom height and width
```
<Bar data={...} height={300} width={400} />
```

<div class="playground-doc">

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
* `label` - data label
* `legendStyle` - Chart legend font style
* `legendFont` - Chart legend font family
* `legendSize` - Chart legend font size
* `legendColor` - Chart legend font color
* `noLegend` - hide chart legend
* `borderWidth` - border width
* `height` - Chart height
* `width` - Chart width
* `gridlinesX` - toggle X axis grid lines
* `gridlinesY` - toggle Y axis grid lines
* `minValue` - min value of the Y axis
* `borderColor` - bar border color
* `barPercentage` - bar width in relation to the chart category (0 to 1)
* `maintainAspectRatio` - maintains aspect ratio
* `horizontal` - horizontal view of the chart

Only `data` is required, other attributes are optional and mostly for styling.

</div>

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)

### Thanks

[React ChartJS 2](https://github.com/gor181/react-chartjs-2)