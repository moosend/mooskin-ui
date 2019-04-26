# MooSkin UI - DateRange Component

The MooSkin DateRange Component works similar to the DatePicker component, except it uses a value for start and a value for end date.

___

### Usage

To start using the DateRange Component first you have to Import it

```
Import {DateRange} from '@moosend/mooskin';
```
or modular import
```
// JS
import DateRange from '@moosend/mooskin/lib/DateRange';

// CSS
import '@moosend/mooskin/lib/DateRange/style.css';
```


And then you can simply start using it by typing

```
<DateRange />
```

Like any html element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the date attribute, which requires [MomentJS](https://momentjs.com/).

```
import moment from 'moment';

<DateRange date={{start: moment(), end: moment.add(1, 'days')}} />
```

or making it disabled with a label, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<DateRange label="Start date" disabled />
```

or pass it a function for event handling

```
<DateRange onChange={yourFunc} />
```

or just give it a custom style

```
<DateRange style={yourStyle} />
```

### Callback

The DateRange Component Callback will always return an object consisting of `start` & `end` properties which are [MomentJS](https://momentjs.com/) objects, on each change. This can be used with a function passed via the `onChange` prop. For example, if u want to console log the callback value, pass a function to the `onChange` prop.

```
const logValue = (data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value._d);
};

<DateRange onChange={logValue} />
```
In this case on each input change, the date string will be returned.

This can be used in various situations and combinations, for an enhanced development experience.

### Pre-defined ranges

DateRange component utilizes a select component, which includes a pre defined date ranges, like this week, last month, this quarter to date, last 14 days, etc.

Custom pre defined ranges can be added as select options using the `customOptions` prop which is an array consisting of objects like:
```
{
    label: 'This week to date',
    setDate: {
        end: moment(),
        start: moment().startOf('isoWeek')
    },
    value: 'this-week-to-date'
}
```
Label and value have obvious uses within the Select component, however the object requires a `setDate` property for the date change/set to take effect, it should consist of `start` and `end` properties, which should return MomentJS objects.

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `date` - selected date object with `start` and `end` properties (MomentJS objects)
* `format` - format the date differently. See [format](https://momentjs.com/docs/#/parsing/string-format/) types
* `label` - datepicker label
* `disabled` - input field should be disabled
* `className` - css class
* `dataLabel` - label what kind of data
* `customOptions` - custom options for select
* `style` - input field style
* `onChange` - callback to be triggered on input change

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)