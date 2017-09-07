import * as React from 'react';

import styles from './Tags.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITagsProps{

    /** tagged data */
    tags: string[];

    /** source of data for type ahead completion */
    source?: string[];

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

    /** input field placehonder */
    placeholder?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** an array of possible delimiters, enter key is the default delimiter */
    delimiters?: string[];

    onChange?: (e: React.SyntheticEvent<HTMLElement>, data: IInputCallbackData) => void;
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
    tags: string[];
    value: string;
    activeItem: number;
    sourceList: string[];
}

export default class Tags extends React.Component<ITagsProps, ITagsState>{

    static defaultProps: Partial<ITagsProps> = {
        delimiters: ['Enter'], // 13 is the keyCode for Enter
    };

    id: string;

    constructor(props: ITagsProps){
        super(props);

        this.id = this.generateId();

        this.state = {
            activeItem: 0,
            sourceList: [],
            tags: [],
            value: ''
        };
    }

    componentWillMount(){
        this.setState({tags: this.props.tags});
    }

    render(){

        const tags = this.getTags(this.state.tags);

        const source = this.state.value !== '' ? this.sourceList() : '';

        return(
            <div className={`${styles.container} ${this.props.className}`} style={this.props.style}>
                <label className={styles.tags} htmlFor={this.id}>
                    {tags}
                    <div className={styles.inputContainer}>
                        <input
                            id={this.id}
                            value={this.state.value}
                            className={styles.input}
                            placeholder={this.props.placeholder}
                            onChange={this.onHandleChange}
                            onKeyDown={this.onKeyDown}
                        />
                        {source}
                    </div>
                </label>
            </div>
        );
    }

    getTags = (tags: string[]) => {
        const newTags: Array<React.ReactElement<ITagProps>> = [];

        tags.map((value, i) => {
            newTags.push(
                <Tag
                    tag={value}
                    key={i}
                    onClick={this.removeTag(i)}
                    className = {this.props.tagClasses}
                    style = {this.props.tagStyles}
                />
            );
        });

        return newTags;
    }

    onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});

        const limit = this.props.sourceLimit ? this.props.sourceLimit : 10;

        if (this.props.source){

            const sourceList: any[] = [];

            this.props.source.map((text, i) => {

                const sourceText = text.toLowerCase();

                const stateValue = e.target.value.toLowerCase();

                if (sourceText.startsWith(stateValue) && !this.state.tags.includes(text)){

                    sourceList.push(text);
                }

            });

            this.setState({sourceList: sourceList.slice(0, limit), activeItem: 0});
        }
    }

    onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const {delimiters} = this.props;

        const tags = this.state.tags;

        if (this.props.deletable && e.key === 'Backspace' && this.state.value === ''){

            tags.pop();

            this.setState({tags, value: ''});

            this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});

        } else if (e.key === 'ArrowDown'){

            if (this.state.activeItem < this.state.sourceList.length - 1){
                this.setState({activeItem: this.state.activeItem + 1});
            }

        } else if (e.key === 'ArrowUp'){

            if (this.state.activeItem > 0){
                this.setState({activeItem: this.state.activeItem - 1});
            }

        } else if (delimiters && delimiters.includes(e.key)){

            e.preventDefault();

            if (!tags.includes(this.state.value)){

                if (this.props.source && this.state.sourceList.length > 0){
                    tags.push(this.state.sourceList[this.state.activeItem]);
                } else {
                    tags.push(this.state.value);
                }

                this.setState({tags, value: ''});

                this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});

            } else {
                // const pos = tags.indexOf(this.state.value);
                // tags.splice(pos, 1, this.state.value);
                this.setState({tags, value: ''});
                // this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});
            }
        }

    }

    removeTag = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const tags = this.state.tags;

            tags.splice(index, 1);

            this.setState({tags});

            this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});
        };
    }

    sourceList = () => {

        const source = this.state.sourceList ? this.state.sourceList : [];

        const sourceList: any[] = [];

        source && source.map((text, i) => {

            const active = this.state.activeItem === i ? styles.active : '';

            sourceList.push(
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

    addTag = (text: string) => {

        return (e: React.MouseEvent<HTMLElement>) => {

            const tags = this.state.tags;

            tags.push(text);

            this.setState({tags, value: ''});

            this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});

        };

    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }
}

export const Tag: React.StatelessComponent<ITagProps> = (props) => {

    return (
        <div className={`${styles.tag} ${props.className}`} style={props.style}>
            {props.tag}
            <i onClick={props.onClick} className={`material-icons ${styles.close}`}>
                close
            </i>
        </div>
    );
};
