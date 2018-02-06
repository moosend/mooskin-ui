import * as React from 'react';

import { EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './TextEditor.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITextEditorProps {

    /** editor id */
    id?: string;

    /** rich text editor toolbar className */
    toolbarClassName?: string;

    /** rich text editor toolbar style */
    toolbarStyle?: React.CSSProperties;

    /** rich editor value */
    value?: EditorState;

    /** editor label */
    label?: string;

    /** override editor styles */
    style?: React.CSSProperties;

    /** override editor class */
    className?: string;

    /** onChange callback for rich editor type of textarea */
    onChange?: (data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;
}

export interface ITextEditorState{
    editorState: EditorState;
}

export default class TextEditor extends React.Component<ITextEditorProps, ITextEditorState> {

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: ITextEditorProps){
        super(props);

        this.state = {
            editorState: this.props.value || EditorState.createEmpty()
        };
    }

    render() {
        const display = this.props.label ? {display: 'block'} : {display: 'none'};
        return (
            <div
                id={this.props.id}
                style={{position: 'relative'}}
                className={`mooskin-textarea-editor ${styles.editorContainer}`}
            >
                <label className={styles.editorLabel} style={display}>{this.props.label}</label>
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorChange}
                    editorClassName={`${styles.textarea} ${this.props.className}`}
                    editorStyle={this.props.style}
                    toolbarOnFocus
                    toolbarClassName={`${styles.toolbar} ${this.props.toolbarClassName}`}
                    toolbarStyle={this.props.toolbarStyle}
                />
            </div>
        );
    }

    onEditorChange = (editorState: EditorState) => {
        this.setState({editorState});
        this.props.onChange &&
        this.props.onChange({value: this.state.editorState, dataLabel: this.props.dataLabel});
    }

}
