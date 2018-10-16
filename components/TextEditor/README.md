
# MooSkin UI - TextEditor Component

A simple but very useful rich text editor.

___

### Usage

To start using the TextEditor Component first you have to Import it

```
Import {TextEditor} from 'mooskin';
```
or modular import
```
// JS
import TextEditor from 'mooskin/lib/TextEditor';

// CSS
import 'mooskin/lib/TextEditor/style.css';
```

And then you can simply start using it by typing

```
<TextEditor />
```

For correct use the TextEditor `editorState` prop should be controlled by state which is a draftJS EditorState

```
import { EditorState } from 'draft-js';

this.state = {
    editorState: EditorState.createEmpty() // or a saved state
};

<TextEditor value={this.state.editorState} onChange={this.onChange}>

onChange = (data) => {
    this.setState({editorState: data.value});
}
```

### Prop Examples

Styling the toolbar

```
<TextEditor toolbarClassName="myClass" toolbarStyles={{color: 'blue'}} />
```

making toolbar toggle only on editor focus

```
<TextEditor toolbarOnFocus />
```

### Callback

Rich editor value consists of `EditorState` object from `DraftJS` library. So an object of that kind must be passed as a value, and this kind of object will be passed as a callback value from the component itself.

```
import { EditorState } from 'draft-js';              // this import is important for the rich text editor
Import {TextEditor} from 'mooskin'

this.state = {
    editorState: EditorState.reateEmpty()            // or createWithContent()
}

<TextEditor
    draggable
    value={this.state.editorState}
    onChange={this.onEditorChange}
/>

onEditorChange(data) {
    this.setState({editorState: data.value})
}
```
In this case on each TextEditor change, the value will be console logged.

<div class="playground-doc">

## Supported attributes

* `id` - id of the element
* `editorState` - state value of the editor, should be `RawDraftContentState`
* `toolbarPos` - position of the toolbar (`top`, `bottom`)
* `options` - options to be available to the toolbar, Array of strings. Available options [`'inline'`, `'blockType'`, `'fontSize'`, `'fontFamily'`, `'list'`,`'textAlign'`, `'colorPicker'`, `'link'`, `'embedded'`, `'emoji'`, `'image'`, `'remove'`, `'history'`, `'html'`, `'/'`].
* `customEmojis` - add custom emojis to the toolbar, requres array of emojis, ['😁', '😂', '😃'].
* `width` - width of the editor field
* `height` - height of the editor field
* `personalizationTags` - adds personalization tag dropdown which requires an array of objects consisting of keys `label` & `value`
* `wrapperStyle` - wrapper style for both editor and toolbar
* `wrapperClassName` - wrapper classes for both editor and toolbar
* `editorStyle` - editor styles
* `editorClassName` - editor classname
* `toolbarClassName` - toolbar classname
* `toolbarStyle` - toolbar styles
* `toolbarOnFocus` - pop toolbar on editor focus
* `toolbar` - object defining editor options and custom options
* `draggable` - wether the toolbar should be draggable
* `label` - label for editor
* `onChange` - onChange callback when editor changes, returns EditorState
* `dataLabel` - label what kind of data
* `noSeparators` - removes section separators from the editor

For more props and customization, see [React-Draft-WYSIWYG](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp)

</div>

Allthough these attributes are supported, all of them are optional. 
NOTE! While in rich editor mode only `richValue` and `onEditorChange` props will take effect, and vice versa.

___


#### For more

[MooSkin-UI](https://github.com/moosend/mooskin-ui)
