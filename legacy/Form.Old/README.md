# MooSkin UI - Form Component

The MooSkin Form Component works similar to the normal HTML `<form></form>` element, but with pre-defined styling and attributes.

### Usage

To start using the Form Component first you have to Import it

```
Import {Form, FormGroup} from '@moosend/mooskin';
```
or modular import
```
// JS
import Form, {FormGroup} from '@moosend/mooskin/lib/Form';

// CSS
import '@moosend/mooskin/lib/Form/style.css';
```

And then you can simply start using it by typing

```
<Form>
    ...Whatever...
</Form>
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.
For better content management, there is the `FormGroup` available.

```
Import {Form, FormGroup} from '@moosend/mooskin';

<Form>
    <FormGroup>
        ...whatever...
    </FormGroup>
</Form>
```

Like the `<form/>` element it will accept given attributes and render differently based on the given attributes

The FormGroup can be set to align elements horizontaly, default is vertically. For example, if we want two groups of <Input />, the groups to be aligned horizontaly, and the <Input /> vertically. We do this by passing the `horizontal` prop to the <FormGroup>.

```
<Form>
    <FormGroup horizontaly>
        <FormGroup>
            <Input />
            <Input />
            <Input />
        </FormGroup>
        <FormGroup>
            <Input />
            <Input />
            <Input />
        </FormGroup>
    </FormGroup>
</Form>
```

### Component Usage within the <Form>

Overall data handling within the <Form> Component will be done using the used components callbacks, dataLabel, values and React State. For Component related `dataLabel` and Callbacks visit the component related docs.

### Examples

#### Input

Lets say we're handling data within the <Form> using React State.

```
this.state = { name: '' };

.
.
.

<Form>
    <FormGroup>
        <Input 
            dataLabel="name"
            value={this.state.value}
            onChange={this.setValue}
        />
    </FormGroup>
</Form>

// event and data types are TypeScript related
getValue = (e: React.ChangeEvent<HTMLElement>, data: InputCallbackData) => {
    data.dataLabel && this.setState({[data.dataLabel]: data.value});
}
```

In this case, on every input change to the <Input> Component, the state property of `name` will get updated. `dataLabel` determines which state property to update. The callback data for the <Input> component is similar to `e.target.value`, which can be used aswell.

#### Switch

```
this.state = { done: false };

.
.
.

<Form>
    <FormGroup>
        <Switch
            dataLabel="done"
            on={this.state.done}
            onClick={this.getValue}
        />
    </FormGroup>
</Form>

// event and data types are TypeScript related
getValue = (e: React.MouseEvent<HTMLElement>, data: InputCallbackData) => {
    data.dataLabel && this.setState({[data.dataLabel]: data.value});
}
```

In this case, on every click to the <Switch> Component, the state property of `done` will get updated. `dataLabel` determines which state property to update. The callback data for the <Switch> component is a boolean which determines if the switch is on or off.

#### Switch

Lets say we're handling data within the <Form> using React State.

```
this.state = { contact: [{}, {}, {}] };

.
.
.

<Form>
    <FormGroup>
       <CheckboxGroup onChange={this.getValue} dataLabel="contact" >
            <CheckBox value="email" label="Email" checked={this.state.contact[0].checked}/>
            <CheckBox value="tel" label="Telephone" checked={this.state.contact[1].checked}/>
            <CheckBox value="raven" label="Raven" checked={this.state.contact[2].checked}/>
        </CheckboxGroup>
    </FormGroup>
</Form>

// event and data types are TypeScript related
getValue = (e: React.MouseEvent<HTMLElement>, data: InputCallbackData) => {
    data.dataLabel && this.setState({[data.dataLabel]: data.value});
}
```

In this case, on every click to the <CheckBox> Component, the state property of `contact` will get updated. `dataLabel` determines which state property to update. The callback data for the <CheckboxGroup> component is an array of objects reflecting the state of each CheckBox.

### onSubmit & Buttons

The `onSubmit` prop of the <Form>, is a function passed to the <Form> that will be called after a <Button> on the <Form> is clicked. Keep in mind that the <Button> Component has a default type of `button`, so if you want to pass the onSubmit prop to buttons inside the form, pass the prop type `submit` to the <Button> (<Button type="submit">). 

```
<Button type="submit">
    Submit
</Button>
```

The Form passes callback data aswell, like most Mooskin Components. Form callback data consists of the values of all Mooskin Components within the <Form>. For Example:

```
this.state = {
    name: '',
    done: false,
    start: ''
};

.
.
.

<Form onSubmit={this.onSubmit}>
    <FormGroup>
        <Input 
            dataLabel="name"
            value={this.state.value}
            onChange={this.setValue}
        />
        <Switch
            dataLabel="done"
            on={this.state.done}
            onClick={this.setValue}
        />
        <Select
            dataLabel="start"
            selected={this.state.start}
            onChange={this.setValue}
        >
            <Option value="asap">Asap</Option>
            <Option value="today">Today</Option>
            <Option value="now">Now</Option>
        </Select>
    </FormGroup>
    <Button>Go!</Button>
</Form>

setValue = (e, data) => {
    data.dataLabel && this.setState({[data.dataLabel]: data.value});
}

onSubmit = (e, data) => {
    console.log(data.value);
    // or manipulate the callback data, which is just an object of data within the Form
}
```

So if we fill up the fields, let's say we type on the `<Input>` a string of `Doni`, click on the `<Switch>` to make it `true`, and select the 1st `Option` on the `<Select>`. The resulting callback data will look something like this:

```
{
    name: 'Doni',
    done: true,
    start: 'asap'
}
```
now you're free to play around with the data, make aSync requests, whatever.

### Validation of components

When the form is submitted, validation functions will be called that has been passed to components within the form. Depending on their return value (true or false) the form will be marked as valid or invalid. If only one validation function returns false the Form will not be submitted, therefore not returning the submit object.

<div class="playground-doc">

## Supported attributes for Form 

* `className` - add additional classes to the Form
* `style` - or additional styles
* `onSubmit` - a function which will handle the data within the form

## Supported attributes for FormGroup

* `horizontal` - elements within FormGroup will align horizontally
* `className` - add additional classes to the FormGroup
* `style` - or additional styles

</div>

Allthough these attributes are supported, all of them are optional.

___

#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
