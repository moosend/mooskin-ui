import * as React from 'react';

import { EditorState, Modifier } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './TextEditor.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITextEditorProps {

    /** editor id */
    id?: string;

    /** position of the toolbar */
    toolbarPos?: 'top' | 'bottom';

    /** what options should be available to the toolbar */
    options?: string[];

    /** custom emojis */
    customEmojis?: any[];

    /** width of the editor field */
    width?: number;

    /** height of the editor field */
    height?: number;

    /** adds personalization tags dropdown */
    personalizationTags?: Array<{[key: string]: string}>;

    /** override wrapper styles */
    wrapperStyle?: React.CSSProperties;

    /** override wrapper class */
    wrapperClassName?: string;

    /** override editor styles */
    editorStyle?: React.CSSProperties;

    /** override editor class */
    editorClassName?: string;

    /** rich text editor toolbar className */
    toolbarClassName?: string;

    /** rich text editor toolbar style */
    toolbarStyle?: React.CSSProperties;

    /** wether the toolbar should show on editor focus */
    toolbarOnFocus?: boolean;

    /** toolbar options */
    toolbar?: {[key: string]: any};

    /** wether the toolbar should be draggable */
    draggable?: boolean;

    /** rich editor value */
    value?: EditorState;

    /** editor label */
    label?: string;

    /** onChange callback for rich editor type of textarea */
    onChange?: (data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;
}

export interface ITextEditorState {
    dragging: boolean;
    pos: IPosition;
    relPos: IRelateivePos;
    editorState: EditorState;
    activeDropDown: boolean;
}

export interface IPosition {
    left: number;
    top: number | undefined;
    bottom: number | undefined;
}

export interface IRelateivePos {
    left: number;
    top: number;
    bottom: number;
}

export interface IDropDownProps {
    active: boolean;
    editorState: EditorState;
    personalizationTags?: Array<{[key: string]: string}>;
    onChange?: (data: any) => void;
    onClick: () => void;
}

export default class TextEditor extends React.Component<ITextEditorProps, ITextEditorState> {

