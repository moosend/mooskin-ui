# MooSkin UI - File Component

The MooSkin File Component works similar to the normal HTML `<input type="file"/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the File Component first you have to Import it

```
Import {FileUpload} from '@moosend/mooskin';
```
or modular import
```
// JS
import FileUpload from '@moosend/mooskin/lib/FileUpload';

// CSS
import '@moosend/mooskin/lib/FileUpload/style.css';
```

And then you can simply start using it by typing

```
<File />
```

Like the `<input type="file"/>` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the placeholder attribute and a button label

```
<File placeholder="No file selected" buttonLabel="Select File"/>
```

or making it disabled, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<File disabled />
```

or pass it a function for event handling

```
<File onChange={yourFunc} />
```

or make it required with multiple file upload support

```
<File required multiple />
```

### Callback

The File Component Callback will always return the File object or a FileList depending on the multiple prop. This can be used with a function passed via the `onChange` prop. For example, if u want to console log the callback file, pass a function to the `onChange` prop.

```
const logValue = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);
};

<File onChange={logValue} />
```
In this case on each file select, the selected file/files will be console logged.

This can be used in various situations and combinations, for an enhanced development experience.

### Validation

The FileUpload Component can be validated using the `status` and `validate` props. The `status` prop will accept an 'error' or 'success' string to apply the appropriate classes to the file upload, or none for that matter. The `validate` prop is the validation function which accepts a arg of an object containing `value`, `dataLabel` and `required` props of the component as properties, and depending on the received value, you can use any kind of validation you like. The `description` prop can also be used in the process to inform the user about validation errors. The validation will fire the first time onBlur, and every other time onChange.

#### Example

```
this.state = {
    status: '',
    message: '',
    file: ''
}

<FileUpload
    file={this.state.file}
    validate={this.validate}
    status={this.state.status}
    description={this.state.message}
    onChange={this.onChange}
/>

onChange(e, data) {
    this.setState({file: data.value})
}

validate(data){
    if (data.value){
        this.setState({status: '', message: ''})
    } else {
        this.setState({status: 'error', message: 'A file is required for the form to submit'});
    }
}
```

<div class="playground-doc">

## Supported attributes 

* `id` - id of the element
* `label` - main label for the element
* `accept` - what kind of files should the file select accept
* `placeholder` - placeholder text when no file is selected
* `multiple` - allow multiple file selections
* `disabled` - file input should be disabled
* `required` - file input field is required
* `buttonLabel` - button text/label
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - file input style
* `onChange` - callback to be triggered on input change

</div>

Allthough these attributes are supported, all of them are optional.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)