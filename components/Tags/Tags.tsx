import * as React from 'react';

import styles from './Tags.css';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

export interface ITagsProps{

    /** id of the component */
    id?: string;

    /** tagged data */
    tags: string[];

    /** tags that are active e.g. used in filters */
    activeTags?: string[];

    /** validate input wether it should accept emails or add a custom validation */
    validateTag?: 'email' | ((tag: string) => boolean);

    /** input description (small italic bottom) */
    description?: string;

    /** status of the input, error or success */
    status?: 'error' | 'success';

    /** this is for validating the whole component within a Form */
    validate?: (data: IValidationCallbackData) => boolean;

    /** provide to make the tags component required within a Form */
    required?: boolean;

    /** source of data for type ahead completion */
    source?: (() => Promise<string[]>) | (() => string[]) | string[];

    /** limit number of items available on the source list */
    sourceLimit?: number;

    /** wether the tags should be deletable by backspace */
    deletable?: boolean;

    /** override tags styles */
    style?: React.CSSProperties;

    /** override tags class */
    className?: string;

    /** override single tag styles */
    tagStyles?: React.CSSProperties;

    /** override single tag classes */
    tagClasses?: string;

    /** tags input label */
    label?: string;

    /** place label on top of Input */
    labelLeft?: boolean;

    /** prevent submit on input blur */
    preventSubmit?: boolean;

    /** error message when invalid input type is passed */
    errorMessage?: string;

    /** input field placehonder */
    placeholder?: string;

    /** renders with different styles */
    alternate?: boolean;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** an array of possible delimiters, enter key is the default delimiter */
    delimiters?: Array<string | number>;

    /** maximum number of characters allowed */
    maxLength?: number;

    onAdd?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => string [] | void;

    onRemove?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData, index: number) => string [] | void;

    onTagClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData, index: number) => void;

    // onChange?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ITagProps{

    /** data to be tagged */
    tag?: string;

    /** renders with different styles */
    alternate?: boolean;

    /** override tags styles */
    style?: React.CSSProperties;

    /** override tags class */
    className?: string;

    /** applies active classes to tag */
    active?: boolean;

    onClickTag?: (e: React.MouseEvent<HTMLElement>) => void;

    onClickRemove: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ITagsState{
    value: string;
    activeItem: number;
    sourceList: string[];
    rawSourceList: string[];
    message: string;
}

export default class Tags extends React.Component<ITagsProps, ITagsState>{

    static defaultProps: Partial<ITagsProps> = {
        className: '',
        delimiters: ['Enter', 13], // 13 is the keyCode for Enter
        style: {},
        tags: []
    };

    static displayName = 'Tags';

    id: string;
    myInpRef = React.createRef<any>();

    constructor(props: ITagsProps){
        super(props);

        this.state = {
            activeItem: 0,
            message: '',
            rawSourceList: [],
            sourceList: [],
            value: ''
        };
    }

    componentDidMount(){

        const {source} = this.props;

        if (typeof source === 'function'){
            const result = source();

            if (!(result instanceof Array) && result.then){
                result.then((stringArray) => {
                    this.setState({rawSourceList: stringArray});
                });
            }else if (result instanceof Array && result.length){
                this.setState({rawSourceList: result});
            }else{
                throw new Error(
                    `source must either be an array of strings,
                    a function that returns an array of strings or
                    a function that returns a Promise that resolves into an array of strings!`
                );
            }

        }else if (source && source instanceof Array && source.length){
            this.setState({rawSourceList: source});
        }
    }

