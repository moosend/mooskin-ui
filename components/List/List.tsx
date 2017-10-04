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
        return (
            <div className={styles.image}>
                <img src={image}/>
            </div>
        );
    };

    const getTitle = () => {
        return title || description ?
        (
            <div className={`${styles.titleContainer}`}>
                {title && <span className={styles.title}>{title}</span>}
                {description && <span className={styles.description}>{description}</span>}
            </div>
        ) : null;
    };

    const getContent = () => {
        const classes = title || description ? '' : styles.lone;
        return props.children &&
        (
            <div className={`${styles.content} ${classes}`}>
                {props.children}
            </div>
        );
    };

    const getDetails = () => {
        const classes = !title || !description ? styles.loneImage : '';
        return image || title || description ?
        (
            <div className={`${styles.detailsContainer} ${classes}`}>
                {image && getImage()}
                {getTitle()}
            </div>
        ) : null;
    };

    return(
        <div className={`listitem-component ${styles.listItem} ${className}`} style={style}>
            {getDetails()}
            {getContent()}
        </div>
    );
};
