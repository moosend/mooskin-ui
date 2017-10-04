import * as React from 'react';

import styles from './List.css';

export interface IListProps {

    /** list class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>>;

}

export interface IListItemProps {

    /** listitem image */
    image?: string;

    /** listitem title */
    title?: string;

    /** listitem description */
    description?: string;

    /** listitem class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** listitem children */
    children?: any;
}

export default class List extends React.Component<IListProps, {}>{

    render(){

        const classes = `${styles.list} ${this.props.className}`;

        return(
            <div className={`list-component ${classes}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export const ListItem = (props: IListItemProps) => {

    const {className, description, image, style, title} = props;

    const getImage = () => {
        return image &&
        (
            <div className={styles.image}>
                <img src={image}/>
            </div>
        );
    };

    const getTitle = () => {
        const classes = props.children ? styles.duetTitle : styles.lone;
        return title || description ?
        (
            <div className={`${styles.titleContainer} ${classes}`}>
                {title && <span className={styles.title}>{title}</span>}
                {description && <span className={styles.description}>{description}</span>}
            </div>
        ) : null;
    };

    const getContent = () => {
        const classes = title || description ? styles.duetContent : styles.lone;
        return props.children &&
        (
            <div className={`${styles.content} ${classes}`}>
                {props.children}
            </div>
        );
    };

    return(
        <div className={`listitem-component ${styles.listItem} ${className}`} style={style}>
            {getImage()}
            {getTitle()}
            {getContent()}
        </div>
    );
};
