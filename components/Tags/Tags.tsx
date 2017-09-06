import * as React from 'react';

import styles from './Tags.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ITagsProps{

    /** tagged data */
    source: string[];

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
    source: string[];
    value: string;
}

export default class Tags extends React.Component<ITagsProps, ITagsState>{

    id: string;

    constructor(props: ITagsProps){
        super(props);

        this.id = this.generateId();

        this.state = {
            source: [],
            value: ''
        };
    }

    componentWillMount(){
        this.setState({source: this.props.source});
    }

    render(){

        const tags = this.getTags(this.state.source);

        return(
            <div className={`${styles.container} ${this.props.className}`} style={this.props.style}>
                <label className={styles.tags} htmlFor={this.id}>
                    {tags}
                    <form onSubmit={this.onSubmit}>
                        <input
                            id={this.id}
                            value={this.state.value}
                            onChange={this.handleChange}
                            className={styles.input}
                            placeholder={this.props.placeholder}
                        />
                    </form>
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

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    }

    onSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const tags = this.state.source;

        if (!tags.includes(this.state.value)){

            tags.push(this.state.value);

            this.setState({source: tags, value: ''});

            this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});

        } else {
            // this.setState({value: ''});
            const pos = tags.indexOf(this.state.value);
            tags.splice(pos, 1, this.state.value);
            this.setState({source: tags, value: ''});
            this.props.onChange && this.props.onChange(e, {value: tags, dataLabel: this.props.dataLabel});
        }

    }

    removeTag = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const tags = this.state.source;

            tags.splice(index, 1);

            this.setState({source: tags});

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
