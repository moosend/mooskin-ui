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

### Callback

The RadioGroup Component Callback will always return an array of objects, the objects represent each Radio state within the RadioGroup. This can be used with a function passed via the `onChange` prop. For example, if u want to log the state of the Radios, pass a function to the `onChange` prop.

Object structure:
```
{                                // this object reflects the state of each individual Radio within the group
    selected: boolean;           // wether the Radio is selected
    value: string;               // the value of the Radio
    label: string;               // the label of the Radio
}
```

Playing with data
```
const logValues = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);         // this will log the array of objects, with the state of each Radio
};

<RadioGroup onChange={logValues} >
    <Radio value='Radio 1'/>
    <Radio value='Radio 2'/>
    <Radio value='Radio 3'/>
</RadioGroup>
```
or do something like
```
const func = (e, data) => {                     // data is the callback object, which consists of value and a dataLabel(not required)
    if (data.value[0].selected === true){       // go for statement block if the first Radio is selected
        // do something...
    }
};

<RadioGroup onChange={func} >
    <Radio value='Radio 1'/>
    <Radio value='Radio 2'/>
    <Radio value='Radio 3'/>
</RadioGroup>
```
in this case, the statement block will get fired if the first Radio is selected

Radio components which are not used within a RadioGroup have callbacks aswell. The callback returns just an object of the object state with the structure mentioned above. For example:
```
const logValue = (e, data) => {       // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);          // this will log the object, with the state of the Radio
};

<Radio value='Radio 1' onClick={logValue} />
```

This can be used in various situations and combinations, for an enhanced development experience.

## Supported attributes for RadioGroup

* `id` - id of the element
* `dataLabel` - label what kind of data 
* `onChange` - callback that is fired when you click on one of the radios
* `className` - css class
* `vertical` - vertical styled radios (default is horizontal)
* `spacing` - space between radios
* `style` - element style
* `title` - optional title for the radio group

## Supported attributes for Radio

* `id` - id of the element (important of you prefer to click on labels to select the value)
* `selected` - wether the radio is selected, only one radio can be selected within the RadioGroup
* `disabled` - renders a disabled radio
* `onClick` - callback for individual radio, use this only with a lonely radio, otherwise it will get overriden by RadioGroup callback
* `value` - value of the radio, it will be a label aswell if no label prop has been passed.
* `label` - label of this perticular radio

Allthough these attributes are supported, only value is required.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)