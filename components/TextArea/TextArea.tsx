import * as React from 'react';

import { EditorState } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './TextArea.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITextAreaProps {

    /** override textarea id */
    id?: string;

    /** provide to make the textarea field disabled */
    disabled?: boolean;

    /** provide to make the textarea field required */
    required?: boolean;

    /** specify textarea columns */
    cols?: number;

    /** specify textarea rows */
    rows?: number;

    /** override textarea name */
    name?: string;

    /** override textarea value */
    value?: string;

    /** override textarea placeholder */
    placeholder?: string;

    /** override textarea minlength */
    minlength?: number;

    /** override textarea maxlength */
    maxlength?: number;

    /** textarea label */
    label?: string;

    /** textarea description (small italic bottom) */
    description?: string;

    /** spacing between label and textarea */
    labelWidth?: number;

    /** toggle readonly textarea */
    readonly?: boolean;

    /** wether the text area should be a rich text editor */
    richEditor?: boolean;

    /** rich editor value */
    richValue?: EditorState;

    /** override textarea styles */
    style?: React.CSSProperties;

    /** override textarea class */
    className?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the textarea changes */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, data: IInputCallbackData) => void;

    /** onChange callback for rich editor type of textarea */
    onEditorChange?: (data: IInputCallbackData) => void;

}

export interface ITextAreaState{

    editorState: EditorState;
}

class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {

    static defaultProps = {
        className: '',
        style: {}
    };

    // id: string;

    constructor(props: ITextAreaProps){
        super(props);

        this.state = {
            editorState: this.props.richValue || EditorState.createEmpty()
        };
    }

    render(){

        return(
            this.getComponent()
        );
    }

    onEditorChange = (editorState: EditorState) => {
        this.setState({editorState});
        this.props.onEditorChange &&
        this.props.onEditorChange({value: this.state.editorState, dataLabel: this.props.dataLabel});
    }

    getComponent = () => {
        if (this.props.richEditor){
            const display = this.props.label ? {display: 'block'} : {display: 'none'};
            return (
                <div
                    id={this.props.id}
                    style={{position: 'relative'}}
                    className={`mooskin-textarea-editor ${styles.editorContainer}`}
                >
                    <label className={styles.editorLabel} style={display}>{this.props.label}</label>
                    <Editor
                        editorClassName={styles.textarea}
                        editorState={this.state.editorState}
                        onEditorStateChange={this.onEditorChange}
                        editorStyle={{maxWidth: '100%'}}
                        toolbarOnFocus
                        toolbarClassName={styles.toolbar}
                    />
                </div>
            );
        } else {
            return (
                <TextAreaComponent
                    id={this.props.id}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    minlength={this.props.minlength}
                    maxlength={this.props.maxlength}
                    style={this.props.style}
                    className={this.props.className}
                    label={this.props.label}
                    cols={this.props.cols}
                    rows={this.props.rows}
                    readonly={this.props.readonly}
                    description={this.props.description}
                    onChange={this.props.onChange}
                    dataLabel={this.props.dataLabel}
                    labelWidth={this.props.labelWidth}
                    value={this.props.value}
                />
            );
        }
    }

}

export const TextAreaComponent: React.StatelessComponent<ITextAreaProps> = (props) => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !props.disabled &&
        props.onChange &&
        props.onChange(e, {value: e.target.value, dataLabel: props.dataLabel});
    };

    const generateId = () => {
        return Date.now().toString();
    };

    const id = generateId();

    const disabledtextarea = props.disabled ? styles.disabledTextArea : '';
    const spacing = !props.labelWidth ? {} : {flexBasis: `${props.labelWidth}px`};

    return (
        <div className={`textarea-component ${props.className} ${styles.areaContainer}`}>
            {props.label && <label className={styles.textareaLabel} style={spacing} htmlFor={id}>{props.label}</label>}
            <div className={styles.textAreaDiv}>
                <textarea
                    id={props.id}
                    onChange={onChange}
                    name={name}
                    value={props.value}
                    placeholder={props.placeholder}
                    cols={props.cols}
                    rows={props.rows}
                    minLength={props.minlength}
                    maxLength={props.maxlength}
                    required={props.required}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                    className={`textarea ${styles.textarea} ${disabledtextarea}`}
                    style={props.style}
                />
                <i className={styles.description}>{props.description}</i>
            </div>
        </div>
    );
};

export default TextArea;