    render(){

        const tags = this.getTags();

        const source = this.state.value !== '' ? this.sourceList() : null;

        const cover = this.state.sourceList.length > 0 && this.state.value !== '' ? this.getCover() : null;

        const status = this.getStatus();
        const descStatus = this.getDescStatus();

        const message = this.getMessage();

        const description = this.props.description;

        const containerClasses = this.props.labelLeft ? styles.rowContainer : '';
        const labelClasses = this.props.labelLeft ? styles.labelLeft : '';

        const alternateContainer = this.props.alternate ? styles.alternateContainer : '';
        const alternateInput = this.props.alternate ? styles.alternateInput : '';
        const alternateInputContainer = this.props.alternate ? styles.alternateInputContainer : '';

        return(
            <div
                id={this.id}
                className={`${styles.container} ${containerClasses} ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.label && <div className={`${styles.label} ${labelClasses}`}>{this.props.label}</div>}
                <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1, flexShrink: 1}}>
                    <label className={`${styles.tags} ${alternateContainer} ${status}`}>
                        {tags}
                        <div className={`${styles.inputContainer} ${alternateInputContainer}`}>
                            <input
                                ref={this.myInpRef}
                                value={this.state.value}
                                className={`${styles.input} ${alternateInput}`}
                                placeholder={this.props.placeholder}
                                onChange={this.onHandleChange}
                                onKeyDown={this.onKeyDown}
                                onClick={this.removeSource}
                                onPaste={this.onPaste}
                                onBlur={this.onBlur()}
                                maxLength={this.props.maxLength}
                            />
                            {message}
                            {source}
                            {this.props.alternate && this.renderAddIcon()}
                        </div>
                        {cover}
                    </label>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            </div>
        );
    }

    getTags = () => {

        const tags = this.removeDuplicates();

        const onClickTag = (e: React.MouseEvent<HTMLElement>, value: string, index: number) => {
            this.props.onTagClick && this.props.onTagClick(e, {dataLabel: this.props.dataLabel, value}, index);
        };

        const clickableTag = this.props.onTagClick ? styles.clickableTag : '';

        return tags.map((value, i) => {

            const active = this.props.activeTags && this.props.activeTags.includes(value);

            return (
                <Tag
                    alternate={this.props.alternate}
                    tag={value}
                    key={i}
                    active={active}
                    onClickTag={(e) => onClickTag(e, value, i)}
                    onClickRemove={this.removeTag(i)}
                    className={`${clickableTag} ${this.props.tagClasses}`}
                    style={this.props.tagStyles}
                />
            );
        });
    }

    removeDuplicates = (tags?: string []) => {
        if (tags){
            return Array.from(new Set(tags));
        }
        return Array.from(new Set(this.props.tags));
    }

    onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value;

        if (this.shouldSubmitPaste(value)){
            this.setState({value: ''});
        } else {
            this.setState({value});
        }

        const {rawSourceList} = this.state;

        if (rawSourceList && rawSourceList.length){

            this.updateSourceList(value, rawSourceList);
        }
    }

    updateSourceList = (value: string, source: string[]) => {
        const sourceList: string[] = [];

        const limit = this.props.sourceLimit || 10;

        source.map((text, i) => {

            const sourceText = text.toLowerCase();

            const stateValue = value.toLowerCase();

            if (sourceText.startsWith(stateValue) && !this.props.tags.includes(text)){

                sourceList.push(text);
            }

        });

        this.setState({sourceList: sourceList.slice(0, limit), activeItem: 0});
    }

    onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const delimiters = this.props.delimiters && this.getConvertedDelimiters(this.props.delimiters);

        const tags: string[] = this.removeDuplicates(this.props.tags); // always copy here

        const key = e.key;
        const keyCode = e.keyCode;

        // console.log('Key: ' + e.key + ', KeyCode:' + e.keyCode);

        if (this.props.deletable && (key === 'Backspace' || keyCode === 8) && this.state.value === ''){

            e.preventDefault();

            const tag = tags[tags.length - 1];

            const validationTags =
            this.props.onRemove &&
            this.props.onRemove(e, {value: tag, dataLabel: this.props.dataLabel}, tags.length - 1);

            tags.pop();

            this.props.validate &&
            this.props.validate(
                {
                    dataLabel: this.props.dataLabel,
                    required: this.props.required,
                    value: validationTags || tags
                }
            );

        } else if (key === 'ArrowDown' || keyCode === 40){

            e.preventDefault();

            if (this.state.activeItem < this.state.sourceList.length - 1){
                this.setState({activeItem: this.state.activeItem + 1});
            }

        } else if (key === 'ArrowUp' || keyCode === 38){

            e.preventDefault();

            if (this.state.activeItem > 0){
                this.setState({activeItem: this.state.activeItem - 1});
            }

        } else if (delimiters && (delimiters.includes(key) || delimiters.includes(keyCode))){

            e.preventDefault();

            if (!tags.includes(this.state.value) && this.state.value !== ''){

                const tag = this.props.source && this.state.sourceList.length > 0 ?
                this.state.sourceList[this.state.activeItem] : this.state.value;

                const validity = this.checkValidity(tag);

                if (validity){
                    this.setState({value: '', sourceList: [], activeItem: 0});

                    const validationTags = this.props.onAdd &&
                    this.props.onAdd(e, {value: tag, dataLabel: this.props.dataLabel});

                    tags.push(tag);

                    if (this.props.status){
                        this.props.validate &&
                        this.props.validate(
                            {
                                dataLabel: this.props.dataLabel,
                                required: this.props.required,
                                value: validationTags || tags
                            }
                        );
                    }
                } else {
                    this.setState({message: this.props.errorMessage || 'Input type is invalid'});
                    setTimeout(() => {
                        this.setState({message: ''});
                    }, 3000);
                }

            } else {
                // const pos = tags.indexOf(this.state.value);
                // tags.splice(pos, 1, this.state.value);
                this.setState({value: ''});
                // this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});
            }
        }

    }

    checkValidity = (tag: string) => {
        const validation = this.props.validateTag;
        if (validation){
            if (typeof validation === 'string' && validation === 'email'){
                return this.checkIfEmail(tag);
            } else if (typeof validation === 'function' && typeof validation !== 'string'){
                return validation(tag);
            }
            return false;
        }
        return true;
    }

    checkIfEmail = (tag: string) => {
        // tslint:disable-next-line
        const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return re.test(tag);
    }

    onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {

        const text = e.clipboardData.getData('Text');

        const delimiters = this.props.delimiters;

        if (delimiters && this.shouldSubmitPaste(text)){

            let newTag: string[] = [];
            const tags: string[] = [];

            const charArray = text.split('');

            for (let i = 0 ; i < charArray.length ; i++){
                delimiters && delimiters.map((delimiter) => {
                    if (charArray[i] === delimiter && newTag.join('') !== ''){
                        // tags.push(newTag.join(''));
                        // newTag = [];
                        if (this.checkValidity(newTag.join('')) && !this.props.tags.includes(newTag.join(''))){
                            tags.push(newTag.join('').trim());
                            newTag = [];
                        } else {
                            newTag = [];
                        }
                    }
                });
                if (!(delimiters.includes(charArray[i])) && !(delimiters.includes(charArray[i].charCodeAt(0)))){
                    newTag.push(charArray[i]);
                }
                if (i === charArray.length - 1 && newTag.join('') !== '' && !delimiters.includes(charArray[i])){
                    if (this.checkValidity(newTag.join('')) && !this.props.tags.includes(newTag.join('').trim())){
                        tags.push(newTag.join('').trim());
                    }
                }

            }

            // if (tags.length === 0){
            const validationTags = this.props.onAdd &&
            this.props.onAdd(e, {value: this.removeDuplicates(tags), dataLabel: this.props.dataLabel});

            this.props.validate &&
            this.props.validate(
                {
                    dataLabel: this.props.dataLabel,
                    required: this.props.required,
                    value: validationTags || this.removeDuplicates(this.props.tags.concat(tags))
                }
            );
            // }

        }

    }

    shouldSubmitPaste = (value: string) => {

        const delimiters = this.props.delimiters;

        if (delimiters){

            const text = value.split('');

            for (const char of text) {
                for (const delimiter of delimiters) {
                    if (typeof delimiter === 'string' && char === delimiter){
                        return true;
                    } else if (typeof delimiter === 'number' && char.charCodeAt(0) === delimiter){
                        return true;
                    }
                }
            }
        }

        return false;
    }

    removeTag = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {

            const tag = this.removeDuplicates(this.props.tags)[index];

            const validationTags =
            this.props.onRemove &&
            this.props.onRemove(e, {value: tag, dataLabel: this.props.dataLabel}, index);

            const tags = this.removeDuplicates(this.props.tags);
            tags.splice(index, 1);

            this.props.validate &&
            this.props.validate(
                {
                    dataLabel: this.props.dataLabel,
                    required: this.props.required,
                    value: validationTags || tags
                }
            );
        };
    }

    sourceList = () => {

        const source = this.state.sourceList ? this.state.sourceList : [];

        const sourceList = source.map((text, i) => {

            const active = this.state.activeItem === i ? styles.active : '';

            return (
                <div
                    onClick={this.addTag(text)}
                    className={`${styles.sourceItem} ${active}`}
                    key={i}
                >
                    {text}
                </div>
            );
        });

        const alternateStyles = this.props.alternate ? styles.alternateSourceList : '';

        return (
            <div className={`${styles.sourceList} ${alternateStyles}`}>
                {sourceList}
            </div>
        );

    }

    addTag = (tag: string) => {

        return (e: React.MouseEvent<HTMLElement>) => {

            this.setState({value: ''});

            const validationTags =
            this.props.onAdd &&
            this.props.onAdd(e, {value: tag, dataLabel: this.props.dataLabel});

            if (this.props.status){
                this.props.validate &&
                this.props.validate(
                    {
                        dataLabel: this.props.dataLabel,
                        required: this.props.required,
                        value: validationTags || this.removeDuplicates(this.props.tags).concat(tag)
                    }
                );
            }

        };

    }

    getCover = () => {
        return <div onClick={this.removeSource} className={styles.cover} />;
    }

    onBlur = () => {
        if (!this.props.preventSubmit && !(this.state.sourceList.length > 0 && this.state.value !== '')){
            return(e: React.SyntheticEvent<HTMLElement>) => {

                const tags: string[] = this.removeDuplicates(this.props.tags);

                if (!tags.includes(this.state.value) && this.state.value !== ''){

                    const tag = this.props.source && this.state.sourceList.length > 0 ?
                    this.state.sourceList[this.state.activeItem] : this.state.value;

                    const validity = this.checkValidity(tag);

                    if (validity){
                        this.setState({value: '', sourceList: [], activeItem: 0});

                        const validationTags = this.props.onAdd &&
                        this.props.onAdd(e, {value: tag, dataLabel: this.props.dataLabel});
                        if (this.props.validate){
                            this.validateOnBlur(e, validationTags || this.removeDuplicates().concat(tag));
                        }
                    } else {
                        this.setState({message: this.props.errorMessage || 'Input type is invalid'});
                        setTimeout(() => {
                            this.setState({message: ''});
                        }, 3000);
                    }

                } else if (this.props.validate){
                    this.validateOnBlur(e);
                }
            };
        }
    }

    validateOnBlur = (e: React.SyntheticEvent<HTMLElement>, tags?: string[] | void) => {

        this.props.validate &&
        this.props.validate(
            {
                dataLabel: this.props.dataLabel,
                required: this.props.required,
                value: tags ? tags : this.removeDuplicates(this.props.tags)
            }
        );
    }

    getMessage = () => {
        const message = this.state.message;
        if (message !== ''){
            return <span className={styles.message}>{message}</span>;
        }
        return null;
    }

    removeSource = () => {
        this.myInpRef.current.focus();
        this.setState({sourceList: [], activeItem: -1});
    }

    getConvertedDelimiters = (delimiters: any) => {
        const newDelimiters: Array<string | number> = delimiters.map((delimiter: any) => {
            if (delimiter === ' ') {
                return delimiter;
            } else if (!isNaN(delimiter)) {
                return parseInt(delimiter, 10);
            } else if (typeof delimiter === 'string'){
                return delimiter.toLocaleLowerCase();
            } else {
                return delimiter;
            }
        });

        if (newDelimiters.includes('space') || newDelimiters.includes('spacebar') || newDelimiters.includes(' ')){
            !newDelimiters.includes(32) &&  newDelimiters.push(32);
        }
        if (newDelimiters.includes('enter')){
            !newDelimiters.includes(13) && newDelimiters.push(13);
        }
        if (newDelimiters.includes(',')){
            !newDelimiters.includes(188) && newDelimiters.push(188);
        }
        if (newDelimiters.includes('.')){
            !newDelimiters.includes(190) && newDelimiters.push(190);
        }

        return newDelimiters;
    }

    getStatus = () => {
        const tagsStatus = this.props.status && this.props.status;
        if (tagsStatus){
            if (tagsStatus === 'error'){
                return styles.error;
            } else if (tagsStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const tagsStatus = this.props.status && this.props.status;
        if (tagsStatus){
            if (tagsStatus === 'error'){
                return styles.descError;
            } else if (tagsStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    renderAddIcon = () => {

        const onClick = this.state.value !== '' && this.props.preventSubmit ? this.addTag(this.state.value) : undefined;

        return (
            <i onClick={onClick} className={`material-icons ${styles.add}`}>
                add
            </i>
        );
    }

}

export const Tag: React.StatelessComponent<ITagProps> = (props) => {

    const alternateTag = props.alternate ? styles.alternateTag : '';

    const onClickTag = (e: React.MouseEvent<HTMLElement>) => {
        props.onClickTag && props.onClickTag(e);
    };

    const onClickRemove = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        props.onClickRemove && props.onClickRemove(e);
    };

    const activeTag = props.active ? styles.activeTag : '';

    return (
        <div
            className={`${styles.tag} ${alternateTag} ${props.className} ${activeTag}`}
            style={props.style}
            onClick={onClickTag}
        >
            <div className={styles.tagText}>
                {props.tag}
            </div>
            <div onClick={onClickRemove} className={styles.closeContainer}>
                <i className={`material-icons ${styles.close}`}>
                    close
                </i>
            </div>
        </div>
    );
};

Tag.defaultProps = {
    className: '',
    style: {}
};

Tag.displayName = 'Tag';
