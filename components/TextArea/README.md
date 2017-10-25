# MooSkin UI - TextArea Component

The MooSkin TextArea Component works similar to the normal HTML `<textarea></textarea>` element, but with pre-defined styling and attributes.

___

### Usage

To start using the TextArea Component first you have to Import it

```
Import {TextArea} from 'mooskin';
```
or modular import
```
// JS
import TextArea from 'mooskin/lib/TextArea';

// CSS
import 'mooskin/lib/TextArea/style.css';
```

And then you can simply start using it by typing

```
<TextArea />
```

For easy use, the components are named similar to normal HTML components but with a capital first letter.

Like the ```<textarea/>``` element it will accept given attributes and render differently based on the given attributes

### Examples

Passing the placeholder attribute

```
<TextArea placeholder="username" />
```

or making it disabled with a value, in this case the proper disabled class will be loaded (ex. disabling cursor)

```
<TextArea value="This one is disabled" disabled />
```

or pass it a function for event handling

```
<TextArea onChange={yourFunc} />
```

or just give it a custom style

```
<TextArea style={yourStyle} />
```

### Callback

The TextArea Component Callback will always return the value of the TextArea on each change. This can be used with a function passed via the `onChange` prop. For example, if u want to console log the callback value, pass a function to the `onChange` prop.

```
const logValue = (e, data) => {     // data is the callback object, which consists of value and a dataLabel(not required)
    console.log(data.value);
};

<TextArea onChange={logValue} />
```
In this case on each TextArea change, the value will be console logged.

This can be used in various situations and combinations, for an enhanced development experience.

### Rich text editor mode

To enable the Rich editor mode of the TextArea component simply pass the `richEditor` prop to the TextArea:

```
<TextArea richEditor>
```

Rich editor value consists of `EditorState` object from `DraftJS` library. So an object of that kind must be passed as a value, and this kind of object will be passed as a callback value from the component itself. It also uses another callback function which is `onEditorChange`. Lets take a usage within a Form as an example:

```
import { EditorState } from 'draft-js';              // this import is important for the rich text editor
Import {Form, FormGroup, TextArea} from 'mooskin'

this.state = {
    editorState: EditorState.reateEmpty()            // or createWithContent()
}

<Form>
    <FormGroup>
        <TextArea
            richEditor
            richValue={this.state.editorState}
            onEditorChange={this.onEditorChange}
        />
    </FormGroup>
</Form>

onEditorChange(data) {
    this.setState({editorState: data.value})
}
```

#### Example

```
this.state = {
    status: '',
    message: '',
    value: ''
}

<TextArea
    value={this.state.value}
    validate={this.validate}
    status={this.state.status}
    description={this.state.message}
    onChange={this.onChange}
/>

onChange(e, data) {
    this.setState({value: data.value})
}

validate(value){
    if (value){
        if (value.length < 5){
            this.setState({status: 'error', message: 'TextArea should have 5 or more characters'});
        } else {
            this.setState({status: '', message: ''})
        }
    } else {
        this.setState({status: 'error', message: 'This TextArea is required'});
    }
}
```

In this case, when the user focuses the textarea and blurs away immediately, an error class will get applied to the textarea and the user will get informed that thee textarea is required. When the user starts typing, the error message will change, saying that the textarea should have 5 or more characters, when this is done, the error classes will get removed. Alternatevely, when the validation passes, we can pass a success status to apply the related class.

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `type` - type of the textarea (eg. text)
* `name` - name of the textarea
* `value` - text value of textarea
* `placeholder` - backtext description of textarea
* `minlength` - min number of characters allowed
* `maxlength` - max number of characters allowed
* `disabled` - textarea field should be disabled
* `required` - textarea field is required
* `description` - textarea description (small italic bottom)
* `spacing` - spacing between label and textarea
* `readonly` - make textarea readonly
* `className` - css class
* `dataLabel` - label what kind of data 
* `style` - textarea field style
* `onChange` - callback to be triggered on textarea change
* `richEditor` - rich editor mode for the textArea
* `richValue` - value of the TextArea (only for Editor mode)
* `onEditorChange` - change callback for the TextArea (only for Editor mode)
* `validate` - validate function
* `status` - to be used with validate, to apply classes based on error or success

</div>

Allthough these attributes are supported, all of them are optional. 
NOTE! While in rich editor mode only `richValue` and `onEditorChange` props will take effect, and vice versa.

#### For more

___

[MooSkin-UI](https://github.com/moosend/mooskin-ui)