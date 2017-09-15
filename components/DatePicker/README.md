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

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `date` - selected date
* `format` - format the date differently. See [format](https://momentjs.com/docs/#/parsing/string-format/) types
* `label` - datepicker label
* `disabled` - input field should be disabled
* `required` - input field is required
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - input field style
* `onChange` - callback to be triggered on input change

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)