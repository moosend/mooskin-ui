import * as React from 'react';

import styles from './Tags.css';

import {Input} from '../index';

export interface ITagsProps{
    source: string[];
}

export interface ITagProps{
    tag?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ITagsState{
    source: string[];
    value: string;
}

export default class Tags extends React.Component<ITagsProps, ITagsState>{

    constructor(props: ITagsProps){
        super(props);

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
            <div className={styles.tags}>
                {tags}
                <form onSubmit={this.onSubmit}>
                    <Input value={this.state.value} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    }

    onSubmit = (e: React.ChangeEvent<HTMLElement>) => {
        e.preventDefault();

        const tags = this.state.source;

        tags.push(this.state.value);

        this.setState({source: tags, value: ''});
    }

    getTags = (tags: string[]) => {
        const newTags: Array<React.ReactElement<ITagProps>> = [];

        tags.map((value, i) => {
            newTags.push(
                <Tag tag={value} key={i} onClick={this.removeTag(i)}/>
            );
        });

        return newTags;
    }

    removeTag = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const tags = this.state.source;

            tags.splice(index);

            this.setState({source: tags});
        };
    }
}

export const Tag: React.StatelessComponent<ITagProps> = (props) => {

    return (
        <div className={styles.tag}>
            {props.tag}
            <div onClick={props.onClick}>
                X
            </div>
        </div>
    );
};
