# MooSkin UI - Checkbox Component

The MooSkin Checkbox component works similar to the normal HTML Checkbox elements, but with pre-defined styling and attributes.

___

### Usage

To start using the Checkbox component first you have to Import CheckboxGroup and the Checkbox component

```
Import {CheckboxGroup, Checkbox} from 'mooskin';
```
or modular import
```
// JS
import CheckboxGroup, {Checkbox} from 'mooskin/lib/Checkbox';

// CSS
import 'mooskin/lib/Checkbox/style.css';
```

And then you can simply start using it by typing

```
<CheckboxGroup onChange={cb} dataLabel="asd">
    <Checkbox id={'Checkbox1'} value="Checkbox1" label="This is a Checkbox"/>
    <Checkbox id={'Checkbox2'} value="Checkbox2" label="Another Checkbox"/>
    <Checkbox id={'Checkbox3'} value="Checkbox3" label="More Checkbox"/>
</CheckboxGroup>

```

another way of doing this is by importing `CheckboxGroup` only and doing a simple workaround
```
Import {CheckboxGroup} from 'mooskin';

<CheckboxGroup onChange={cb} dataLabel="asd">
    <CheckboxGroup.Checkbox id={'Checkbox1'} value="Checkbox1" label="This is a Checkbox"/>
    <CheckboxGroup.Checkbox id={'Checkbox2'} value="Checkbox2" label="Another Checkbox"/>
    <CheckboxGroup.Checkbox id={'Checkbox3'} value="Checkbox3" label="More Checkbox"/>
</CheckboxGroup>
```
or by passing the `selectedChecks` prop only
```
const checked = [
    {
        checked: true,
        label: 'Checkbox1',
        value: 'Checkbox1'
    },
    {
        checked: false,
        label: 'Checkbox2',
        value: 'Checkbox2'
    },
    {
        checked: false,
        label: 'Checkbox3',
        value: 'Checkbox3'
    }
];

<CheckboxGroup selectedChecks={checked} onChange={cb} dataLabel="asd">
```

Like the normal HTML elements, it will accept given attributes and render differently based on the given attributes

### Examples

Passing the dataLabel attribute is important because when you can get back the type of data along with the value in the callback, in the below example it can be for example 'gender' or 'status' etc, anything really. Helpful when you have muultiple CheckboxGroups that have one callback, you can check the dataLabel there.

```
// handy when you want to know what type of data you are retrieveing if you have lots of CheckboxGroup.
const cb = (event, {dataLabel, value}) => { 
    if(dataLabel === 'gender'){
        //do something
    }else if(dataLabel === 'status'){
        //do something else
    }
}

<CheckboxGroup onChange={cb} dataLabel="asd">
    <Checkbox id={'Checkbox1'} value="Checkbox1" label="This is a Checkbox1"/>
    <Checkbox id={'Checkbox2'} value="Checkbox2" label="Another Checkbox2"/>
    <Checkbox id={'Checkbox3'} value="Checkbox3" label="More Checkbox3"/>
</CheckboxGroup>
```


Custom style, className or id can be given just like any other component in this library 

```
<CheckboxGroup style={yourStyle} id="id" className="className" >
```

### Callback

The CheckboxGroup Component Callback will always return an array of objects, the objects represent each Checkbox state within the CheckboxGroup. This can be used with a function passed via the `onChange` prop. For example, if u want to log the state of the Checkboxes, pass a function to the `onChange` prop.

Object structure:
```
{                               // this object reflects the state of each individual Checkboxes within the group
    checked: boolean;           // wether the Checkbox is checked
    value: string;              // the value of the Checkbox
    label: string;              // the label of the Checkbox
}
```

Playing with data
```
const logValues = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);         // this will log the array of objects, with the state of each Checkbox
};

<CheckboxGroup onChange={logValues} >
    <Checkbox value='Checkbox 1'/>
    <Checkbox value='Checkbox 2'/>
    <Checkbox value='Checkbox 3'/>
</CheckboxGroup>
```
or do something like
```
const func = (e, data) => {                     // data is the callback object, which consists of value and a dataLabel(not required)
    if (data.value[0].checked === true){        // go for statement block if the first Checkbox is checked
        // do something...
    }
};

<CheckboxGroup onChange={func} >
    <Checkbox value='Checkbox 1'/>
    <Checkbox value='Checkbox 2'/>
    <Checkbox value='Checkbox 3'/>
</CheckboxGroup>
```
in this case, the statement block will get fired if the first Checkbox is checked

Checkbox components which are not used within a CheckboxGroup have callbacks aswell. The callback returns just an object of the object state with the structure mentioned above. For example:
```
const logValue = (e, data) => {       // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);          // this will log the object, with the state of the Checkbox
};

<Checkbox value='Checkbox 1' onClick={logValue} />
```

This can be used in various situations and combinations, for an enhanced development experience.

### Validation

The Checkbox Component can be validated using the `status` and `validate` props. The `status` prop will accept an 'error' or 'success' string to apply the appropriate classes to the checkboxes, or none for that matter. The `validate` prop is the validation function which accepts a arg of an object containing `value`, `dataLabel` and `required` props of the component as properties, and depending on the received value, you can use any kind of validation you like. The `description` prop can also be used in the process to inform the user about validation errors. The validation will fire the first time onBlur, and every other time onChange.

#### Example

```
this.state = {
    status: 'error',
    message: '',
    value: []
};

<CheckboxGroup
    onChange={this.onChange}
    title="Vertical checkboxes"
    validate={this.validate}
    status={this.state.status}
    description={this.state.message}
    selectedChecks={this.state.value}
/>

onChange(e, data) {
    console.log(data.value);
    this.setState({value: data.value});
}

validate(value) {
    let checked = 0;
    value.forEach((check) => {
        if (check.checked){
            checked = checked + 1;
        }
    });
    if (checked >= 2){
        this.setState({status: 'success', message: ''});
    } else {
        this.setState({status: 'error', message: 'At least 2 checkboxes need to be checked'});
    }
}
```

In this case, if less than two checkboxes are checked, the error classes will get applied to the checkbox and a message will notify the user.

<div class="playground-doc">

## Supported attributes for CheckboxGroup

* `id` - id of the element
* `dataLabel` - label what kind of data 
* `selectedChecks` - data to be bound to the component. Same format as callback data.
* `onChange` - callback that is fired when you click on one of the Checkboxes
* `className` - css class
* `horizontal` - horizontal styled Checkboxes (default is vertical)
* `spacing` - space between Checkboxes
* `style` - element style
* `title` - optional title for the Checkboxes group

The `selectedChecks` prop is required.

## Supported attributes for Checkbox 

* `id` - id of the element (important of you prefer to click on labels to select the value)
* `value` - value for the option
* `checked` - wether the Checkbox is checked or not
* `disabled` - renders a disabled Checkbox
* `onClick` - callback for individual Checkbox, use this only with a lonely Checkbox, otherwise it will get overriden by CheckboxGroup callback
* `value` - value of the Checkbox, it will be a label aswell if no label prop has been passed. Checkboxes within a group cannot have the same value.
* `label` - label of this perticular Checkbox

</div>

Allthough these attributes are supported, only `value` is required.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)