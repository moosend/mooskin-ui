# MooSkin UI - Select Component

The MooSkin Select component works similar to the normal HTML <Select/> element, but with pre-defined styling and attributes.

___

### Usage

To start using the Select component first you have to Import it and the Option component

```
Import {Select, Option} from 'mooskin';
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

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the <select/> element it will accept given attributes and render differently based on the given attributes

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

## Supported attributes for Select

* `id` - id of the element
* `dataLabel` -(required) label what kind of data 
* `onChange` - callback that is fired when you click on one of the options
* `selected` - selected value, has to correspond to one of the Option values
* `value` - text value of input
* `placeholder` - backtext description of input
* `className` - css class
* `style` - input field style

## Supported attributes for Option

* `value` - value for the option

Attributes with (required) are required, the rest are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)