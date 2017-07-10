# MooSkin UI - Radio Component

The MooSkin Radio component works similar to the normal HTML radio elements, but with pre-defined styling and attributes.

___

### Usage

To start using the Radio component first you have to Import RadioGroup and the Radio component

```
Import {RadioGroup, Radio} from 'mooskin';
```

And then you can simply start using it by typing

```
<RadioGroup onChange={cb} dataLabel="asd">
    <Radio id={'radio1'} value="radio1" label="This is a radio"/>
    <Radio id={'radio2'} value="radio2" label="Another radio"/>
    <Radio id={'radio3'} value="radio3" label="More radio"/>
</RadioGroup>

```

another way of doing this is by importing `RadioGroup` only and doing a simple workaround
```
Import {RadioGroup} from 'mooskin';

<RadioGroup onChange={cb} dataLabel="asd">
    <RadioGroup.Radio id={'radio1'} value="radio1" label="This is a radio"/>
    <RadioGroup.Radio id={'radio2'} value="radio2" label="Another radio"/>
    <RadioGroup.Radio id={'radio3'} value="radio3" label="More radio"/>
</RadioGroup>
```

Like the normal HTML elements, it will accept given attributes and render differently based on the given attributes

### Examples

Passing the dataLabel attribute is important because when you can get back the type of data along with the value in the callback, in the below example it can be for example 'gender' or 'status' etc, anything really. Helpful when you have muultiple RadioGroups that have one callback, you can check the dataLabel there.

```
// handy when you want to know what type of data you are retrieveing if you have lots of RadioGroups.
const cb = (event, {dataLabel, value}) => { 
    if(dataLabel === 'gender'){
        //do something
    }else if(dataLabel === 'status'){
        //do something else
    }
}

<RadioGroup onChange={cb} dataLabel="asd">
    <Radio id={'radio1'} value="radio1" label="This is a radio"/>
    <Radio id={'radio2'} value="radio2" label="Another radio"/>
    <Radio id={'radio3'} value="radio3" label="More radio"/>
</RadioGroup>
```


Custom style, className or id can be given just like any other component in this library 

```
<RadioGroup style={yourStyle} id="id" className="className" >
```

## Supported attributes for RadioGroup

* `id` - id of the element
* `dataLabel` - label what kind of data 
* `onChange` - callback that is fired when you click on one of the radios
* `selected` - selected value, has to correspond to one of the Radio values
* `className` - css class
* `vertical` - vertical styled radios (default is horizontal)
* `spacing` - space between radios
* `style` - element style
* `title` - optional title for the radio group

## Supported attributes for Radio

* `id` - id of the element (important of you prefer to click on labels to select the value)
* `value` - value for the option
* `disabled` - renders a disabled radio
* `value` - value of the radio, it will be a label aswell if no label prop has been passed.
* `label` - label of this perticular radio

Allthough these attributes are supported, only value is required.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)