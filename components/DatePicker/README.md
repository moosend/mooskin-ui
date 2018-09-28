# MooSkin UI - DatePicker Component

The MooSkin DatePicker Component works similar to the normal HTML `<input type="date"/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the DatePicker Component first you have to Import it

```
Import {DatePicker} from 'mooskin';
```
or modular import
```
// JS
import DatePicker from 'mooskin/lib/DatePicker';

// CSS
import 'mooskin/lib/DatePicker/style.css';
```


And then you can simply start using it by typing

```
<DatePicker />
```

Like the `<input type="date"/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the date attribute, which requires [MomentJS](https://momentjs.com/).

```
import moment from 'moment';

<DatePicker date={moment()} />
```

or making it disabled with a label, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<DatePicker label="Start date" disabled />
```

or pass it a function for event handling

```
<DatePicker onChange={yourFunc} />
```

or just give it a custom style

```
<DatePicker style={yourStyle} />
```

### Callback

The DatePicker Component Callback will always return a [MomentJS](https://momentjs.com/) object on each change. This can be used with a function passed via the `onChange` prop. For example, if u want to console log the callback value, pass a function to the `onChange` prop.

```
const logValue = (data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value._d);
};

<DatePicker onChange={logValue} />
```
In this case on each input change, the date string will be returned.

This can be used in various situations and combinations, for an enhanced development experience.

### Validation

The Datepicker Component can be validated using the `status` and `validate` props. The `status` prop will accept an 'error' or 'success' string to apply the appropriate classes to the datepicker, or none for that matter. The `validate` prop is the validation function which accepts a arg of an object containing `value`, `dataLabel` and `required` props of the component as properties, and depending on the received value, you can use any kind of validation you like. The `description` prop can also be used in the process to inform the user about validation errors. The validation will fire the first time onBlur, and every other time onChange.

#### Example

```
this.state = {
    status: '',
    message: '',
    date: ''
}

<DatePicker
    file={this.state.file}
    validate={this.validate}
    status={this.state.status}
    description={this.state.message}
    onChange={this.onChange}
/>

onChange(e, data) {
    this.setState({date: data.value})
}

validate(data){
    if (data.value < moment()>){
        this.setState({status: 'error', message: 'You selected a past Date'});
    } else {
        this.setState({status: '', message: ''})
    }
}
```

### Alternate selection of time

The `DateSelect` Component provides a different way of selecting minutes/hours/days/weekdays/month days from a select field based on the passed down props. The following example shows the selection of hours depending on the time format (24 hours/12 hours)

#### Example

```
<DateSelect onChange={this.onChange} format="24-Hour" value={17} type="hour" label="Hour (24H)" />

onChange(data){
    console.log(data.value);
}
```

This will render a Mooskin Select component with 24 options, one for each hour. It is in 24-Hours format so the first Option will be of the value 00, the last one will be 23.

```
<DateSelect onChange={this.onChange} format="12-Hour" type="hour" label="Hour (12H)" />

onChange(data){
    console.log(data.value);
}
```

This renders a Select component with 24 options, the twelve first options will be of the AM time, starting from 00 to 11, followed by PM time of the same options.

The days of the month Select will render as in the following example:

```
<DateSelect onChange={this.onChange} format="1" type="day" label="Day" />

onChange(data){
    console.log(data.value);
}
```

Now in this case, the component will render a Select with 31 Options, where `format` reflects the day of the month, in this case `1` for January, hence 31 options. If in the case of passing down the `format` option with `2` (February), the Select will render with 28 options, the first being `1st` with a value of 1, and the last being the `28th` with the value of 28.

#### Callback

The callback works the same as with the DatePicker component, where it returns a `data` object consisting of `value` & `dataLabel` of the component. The value will always be returned as a number. For example: on the 24-Hours format of the hours component type, when selecting `01`, will return 1 as a callback value, selecting `22` will return 22. On the 12-Hours format, selecting `02 AM` will return 2, selecting `01 PM` will return 13 and so on. On the weekly type, selecting 'Tuesday' will return 2, on the `ordinal` type, selecting `First` will return 1, selecting `Last` will return 01.

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `date` - selected date (MomentJS object)
* `format` - format the date differently. See [format](https://momentjs.com/docs/#/parsing/string-format/) types
* `label` - datepicker label
* `dateOnly` - datepicker with date only
* `disabled` - input field should be disabled
* `required` - input field is required
* `className` - css class
* `dataLabel` - label what kind of data
* `nowButton` - adds a button that selects current date when clicked
* `style` - input field style
* `onChange` - callback to be triggered on input change

## DateSelect attributes

* `id` - id of the element
* `format` - formats the select options, example `12-Hour` or `24-Hour` for `hour` type. Or `1...12` for rendering day options for a month in `month` type
* `type` - 'hour' | 'minute' | 'month' | 'week' | 'ordinal'
* `label` - datepicker label
* `value` - selected value
* `labelTop` - positions the label on the top
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - input field style
* `onChange` - callback to be triggered on input change

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)