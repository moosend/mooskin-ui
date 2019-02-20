# MooSkin UI - Line Chart Component

The MooSkin Line Chart Component is a simple Line chart, typical chart with Lines, with pre-defined styling and attributes.

___

### Usage

To start using the Line Chart Component first you have to Import it

```
Import {Line} from '@moosend/mooskin';
```
or
```
import Line from '@moosend/mooskin/lib/Line';
```

And then you can simply start using it by typing

```
<Line data={data} />
```

The element will accept given attributes and render differently based on the given attributes

### Examples


There is a main/required prop for the Pie Chart, which is `data`. `data` attribute reflects the data to be charted, and it should be an array of objects with the following properties: `dataLabel (string)` , used for labeling/identifying what kind of data is being chartet (ex. sales per month)., and `dataset []`, which is an array of objets consisting of the following properties: `label (string)`, used to label the value of data fragment, and `value (number[] or number strings like ['1', '3'])` reflects the charted data value. For example:

```
const data = [
    {
        dataLabel: 'Emails per month',
        dataset: [
            {
                label: 'January',
                value: 70,
            },
            {
                label: 'February',
                value: '11'
            },
            {
                label: 'March',
                value: 65
            }
        ]
    }
]


<Line data={data} />
```
or with multiple pairs of data
```
const data = [
    {
        dataLabel: 'Emails per month',
        dataset: [
            {
                label: 'January',
                value: 70,
            },
            {
                label: 'February',
                value: '11'
            },
            {
                label: 'March',
                value: 65
            }
        ]
    },
    {
        dataLabel: 'Opens per month',
        dataset: [
            {
                label: 'January',
                value: 33,
            },
            {
                label: 'February',
                value: '11'
            },
            {
                label: 'March',
                value: 48
            }
        ]
    }
]


<Line data={data} />
```

You can aslo give it a title and set its position

```
<Line data={...} title="Subscribers" titlePos="top"/>    // top is default
```

remove lines and customize chart legend

```
<Line data={...} noLines legendColor="cyan" legendSize={15} legendPos="right" />
```

give it a custom Line width, point radius or point style

```
<Line data={...} borderWidth={3} pointRadius={5} pointStyle="rect" />    // default borderWidth is 2, pointStyle is circle
```

custom height and width and fill the area below the line
```
<Line data={...} height={300} width={400} fill />
```

<div class="playground-doc">

## Supported attributes  {playground-docs}

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
* `borderWidth` - line width
* `height` - Chart height
* `width` - Chart width
* `gridlinesX` - toggle X axis grid lines
* `gridlinesY` - toggle Y axis grid lines
* `minValue` - min value of the Y axis
* `borderColor` - Line color
* `maintainAspectRatio` - maintains aspect ratio
* `backgroundColor` - an array of colors can be sent, to change the line colors
* `borderDash` - an array of numbers to render the line with dashes
* `lineTension` - curvy or straight line, number between 0 to 0.5
* `pointRadius` - radius of data points in the line
* `maintainAspectRatio` - style of the point. [Point styles](http://www.chartjs.org/docs/latest/charts/line.html#pointstyle)
* `noLine` - remove line between points
* `steppedLine` - make the line stepped
* `fill` - fill area below the line


Only `data` is required, other attributes are optional and mostly for styling.

</div>

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)

### Thanks

[React ChartJS 2](https://github.com/gor181/react-chartjs-2)