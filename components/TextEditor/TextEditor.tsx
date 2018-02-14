import * as React from 'react';

import { ContentState, convertToRaw, EditorState, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {Button} from '../index';

import boldIcon from '../../assets/images/editor/Bold.png';
import centerIcon from '../../assets/images/editor/center.png';
import removeIcon from '../../assets/images/editor/clearStyles.png';
import codeIcon from '../../assets/images/editor/codeview.png';
import colorIcon from '../../assets/images/editor/colour.png';
import emojiIcon from '../../assets/images/editor/emoji.png';
import hashtag from '../../assets/images/editor/hashtag.png';
import imageIcon from '../../assets/images/editor/image.png';
import italicIcon from '../../assets/images/editor/Italics.png';
import justifiedIcon from '../../assets/images/editor/justified.png';
import leftIcon from '../../assets/images/editor/left.png';
import linkIcon from '../../assets/images/editor/Link.png';
import orderedIcon from '../../assets/images/editor/orderedList.png';
import redoIcon from '../../assets/images/editor/redo.png';
import rightIcon from '../../assets/images/editor/right.png';
import textSizeIcon from '../../assets/images/editor/textsize.png';
import underlineIcon from '../../assets/images/editor/Underline.png';
import undoIcon from '../../assets/images/editor/undo.png';
import unlinkIcon from '../../assets/images/editor/unlink.png';
import unorderedIcon from '../../assets/images/editor/unorderedList.png';

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
    editorState: EditorState;

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
    activeDropDown: boolean;
    showHtml: boolean;
    htmlContent: string;
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

export interface IToHtmlProps {
    onClick: () => void;
}

export default class TextEditor extends React.Component<ITextEditorProps, ITextEditorState> {

    static defaultProps = {
        className: '',
        height: 300,
        options: [
            'inline',
            'blockType',
            'fontSize',
            'fontFamily',
            'list',
            'textAlign',
            'colorPicker',
            'link',
            // 'embedded',
            'emoji',
            'image',
            'remove',
            'history',
            'html'
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
            htmlContent: '',
            pos: {
                bottom: this.props.toolbarPos === 'bottom' ? -80 : undefined,
                left: 0,
                top: this.props.toolbarPos === 'top' ? -70 : undefined
            },
            relPos: {left: 0, top: 0, bottom: 0},
            showHtml: false
        };
    }

    componentDidMount(){
        const htmlContent = draftToHtml(convertToRaw(this.props.editorState.getCurrentContent()));
        this.setState({htmlContent});
        this.addColorPickerEvents();
    }

    componentWillReceiveProps(nextProps: ITextEditorProps) {
        if (nextProps.editorState && !this.isEmptyObject(nextProps.editorState)){
            const htmlContent = draftToHtml(convertToRaw(nextProps.editorState.getCurrentContent()));
            this.setState({htmlContent});
        }
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

        this.addColorPickerEvents();

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

        const personalizationTags = this.props.personalizationTags && this.getCustomDropDown();

        const customToolbarButtons: any = [];
        personalizationTags && customToolbarButtons.push(personalizationTags);
        this.props.options && this.props.options.includes('html') && customToolbarButtons.push(this.getToHtml());

        const editHtmlStyles = !this.state.showHtml ? {display: 'none'} : {};
        const editorEditHtml = this.state.showHtml ? {display: 'none'} : {};

        return (
            <div
                id={this.props.id}
                style={{position: 'relative'}}
                className={`mooskin-text-editor ${styles.editorContainer}`}
            >
                {this.state.activeDropDown && <div onClick={this.onDropDownClick} className={styles.overlay}/>}
                <label className={styles.editorLabel} style={display}>{this.props.label}</label>
                <Editor
                    editorState={this.props.editorState}
                    onEditorStateChange={this.onEditorChange}
                    wrapperClassName={`${wrapperClasses} ${this.props.wrapperClassName}`}
                    wrapperStyle={this.props.wrapperStyle}
                    editorClassName={`${styles.editor} ${this.props.editorClassName}`}
                    editorStyle={{...editorEditHtml, ...editorStyles}}
                    toolbarOnFocus={this.props.toolbarOnFocus}
                    toolbarClassName={`${styles.toolbar} ${absoluteToolbar} ${dragClass} ${toolbarClassName}`}
                    toolbarStyle={toolbarStyles}
                    toolbar={toolbar}
                    toolbarCustomButtons={customToolbarButtons}
                />
                <textarea
                    className={styles.textArea}
                    value={this.state.htmlContent}
                    onChange={this.onTextAreaChange}
                    style={editHtmlStyles}
                />
                <div className={styles.buttonGroup} style={editHtmlStyles}>
                    <Button onClick={this.onAccept}>Accept</Button>
                    <Button inverseStyle onClick={this.onCancel}>Cancel</Button>
                </div>
            </div>
        );
    }

    onEditorChange = (editorState: EditorState) => {
        this.props.onChange &&
        this.props.onChange({value: editorState, dataLabel: this.props.dataLabel});
    }

    onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({htmlContent: e.target.value});
        // this.props.onChange &&
        // this.props.onChange({value: e.target.value, dataLabel: this.props.dataLabel});
    }

    onAccept = () => {
        try {
            const contentBlock = htmlToDraft(this.state.htmlContent);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks, {});
            const editorState = EditorState.createWithContent(contentState);
            this.props.onChange &&
            this.props.onChange({value: editorState, dataLabel: this.props.dataLabel});
            this.setState({showHtml: false});
        } catch (e) {
            throw new Error('Wrong HTML!');
        }
    }

    onCancel = () => {
        const htmlContent = draftToHtml(convertToRaw(this.props.editorState.getCurrentContent()));
        this.setState({showHtml: false, htmlContent});
    }

    addColorPickerEvents = () => {
        const colorPicker: any = document.getElementsByClassName('rdw-colorpicker-wrapper');
        colorPicker && colorPicker[0] && colorPicker[0].addEventListener('click', this.addCubeEvents);
        const imageElement: any = colorPicker[0] ? colorPicker[0].childNodes[0].childNodes[0] : undefined;
        if (imageElement && imageElement.style.backgroundColor === '') {
            imageElement.style.backgroundColor = 'black';
        }
    }

    addCubeEvents = () => {
        setTimeout(() => {
            const colorPickerCubes: any = document.getElementsByClassName('rdw-colorpicker-cube');
            const cubeArray = Array.from(colorPickerCubes);
            cubeArray && cubeArray.length > 0 && cubeArray.forEach((cube: any) => {
                cube.addEventListener('click', this.onCubeClick(cube));
            });
        });
    }

    onCubeClick = (cube: any) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const colorPicker: any = document.getElementsByClassName('rdw-colorpicker-wrapper');
            const imageElement: any = colorPicker[0].childNodes[0].childNodes[0];
            imageElement.style.backgroundColor = cube.style.backgroundColor;
        };
    }

    addEvents = () => {
        const toolbar = document.getElementsByClassName('rdw-editor-toolbar');
        toolbar && toolbar[0] && toolbar[0].addEventListener('mousedown', this.onMouseDown);
    }

    onMouseDown = (e: any) => {
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
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseUp = (e: any) => {
        this.setState({dragging: false});
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove = (e: any) => {
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
        e.stopPropagation();
        e.preventDefault();
    }

    onDropDownClick = () => {
        this.setState({activeDropDown: !this.state.activeDropDown});
    }

    onHtmlClick = () => {
        this.setState({showHtml: !this.state.showHtml});
    }

    getCustomDropDown = () => {
        return (
            <CustomDropDown
                active={this.state.activeDropDown}
                onClick={this.onDropDownClick}
                editorState={this.props.editorState}
                personalizationTags={this.props.personalizationTags}
            />
        );
    }

    getToHtml = () => {
        return (
            <ConvertToHtml
                onClick={this.onHtmlClick}
            />
        );
    }

    getToolbar = () => {

        const options = this.props.options ? [...this.props.options] : [];
        options.includes('html') && options.splice(options.indexOf('html'), 1);

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
                blockType: {
                    className: `${styles.dropDown} ${styles.groupRight}`,
                },
                colorPicker: {
                    className: styles.option,
                    icon: colorIcon
                },
                emoji: {
                    className: `${styles.option} ${styles.emojiOption}`,
                    emojis,
                    icon: emojiIcon
                },
                fontFamily: {
                    className: styles.dropDown,
                },
                fontSize: {
                    className: `${styles.dropDown} ${styles.groupRight}`,
                    icon: textSizeIcon
                },
                history: {
                    className: styles.groupRight,
                    redo: { icon: redoIcon, className: styles.option },
                    undo: { icon: undoIcon, className: styles.option }
                },
                image: {
                    className: styles.option,
                    icon: imageIcon
                },
                inline: {
                    bold: { icon: boldIcon, className: styles.option },
                    className: styles.groupRight,
                    italic: { icon: italicIcon, className: styles.option },
                    options: [
                        'bold',
                        'italic',
                        'underline',
                        // 'strikethrough',
                        // 'monospace',
                        // 'superscript',
                        // 'subscript'
                    ],
                    underline: { icon: underlineIcon, className: styles.option }
                },
                link: {
                    className: styles.groupRight,
                    defaultTargetOption: '_self',
                    link: { icon: linkIcon, className: styles.option },
                    options: ['link', 'unlink'],
                    // showOpenOptionOnHover: false,
                    unlink: { icon: unlinkIcon, className: styles.option}
                },
                list: {
                    className: styles.groupLeft,
                    options: ['unordered', 'ordered'],
                    ordered: { icon: orderedIcon, className: styles.option },
                    unordered: { icon: unorderedIcon, className: styles.option }
                },
                options,
                remove: { icon: removeIcon, className: styles.option },
                textAlign: {
                    center: { icon: centerIcon, className: styles.option, },
                    className: styles.group,
                    justify: { icon: justifiedIcon, className: styles.option, },
                    left: { icon: leftIcon, className: styles.option, },
                    right: { icon: rightIcon, className: styles.option, }
                },
            }
        );
    }

    isEmptyObject = (obj: EditorState) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    }
}

export const CustomDropDown: React.StatelessComponent<IDropDownProps> = (props) => {

    const addTag = (value: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            e.stopPropagation();
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

    const arrow = !props.active ? styles.arrowDown : styles.arrowUp;

    return (
        <div
            className={`${styles.customContainer} ${styles.groupRight}`}
            onClick={props.onClick}
        >
            <div className={styles.tagsLabel}>
                <img src={hashtag} style={{verticalAlign: 'text-top'}} alt=""/>
                <div className={arrow} />
            </div>
            <div className={`${styles.tagsList} ${listClass}`}>
                {popullateTags()}
            </div>
        </div>
    );
};

export const ConvertToHtml: React.StatelessComponent<IToHtmlProps> = (props) => {

    return (
        <div className={styles.htmlContainer}>
            <div className={styles.customContainer} onClick={props.onClick}>
                <img src={codeIcon} alt="View Html" className={styles.codeImage}/>
            </div>
        </div>
    );
};
