
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