    static defaultProps = {
        className: '',
        height: 300,
        option: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            'embedded',
            'emoji',
            'image',
            'remove',
            'history'
        ],
        style: {},
        toolbarOnFocus: true,
        toolbarPos: 'top',
    };

    constructor(props: ITextEditorProps){
        super(props);

        this.state = {
            activeDropDown: false,
            dragging: false,
            editorState: this.props.value || EditorState.createEmpty(),
            pos: {
                bottom: this.props.toolbarPos === 'bottom' ? -80 : undefined,
                left: 0,
                top: this.props.toolbarPos === 'top' ? -70 : undefined
            },
            relPos: {left: 0, top: 0, bottom: 0}
        };
    }

    componentDidUpdate(props: ITextEditorProps, state: ITextEditorState) {
        if (this.state.dragging && !state.dragging) {
          document.addEventListener('mousemove', this.onMouseMove);
          document.addEventListener('mouseup', this.onMouseUp);
        } else if (!this.state.dragging && state.dragging) {
          document.removeEventListener('mousemove', this.onMouseMove);
          document.removeEventListener('mouseup', this.onMouseUp);
        }
      }

    render() {

        const {draggable, height, label, toolbarClassName, toolbarOnFocus, width} = this.props;

        const display = label ? {display: 'block'} : {display: 'none'};

        draggable && toolbarOnFocus && this.addEvents();
        const dragClass = draggable && toolbarOnFocus ? styles.draggable : '';

        const absoluteToolbar = toolbarOnFocus ? styles.toolbarOnFocus : '';

        const toolbarStyles = {
            bottom: this.state.pos.bottom,
            left: this.state.pos.left,
            top: this.state.pos.top,
            ...this.props.toolbarStyle
        };

        const editorStyles = {
            maxHeight: height,
            maxWidth: width,
            ...this.props.editorStyle
        };

        const toolbar = this.props.toolbar ? this.props.toolbar : this.getToolbar();

        const wrapperClasses = this.props.toolbarPos === 'bottom' ? styles.wrapperReverse : styles.wrapper;

        return (
            <div
                id={this.props.id}
                style={{position: 'relative'}}
                className={`mooskin-text-editor ${styles.editorContainer}`}
            >
                <label className={styles.editorLabel} style={display}>{this.props.label}</label>
                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorChange}
                    wrapperClassName={`${wrapperClasses} ${this.props.wrapperClassName}`}
                    wrapperStyle={this.props.wrapperStyle}
                    editorClassName={`${styles.editor} ${this.props.editorClassName}`}
                    editorStyle={editorStyles}
                    toolbarOnFocus={this.props.toolbarOnFocus}
                    toolbarClassName={`${styles.toolbar} ${absoluteToolbar} ${dragClass} ${toolbarClassName}`}
                    toolbarStyle={toolbarStyles}
                    toolbar={toolbar}
                    toolbarCustomButtons={[this.props.personalizationTags && this.getCustomDropDown()]}
                    {...this.props}
                />
            </div>
        );
    }

    onEditorChange = (editorState: EditorState) => {
        this.setState({editorState});
        this.props.onChange &&
        this.props.onChange({value: this.state.editorState, dataLabel: this.props.dataLabel});
    }

    addEvents = () => {
        const toolbar = document.getElementsByClassName('rdw-editor-toolbar');
        toolbar && toolbar[0] && toolbar[0].addEventListener('mousedown', this.onMouseDown);
    }

    onMouseDown = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        if (e.button === 0) {
            this.setState({
                dragging: true,
                relPos: {
                    bottom: e.pageY + (this.state.pos.bottom || 0),
                    left: e.pageX - this.state.pos.left,
                    top: e.pageY - (this.state.pos.top || 0)
                }
            });
        }
    }

    onMouseUp = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({dragging: false});
    }

    onMouseMove = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.dragging) {
            if (this.props.toolbarPos === 'top'){
                this.setState({
                    pos: {
                        bottom: undefined,
                        left: e.pageX - this.state.relPos.left,
                        top: e.pageY - this.state.relPos.top
                    }
                });
            } else if (this.props.toolbarPos === 'bottom'){
                this.setState({
                    pos: {
                        bottom: this.state.relPos.bottom - e.pageY,
                        left: e.pageX - this.state.relPos.left,
                        top: undefined
                    }
                });
            }
        }
    }

    onDropDownClick = () => {
        this.setState({activeDropDown: !this.state.activeDropDown});
    }

    getCustomDropDown = () => {
        return (
            <CustomDropDown
                active={this.state.activeDropDown}
                onClick={this.onDropDownClick}
                editorState={this.state.editorState}
                personalizationTags={this.props.personalizationTags}
            />
        );
    }

    getToolbar = () => {

        const starterEmojis = [
            '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
            '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
            '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
            '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
            '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
            '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
            '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
            '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
            '✅', '❎', '💯'
        ];

        const emojis = this.props.customEmojis ? starterEmojis.concat(this.props.customEmojis) : starterEmojis;

        return (
            {
                emoji: {
                    className: undefined,
                    component: undefined,
                    emojis,
                    popupClassName: undefined
                },
                options: this.props.options
            }
        );
    }

}

export const CustomDropDown = (props: IDropDownProps) => {

    const addTag = (value: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const { editorState, onChange } = props;
            const contentState = Modifier.replaceText(
                editorState.getCurrentContent(),
                editorState.getSelection(),
                value,
                editorState.getCurrentInlineStyle(),
            );
            onChange && onChange(EditorState.push(editorState, contentState, 'insert-characters'));
        };
    };

    const popullateTags = () => {

        const tagDivs = props.personalizationTags && props.personalizationTags.map((tag, i) => {
            return (
                <div
                    className={styles.tag}
                    key={i}
                    onClick={addTag(tag.value)}
                >
                    {tag.label}
                </div>
            );
        });

        return tagDivs;
    };

    const listClass = props.active ? '' : styles.disabled;

    return (
        <div
            className={styles.tags}
        >
            <div className={styles.arrow} onClick={props.onClick}>
                Personalization Tags
            </div>
            <div className={`${styles.tagsList} ${listClass}`}>
                {popullateTags()}
            </div>
        </div>
    );
};
