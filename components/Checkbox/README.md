# MooSkin UI - CheckBox Component

The MooSkin CheckBox component works similar to the normal HTML checkbox elements, but with pre-defined styling and attributes.

___

### Usage

To start using the CheckBox component first you have to Import CheckBoxGroup and the CheckBox component

```
Import {CheckBoxGroup, CheckBox} from 'mooskin';
```

And then you can simply start using it by typing

```
<CheckBoxGroup onChange={cb} dataLabel="asd">
    <CheckBox id={'checkbox1'} value="checkbox1" label="This is a CheckBox"/>
    <CheckBox id={'checkbox2'} value="checkbox2" label="Another CheckBox"/>
    <CheckBox id={'checkbox3'} value="checkbox3" label="More CheckBox"/>
</CheckBoxGroup>

```

another way of doing this is by importing `RadioGroup` only and doing a simple workaround
```
Import {CheckBoxGroup} from 'mooskin';

<CheckBoxGroup onChange={cb} dataLabel="asd">
    <CheckBoxGroup.CheckBox id={'checkbox1'} value="checkbox1" label="This is a checkbox"/>
    <CheckBoxGroup.CheckBox id={'checkbox2'} value="checkbox2" label="Another checkbox"/>
    <CheckBoxGroup.CheckBox id={'checkbox3'} value="checkbox3" label="More checkbox"/>
</CheckBoxGroup>
```

Like the normal HTML elements, it will accept given attributes and render differently based on the given attributes

### Examples

Passing the dataLabel attribute is important because when you can get back the type of data along with the value in the callback, in the below example it can be for example 'gender' or 'status' etc, anything really. Helpful when you have muultiple CheckBoxGroups that have one callback, you can check the dataLabel there.

```
// handy when you want to know what type of data you are retrieveing if you have lots of CheckBoxGroup.
const cb = (event, {dataLabel, value}) => { 
    if(dataLabel === 'gender'){
        //do something
    }else if(dataLabel === 'status'){
        //do something else
    }
}

<CheckBoxGroup onChange={cb} dataLabel="asd">
    <CheckBox id={'checkbox1'} value="checkbox1" label="This is a checkbox1"/>
    <CheckBox id={'checkbox2'} value="checkbox2" label="Another checkbox2"/>
    <CheckBox id={'checkbox3'} value="checkbox3" label="More checkbox3"/>
</CheckBoxGroup>
```


Custom style, className or id can be given just like any other component in this library 

```
<CheckBoxGroup style={yourStyle} id="id" className="className" >
```

### Callback

The CheckBoxGroup Component Callback will always return an array of objects, the objects represent each CheckBox state within the CheckBoxGroup. This can be used with a function passed via the `onChange` prop. For example, if u want to log the state of the checkboxes, pass a function to the `onChange` prop.

Object structure:
```
{                               // this object reflects the state of each individual checkboxes within the group
    checked: boolean;           // wether the checkbox is checked
    value: string;              // the value of the checkbox
    label: string;              // the label of the checkbox
}
```

Playing with data
```
const logValues = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);         // this will log the array of objects, with the state of each checkbox
};

<CheckBoxGroup onChange={logValues} >
    <CheckBox value='Checkbox 1'/>
    <CheckBox value='Checkbox 2'/>
    <CheckBox value='Checkbox 3'/>
</CheckBoxGroup>
```
or do something like
```
const func = (e, data) => {                     // data is the callback object, which consists of value and a dataLabel(not required)
    if (data.value[0].checked === true){        // go for statement block if the first checkbox is checked
        // do something...
    }
};

<CheckBoxGroup onChange={func} >
    <CheckBox value='Checkbox 1'/>
    <CheckBox value='Checkbox 2'/>
    <CheckBox value='Checkbox 3'/>
</CheckBoxGroup>
```
in this case, the statement block will get fired if the first checkbox is checked

CheckBox components which are not used within a CheckBoxGroup have callbacks aswell. The callback returns just an object of the object state with the structure mentioned above. For example:
```
const logValue = (e, data) => {       // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);          // this will log the object, with the state of the checkbox
};

<CheckBox value='Checkbox 1' onClick={logValue} />
```

This can be used in various situations and combinations, for an enhanced development experience.

## Supported attributes for CheckBoxGroup

* `id` - id of the element
* `dataLabel` - label what kind of data 
* `onChange` - callback that is fired when you click on one of the checkboxes
* `className` - css class
* `horizontal` - horizontal styled checkboxes (default is vertical)
* `spacing` - space between checkboxes
* `style` - element style
* `title` - optional title for the checkboxes group

## Supported attributes for CheckBox

* `id` - id of the element (important of you prefer to click on labels to select the value)
* `value` - value for the option
* `checked` - wether the checkbox is checked or not
* `disabled` - renders a disabled checkbox
* `onClick` - callback for individual checkbox, use this only with a lonely checkbox, otherwise it will get overriden by CheckBoxGroup callback
* `value` - value of the checkbox, it will be a label aswell if no label prop has been passed. CheckBoxes within a group cannot have the same value.
* `label` - label of this perticular checkbox

Allthough these attributes are supported, only `value` is required.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)