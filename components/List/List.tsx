import * as React from 'react';

import styles from './List.css';

export interface IListProps {

    /** list id */
    id?: string;

    /** list class */
    className?: string;

    /** color to be applied when an item is hovered */
    hoverColor?: string;

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

    /** inherited from parent */
    hovered?: boolean;

    /** color to be applied when this item is hovered (inherited by default) */
    hoverColor?: string;

    /** listitem class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** listitem children */
    children?: any;

    onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;

    onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IListState {
    hoverItem?: number;
}

export default class List extends React.Component<IListProps, IListState>{

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: IListProps){
        super(props);

        this.state = {
            hoverItem: -1
        };
    }

    render(){

        const classes = `${styles.list} ${this.props.className}`;

        return(
            <div className={`list-component ${classes}`} style={this.props.style} id={this.props.id}>
                {this.getItems()}
            </div>
        );
    }

    getItems = () => {
        const items: Array<React.ReactElement<IListItemProps>> = [];
        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<IListItemProps>(child)){
                items.push(
                    <ListItem
                        key={index}
                        hovered={index === this.state.hoverItem}
                        className={child.props.className}
                        image={child.props.image}
                        description={child.props.description}
                        title={child.props.title}
                        hoverColor={child.props.hoverColor || this.props.hoverColor}
                        onMouseEnter={this.onItemEnter(index)}
                        onMouseLeave={this.onItemLeave}
                    >
                        {child.props.children}
                    </ListItem>
                );
            }
        });
        return items;
    }

    onItemEnter = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({hoverItem: index});
        };
    }

    onItemLeave = () => {
        this.setState({hoverItem: -1});
    }
}

export const ListItem: React.StatelessComponent<IListItemProps> = (props) => {

    const {className, description, image, style, title} = props;

    const hoverColor = props.hoverColor && props.hovered ? {backgroundColor: props.hoverColor} : {};

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
        <div
            className={`listitem-component ${styles.listItem} ${className}`}
            style={{...style, ...hoverColor}}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {getDetails()}
            {getContent()}
        </div>
    );
};

ListItem.defaultProps = {
    className: '',
    style: {}
};
