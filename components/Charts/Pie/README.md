# MooSkin UI - Chart (Pie/Doughnut) Component

The MooSkin Chart Component is a simple round chart, be it a Pie or a Doughnut depending on given prop, with pre-defined styling and attributes.

___

### Usage

To start using the Chart Component first you have to Import it

```
Import {Chart} from 'mooskin';
```
or
```
import Chart from 'mooskin/lib/Chart';
```

And then you can simply start using it by typing

```
<Chart data={data} labels={labels} />
```

The element will accept given attributes and render differently based on the given attributes

### Examples


There are two main/required props for the Chart, `data` and `labels`. `data` attribute reflects the data to be charted, `labels` as you may have guessed is for labeling the charted data.

```
const data = [50, 20];
const labels = ['Exp', 'Gold'];
<Chart data={data} labels={labels} />
```

The Chart by default will render as a Pie Chart, but given the `doughnut` attribute it will render with a center space. You can define the space radius by given a value (1 to 99) to the attribute, or just leave it with the default value.

```
<Chart data={...} labels={...} doughnut />
<Chart data={...} labels={...} doughnut={25} />   // with custom space, a thicker doughnut for example for those who are hungry.
```

give it a title and set its position

```
<Chart data={...} labels={...} title="Subscribers" titlePos="bottom"/>    // top is default
```

or customize chart legend

```
<Chart data={...} labels={...} legendColor="cyan" legendSize={15} legendPos="right" />
<Chart data={...} labels={...} noLegend />    // this will render the chart only without legend
```

or give it a custom size and spacing between data

```
<Chart data={...} labels={...} size={300} spacing={3} />    // default spacing is 0
```


## Supported attributes

* `data` - accepts an array of data
* `labels` - accepts and array of strings
* `id` - id of the element
* `doughnut` - pie or doughnut?
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
* `backgroundColors` - accepts and array of colors for the chart

Only `data` and `labels` are required, other attributes are optional and mostly for styling.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)

### Thanks

[React ChartJS 2](https://github.com/gor181/react-chartjs-2)