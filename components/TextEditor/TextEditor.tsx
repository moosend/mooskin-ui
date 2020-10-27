import * as React from 'react';

import { ContentState, convertToRaw, EditorState, Modifier } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Button from '../Button/Button';

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

    /** removes section separators from the editor */
    noSeparators?: boolean;

    /** wether the toolbar should show on editor focus */
    toolbarOnFocus?: boolean;

    /** toolbar options */
    toolbar?: {[key: string]: any};

    /** wether the toolbar should be draggable */
    draggable?: boolean;

    /** rich editor value */
    editorState: EditorState;

    /** returns callback value with html */
    returnWithHtml?: boolean;

    /** editor label */
    label?: string;

    /** hides open link in new window option on the link dialog */
    hideTargetSetting?: boolean;

    /** onChange callback for rich editor type of textarea */
    onChange?: (data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;
}

// export interface IEditorValueProps {
//     editorState: EditorState;
//     rawState: RawDraftContentState;
// }

export interface ITextEditorState {
    dragging: boolean;
    pos: IPosition;
    relPos: IRelateivePos;
    activeDropDown: boolean;
    showHtml: boolean;
    htmlContent: string;
    editorState: EditorState;
    // rawState: RawDraftContentState;
    width: number;
    windowsWidth: number;
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
        height: 400,
        hideTargetSetting: false,
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
            'history',
            'remove',
            'html'
        ],
        style: {},
        toolbarOnFocus: true,
        toolbarPos: 'top'
    };

    static displayName = 'TextEditor';

    // static getDerivedStateFromProps(nextProps: ITextEditorProps, prevState: ITextEditorState){
    //     return {
    //         editorState: EditorState.createWithContent(convertFromRaw(nextProps.editorState)),
    //         htmlContent: draftToHtml(nextProps.editorState),
    //         rawState: nextProps.editorState
    //     };
    // }

    editorRef = React.createRef<any>();

    mounted: boolean;

    constructor(props: ITextEditorProps){
        super(props);

        this.state = {
            activeDropDown: false,
            dragging: false,
            editorState: this.props.editorState,
            htmlContent: '',
            pos: {
                bottom: this.props.toolbarPos === 'bottom' ? -80 : undefined,
                left: 0,
                top: this.props.toolbarPos === 'top' ? -90 : undefined
            },
            // rawState: this.props.editorState,
            relPos: {left: 0, top: 0, bottom: 0},
            showHtml: false,
            width: this.getParentWidth(),
            windowsWidth: window.innerWidth
        };
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateWidth);
        const {draggable, toolbarOnFocus} = this.props;
        this.addColorPickerEvents();
        draggable && toolbarOnFocus && this.addEvents();
        const toolbar = document.getElementsByClassName('rdw-editor-toolbar')[0];
        if (toolbar){
            const toolbarStyle = toolbar.getAttribute('style');
            toolbarOnFocus && document.getElementsByClassName('rdw-editor-toolbar')[0]
                        .setAttribute('style', `${toolbarStyle} box-shadow: 1px 10px 20px rgba(0,0,0,.2);`);
        }
        // const contentState = convertFromRaw(this.props.editorState);
        const {editorState} = this.props;
        const rawState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawState);
        this.setState({editorState, width: this.getParentWidth(), htmlContent});
        this.mounted = true;
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

    componentWillUnmount(){
        this.mounted = false;
    }

    componentWillReceiveProps(nextProps: ITextEditorProps){

        const rawState = convertToRaw(nextProps.editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawState);

        this.mounted && this.setState({
            editorState: nextProps.editorState,
            htmlContent
        });
    }

    render() {

        const {draggable, height, label, toolbarClassName, toolbarOnFocus, width} = this.props;

        const display = label ? {display: 'block'} : {display: 'none'};

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

        this.initializeEmoji();
        !document.getElementById('rdw-separator-1') && !this.props.noSeparators && this.addSeparators();

        return (
            <div
                id={this.props.id}
                style={{width: this.state.width, position: 'relative'}}
                className={`mooskin-text-editor ${styles.editorContainer}`}
                ref={this.editorRef}
            >
                {this.state.activeDropDown && <div onClick={this.onDropDownClick} className={styles.overlay}/>}
                <label className={styles.editorLabel} style={display}>{this.props.label}</label>
                <Editor
                    editorState={this.state.editorState}
                    // contentState={this.state.rawState}
                    onEditorStateChange={this.onEditorStateChange}
                    // onContentStateChange={this.onContentStateChange}
                    wrapperClassName={`${wrapperClasses} ${this.props.wrapperClassName}`}
                    wrapperStyle={this.props.wrapperStyle}
                    editorClassName={`${styles.editor} ${this.props.editorClassName}`}
                    editorStyle={{...editorEditHtml, ...editorStyles}}
                    toolbarOnFocus={this.props.toolbarOnFocus}
                    toolbarClassName={`${styles.toolbar} ${absoluteToolbar} ${dragClass} ${toolbarClassName}`}
                    toolbarStyle={toolbarStyles}
                    toolbar={toolbar}
                    toolbarCustomButtons={customToolbarButtons}
                    onBlur={() => this.mounted && this.onBlur()}
                    hideTargetSetting={this.props.hideTargetSetting}
                />
                <textarea
                    className={styles.textArea}
                    value={this.state.htmlContent}
                    onChange={this.onTextAreaChange}
                    style={{width: this.state.width, ...editHtmlStyles}}
                />
                <div className={styles.buttonGroup} style={editHtmlStyles}>
                    <Button style={{margin: 3}} onClick={this.onAccept}>Accept</Button>
                    <Button style={{margin: 3}} inverseStyle onClick={this.onCancel}>Cancel</Button>
                </div>
            </div>
        );
    }

    addSeparators = () => {
        let index = 1;
        const {options} = this.props;
        const toolbar = document.getElementsByClassName('rdw-editor-toolbar');
        const separator = document.createElement('div');
        separator.className = styles.separator;
        separator.id = `rdw-separator-${index}`;
        const elementsArray = toolbar[0] ? Array.from(toolbar[0].children) : [];
        if (!options || (options && !options.includes('/'))){
            elementsArray.forEach((element) => {
                toolbar[0] && toolbar[0].insertBefore(separator.cloneNode(), toolbar[0].children[index]);
                index = index + 2;
            });
        } else if (options && options.includes('/')){
            const separatorPos: number[] = [];
            options.forEach((option, i) => {
                option === '/' && separatorPos.push(i);
            });
            separatorPos.forEach((pos) => {
                toolbar[0] && toolbar[0].insertBefore(separator.cloneNode(), toolbar[0].children[pos]);
            });
        }
    }

    initializeEmoji = () => {
        let emojiDiv: any = null;
        const toolbarElements: HTMLCollectionOf<any> = document.getElementsByClassName('rdw-option-wrapper');
        const elementsArray = Array.from(toolbarElements);
        elementsArray.forEach((element) => {
            if (element.className.includes('emojiOption')){
                emojiDiv = element;
            }
        });
        const arrow = `<div class=${styles.arrowDown} />`;
        // emojiDiv && emojiDiv.children && emojiDiv.children.push(arrow);
        if (emojiDiv !== null && Array.from(emojiDiv.children).length === 1){
            const image = emojiDiv.innerHTML;
            emojiDiv.innerHTML = image + arrow;
        }
        // emojiDiv !== null && emojiDiv.appendChild(arrow);
    }

    onEditorStateChange = (editorState: EditorState) => {

        const rawState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawState);

        // const newHTML = this.addLink(htmlContent);
        // const contentBlock = htmlToDraft(newHTML);
        this.mounted && this.setState({editorState, htmlContent});
        const value = this.props.returnWithHtml ? {editorState, htmlContent} : editorState;
        this.props.onChange &&
        this.props.onChange({value, dataLabel: this.props.dataLabel});
    }

    // onContentStateChange = (rawState: RawDraftContentState) => {
    //     const htmlContent = draftToHtml(rawState);
    //     const newHTML = this.addLink(htmlContent);
    //     this.setState({htmlContent: newHTML, rawState});
    //     // this.props.onChange &&
    //     // this.props.onChange({value: rawState, dataLabel: this.props.dataLabel});
    // }

    onBlur = () => {
        this.setState({activeDropDown: false});

        const rawState = convertToRaw(this.state.editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawState);

        const newHTML = this.addLink(htmlContent);
        const contentBlock = htmlToDraft(newHTML);
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({htmlContent: newHTML});

        const value = this.props.returnWithHtml ? {editorState, htmlContent: newHTML} : editorState;

        this.props.onChange &&
        this.props.onChange({value, dataLabel: this.props.dataLabel});

        // this.props.onChange &&
        // this.props.onChange({value: this.state.rawState, dataLabel: this.props.dataLabel});
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
            // this.props.onChange &&
            // this.props.onChange({dataLabel: this.props.dataLabel, value: editorState});
            this.setState({editorState, showHtml: false});
        } catch (e) {
            throw new Error('Wrong HTML!');
        }
    }

    onCancel = () => {
        // const htmlContent = draftToHtml(convertToRaw(this.props.editorState.getCurrentContent()));
        this.setState({showHtml: false});
    }

    addLink = (htmlContent: string) => {
        const ancestor = document.createElement('div');
        ancestor.innerHTML = htmlContent;
        const descendents = ancestor && ancestor.getElementsByTagName('*') || [];

        for (let index = 0; index < descendents.length; index++) {
            const element = descendents[index];
            if (element.tagName !== 'A' && !element.children.length){

                const stringArray = element && element.textContent && element.textContent.split(' ');
                const result = stringArray && stringArray.map((word: string) => {
                    const style = element.getAttribute('style') ? `style="${element.getAttribute('style')}"` : '';
                    if (this.isURL(word)){
                        return `<a ${style} href="${word}">${word}</a>`;
                    }
                    return word;
                }).join(' ');
                element.innerHTML = result || '';
            } else if (element.tagName !== 'A' && element.children.length) {
                for (let i = 0; i < element.childNodes.length; i++){
                    if (element.childNodes[i].nodeName === '#text'){
                        const stringArray = (element.childNodes[i].textContent as any).split(' ');
                        const result = stringArray && stringArray.map((word: string) => {
                            if (this.isURL(word)){
                                return `<a href="${word}">${word}</a>`;
                            }
                            return word;
                        }).join(' ');
                        const newElement = document.createElement('span');
                        newElement.removeAttribute('style');
                        newElement.innerHTML = result;
                        element.replaceChild(newElement, element.childNodes[i]);
                    }
                }
            }
        }

        return ancestor.innerHTML;
    }

    isURL = (str: string) => {
        const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
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
                editorState={this.state.editorState}
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

    getParentWidth = () => {
        const parent = this.editorRef.current && this.editorRef.current.parentNode;
        const width = parent && parent.offsetWidth;
        return width ? width : null;
    }

    updateWidth = () => {
        const width = window.innerWidth - this.state.windowsWidth;
        this.setState({width: this.state.width + width, windowsWidth: window.innerWidth});
    }

    getToolbar = () => {

        const options = this.props.options ? [...this.props.options] : [];
        options.includes('html') && options.splice(options.indexOf('html'), 1);
        options.forEach((option, i) => {
            if (option === '/'){
                options.splice(i, 1);
            }
        });

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
                    className: styles.dropDown,
                },
                colorPicker: {
                    icon: colorIcon
                },
                emoji: {
                    className: styles.emojiOption,
                    emojis,
                    icon: emojiIcon
                },
                fontFamily: {
                    className: styles.dropDown,
                },
                fontSize: {
                    className: styles.dropDown,
                    icon: textSizeIcon
                },
                history: {
                    className: styles.group,
                    redo: { icon: redoIcon, className: styles.option },
                    undo: { icon: undoIcon, className: styles.option }
                },
                image: {
                    className: styles.group,
                    icon: imageIcon
                },
                inline: {
                    bold: { icon: boldIcon, className: styles.option },
                    className: styles.group,
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
                    className: styles.group,
                    defaultTargetOption: '_self',
                    link: { icon: linkIcon, className: styles.option },
                    options: ['link', 'unlink'],
                    // showOpenOptionOnHover: false,
                    unlink: { icon: unlinkIcon, className: styles.option}
                },
                list: {
                    className: styles.group,
                    options: ['unordered', 'ordered'],
                    ordered: { icon: orderedIcon, className: styles.option },
                    unordered: { icon: unorderedIcon, className: styles.option }
                },
                options,
                remove: {
                    className: styles.group,
                    icon: removeIcon
                },
                textAlign: {
                    center: { icon: centerIcon, className: styles.option, },
                    className: styles.dropDown,
                    dropdownClassName: styles.alignDropdown,
                    inDropdown: true,
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
            className={`${styles.customContainer}`}
            onClick={props.onClick}
            title="Personalization Tags"
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

CustomDropDown.displayName = 'CustomDropDown';

export const ConvertToHtml: React.StatelessComponent<IToHtmlProps> = (props) => {

    return (
        <div className={styles.htmlContainer}>
            <div className={styles.customContainer} onClick={props.onClick}>
                <img src={codeIcon} alt="View Html" className={styles.codeImage}/>
            </div>
        </div>
    );
};

ConvertToHtml.displayName = 'ConvertToHtml';
