import * as React from 'react';

import styles from './Tags.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

type customValidation<T, U> = (tag: T) => U;

export interface ITagsProps{

    /** id of the component */
    id?: string;

    /** tagged data */
    tags: string[];

    /** validate input wether it should accept emails or add a custom validation */
    validation?: 'email' | customValidation<string, boolean>;

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

    /** submits the tag when input is blurred */
    submitOnBlur?: boolean;

    /** error message when invalid input type is passed */
    errorMessage?: string;

    /** input field placehonder */
    placeholder?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** an array of possible delimiters, enter key is the default delimiter */
    delimiters?: Array<string | number>;

    onAdd?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => void;

    onRemove?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData, index: number) => void;

    // onChange?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ITagProps{

    /** data to be tagged */
    tag?: string;

    /** override tags styles */
    style?: React.CSSProperties;

    /** override tags class */
    className?: string;

    onClick: (e: React.MouseEvent<HTMLElement>) => void;
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
        delimiters: ['Enter', 13], // 13 is the keyCode for Enter
        submitOnBlur: true
    };

    id: string;

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

        const tags = this.getTags(this.props.tags);

        const source = this.state.value !== '' ? this.sourceList() : '';

        const message = this.getMessage();

        // const cover = this.state.sourceList.length > 0 ? this.getCover() : '';

        return(
            <div className={`${styles.container} ${this.props.className}`} style={this.props.style} id={this.id}>
                {this.props.label && <div className={styles.label}>{this.props.label}</div>}
                <label className={styles.tags}>
                    {tags}
                    <div className={styles.inputContainer}>
                        <input
                            ref={this.id}
                            value={this.state.value}
                            className={styles.input}
                            placeholder={this.props.placeholder}
                            onChange={this.onHandleChange}
                            onKeyDown={this.onKeyDown}
                            onClick={this.removeSource}
                            onPaste={this.onPaste}
                            onBlur={this.onBlur()}
                        />
                        {message}
                        {source}
                    </div>
                </label>
                {/* {cover} */}
            </div>
        );
    }

    getTags = (tags: string[]) => {

        return tags.map((value, i) => {
            return (
                <Tag
                    tag={value}
                    key={i}
                    onClick={this.removeTag(i)}
                    className={this.props.tagClasses}
                    style={this.props.tagStyles}
                />
            );
        });
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
        const {delimiters} = this.props;

        const tags: string[] = this.props.tags; // always copy here

        const key = e.key;
        const keyCode = e.keyCode;

        // console.log('Key: ' + e.key + ', KeyCode:' + e.keyCode);

        if (this.props.deletable && (key === 'Backspace' || keyCode === 8) && this.state.value === ''){

            e.preventDefault();

            const tag = tags[tags.length - 1];

            this.props.onRemove &&
            this.props.onRemove(e, {value: tag, dataLabel: this.props.dataLabel}, tags.length - 1);

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

                    this.props.onAdd && this.props.onAdd(e, {value: [tag], dataLabel: this.props.dataLabel});
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
        const validation = this.props.validation;
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
                        tags.push(newTag.join(''));
                        newTag = [];
                    }
                });
                if (!(delimiters.includes(charArray[i])) && !(delimiters.includes(charArray[i].charCodeAt(0)))){
                    newTag.push(charArray[i]);
                }
                if (i === charArray.length - 1 && newTag.join('') !== '' && !delimiters.includes(charArray[i])){
                    tags.push(newTag.join(''));
                }

            }

            // for (let i = 0 ; i < tags.length ; i++){
            //     if (tags[i] === '' || tags[i] === ' '){
            //         tags.splice(i, 1);
            //     }
            // }

            this.props.onAdd && this.props.onAdd(e, {value: tags, dataLabel: this.props.dataLabel});

        }

        // delimiters.forEach((delimiter) => {
        //     tags = tags.map((tag) => {
        //         if (typeof delimiter === 'string'){
        //             return tag.replace(delimiter, '');
        //         } else if (typeof delimiter === 'number'){
        //             const del = String.fromCharCode(delimiter);
        //             return tag.replace(del, '');
        //         }
        //         return tag;
        //     });
        // });

        // console.log(tags);

        // for (let i = 0 ; i < text.length ; i++){
        //     delimiters && delimiters.forEach((delimiter) => {
        //         if (text.charAt(i) === delimiter){
        //             tags = text.split(text.charAt(i));
        //         } else if (text.charCodeAt(i) === delimiter){
        //             tags = text.split(text.charAt(i));
        //         }
        //     });
        // }

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

            const tag = this.props.tags[index];

            this.props.onRemove && this.props.onRemove(e, {value: [tag], dataLabel: this.props.dataLabel}, index);
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

        return (
            <div className={styles.sourceList}>
                {sourceList}
            </div>
        );

    }

    addTag = (tag: string) => {

        return (e: React.MouseEvent<HTMLElement>) => {

            this.setState({value: ''});

            this.props.onAdd && this.props.onAdd(e, {value: [tag], dataLabel: this.props.dataLabel});

        };

    }

    onBlur = () => {
        if (this.props.submitOnBlur){
            return(e: React.SyntheticEvent<HTMLElement>) => {

                const tags: string[] = this.props.tags;

                if (!tags.includes(this.state.value) && this.state.value !== ''){

                    const tag = this.props.source && this.state.sourceList.length > 0 ?
                    this.state.sourceList[this.state.activeItem] : this.state.value;

                    const validity = this.checkValidity(tag);

                    if (validity){
                        this.setState({value: '', sourceList: [], activeItem: 0});

                        this.props.onAdd && this.props.onAdd(e, {value: [tag], dataLabel: this.props.dataLabel});
                    } else {
                        this.setState({message: this.props.errorMessage || 'Input type is invalid'});
                        setTimeout(() => {
                            this.setState({message: ''});
                        }, 3000);
                    }

                }
            };
        }
    }

    getMessage = () => {
        const message = this.state.message;
        if (message !== ''){
            return <span className={styles.message}>{message}</span>;
        }
        return null;
    }

    // getCover = () => {
    //     return <div onClick={this.removeSource} className={styles.cover} />;
    // }

    removeSource = () => {
        this.setState({sourceList: []});
    }

}

export const Tag: React.StatelessComponent<ITagProps> = (props) => {

    return (
        <div className={`${styles.tag} ${props.className}`} style={props.style}>
            <div>
                {props.tag}
            </div>
            <i onClick={props.onClick} className={`material-icons ${styles.close}`}>
                close
            </i>
        </div>
    );
};
