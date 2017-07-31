# MooSkin UI - File Component

The MooSkin File Component works similar to the normal HTML `<input type="file"/>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the File Component first you have to Import it

```
Import {File} from 'mooskin';
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