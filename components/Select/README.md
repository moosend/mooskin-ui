# MooSkin UI - Select Component

The MooSkin Select component works similar to the normal HTML `<Select/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the Select component first you have to Import it and the Option component

```
Import {Select, Option} from 'mooskin';
```
or modular import
```
// JS
import Select, {Option} from 'mooskin/lib/Select';

// CSS
import 'mooskin/lib/Select/style.css';
```

And then you can simply start using it by typing

```
<Select onChange={cb} dataLabel="asd">
    <Option value="option1">Option1</Option>
    <Option value="option2">Option2</Option>
    <Option value="option3">Option3</Option>
    <Option value="option4">Option4</Option>
</Select>

```

another way of doing this is by importing `Select` only and doing a simple workaround
```
Import {Select} from 'mooskin';

<Select onChange={cb} dataLabel="asd">
    <Select.Option value="option1">Option1</Option>
    <Select.Option value="option2">Option2</Option>
    <Select.Option value="option3">Option3</Option>
    <Select.Option value="option4">Option4</Option>
</Select>
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the `<select/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the dataLabel attribute is important because when you can get back the type of data along with the value in the callback, in the below example it can be for example 'country' or 'addreses' etc, anything really. Helpful when you have muultiple Selects that have one callback, you can check the dataLabel there.

```
// handy when you want to know what type of data you are retrieveing if you have lots of Selects
const cb = (event, {dataLabel, value}) => { 
    if(dataLabel === 'addresses'){
        //do something
    }else if(dataLabel === 'countries'){
        //do something else
    }
}

<Select onChange={cb} dataLabel="label">
    <Option value="option1">Option1</Option>
    <Option value="option2">Option2</Option>
    <Option value="option3">Option3</Option>
    <Option value="option4">Option4</Option>
</Select>
```


Custom style, className or id can be given just like any other component in this library 

```
<Select style={yourStyle} id="id" className="className" >
```

### Callback

The Select Component Callback will always return the selected option value of the Select on each click. This can be used with a function passed via the `onChange` prop. For example, if u want to fire a function if a specific option has been selected, pass a function to the `onChange` prop.

```
const onSelect = (e, data) => {            // data is the callback object, which consists of value and a dataLabel(not required)
    if(data.value === 'option2'){          // it will trigger the statement block if the compared option gets selected
        // do something...
    }      
};

<Select onChange={onSelect}>
    <Option value="option1">Option1</Option>
    <Option value="option2">Option2</Option>
    <Option value="option3">Option3</Option>
    <Option value="option4">Option4</Option>
</Select>
```
In this case the statement block will get fired if the desired option is selected.

This can be used in various situations and combinations, for an enhanced development experience.

### Validation

The Input Component can be validated using the `status` and `validate` props. The `status` prop will accept an 'error' or 'success' string to apply the appropriate classes to the input, or none for that matter. The `validate` prop is the validation function which accepts a arg of an object containing `value`, `dataLabel` and `required` props of the component as properties, and depending on the received value, you can use any kind of validation you like. The `description` prop can also be used in the process to inform the user about validation errors. The validation will fire the first time onBlur, and every other time onChange.

<div class="playground-doc">

## Supported attributes for Select 

* `id` - id of the element
* `dataLabel` - label what kind of data 
* `onChange` - callback that is fired when you click on one of the options
* `selected` - selected value, has to correspond to one of the Option values
* `value` - text value of the element
* `placeholder` - backtext description of the element
* `className` - css class
* `description` - select description (small italic bottom)
* `style` - element style
* `noDuplicates` - prevent duplicate options to the Select
* `emptySelectText` - text to be shown when there are no options available
* `extraHtmlAttr` - extra html attributes applied to the input

## Supported attributes for Option 

* `value` - value for the option

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)