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

    /** wether the list item is expanded */
    expanded?: boolean;

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
    children?: React.ReactElement<IExpandedSectionProps> | React.ReactElement<IItemContentProps> |
        Array<React.ReactElement<IExpandedSectionProps> | React.ReactElement<IItemContentProps>>;
    // children?: any;

    onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;

    onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;

}

export interface IListState {
    hoverItem?: number;
    // expandedLists: number[];
}

export default class List extends React.Component<IListProps, IListState>{

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: IListProps){
        super(props);

        this.state = {
            // expandedLists: [],
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
                const {content, expandedSection} = child.props.children ?
                    this.getItemChildren(child.props.children, child.props.expanded || false, index) :
                    {content: child, expandedSection: null};
                if (child.props.expanded && !expandedSection){
                    throw new Error('No expanded section available to be expanded!');
                }
                // const onClick = expandedSection ? this.onListClick(index) : undefined;
                // child.props.expanded && this.setActiveState(index);
                // const expanded = child.props.expanded ? child.props.expanded
                //             : this.state.expandedLists.includes(index) ? true : false;
                const cursor = expandedSection ? {cursor: 'pointer'} : {};
                items.push(
                    <div style={{display: 'flex', flexDirection: 'column'}} key={index}>
                        <ListItem
                            expanded={child.props.expanded}
                            hovered={index === this.state.hoverItem}
                            className={child.props.className}
                            image={child.props.image}
                            description={child.props.description}
                            title={child.props.title}
                            style={{...cursor, ...child.props.style}}
                            hoverColor={child.props.hoverColor || this.props.hoverColor}
                            onMouseEnter={this.onItemEnter(index)}
                            onMouseLeave={this.onItemLeave}
                        >
                            {content}
                        </ListItem>
                        {expandedSection}
                    </div>
                );
            }
        });
        return items;
    }

    // onListClick = (index: number) => {
    //     return (e: React.MouseEvent<HTMLElement>) => {
    //         e.stopPropagation();
    //         if (this.state.expandedLists.includes(index)){
    //             const expandedLists = [...this.state.expandedLists];
    //             const i = expandedLists.indexOf(index);
    //             expandedLists.splice(i, 1);
    //             this.setState({expandedLists});
    //         } else {
    //             const expandedLists = [...this.state.expandedLists];
    //             expandedLists.push(index);
    //             this.setState({expandedLists});
    //         }
    //     };
    // }

    // setActiveState = (index: number) => {
    //     if (!this.state.expandedLists.includes(index)){
    //         const expandedLists = [...this.state.expandedLists];
    //         expandedLists.push(index);
    //         this.setState({expandedLists});
    //     }
    // }

    onItemEnter = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({hoverItem: index});
        };
    }

    onItemLeave = () => {
        this.setState({hoverItem: -1});
    }

    getItemChildren = (children: any, expaded: boolean, index: number) => {
        let content;
        let expandedSection;
        if (Array.isArray(children)){
            children.forEach((child, i) => {
                if (child.type === ExpandedSection){
                    // const expanded = this.state.expandedLists.includes(index) ? true : false;
                    expandedSection = (
                        <ExpandedSection expanded={expaded}>
                            {child.props.children}
                        </ExpandedSection>
                    );
                } else {
                    content = child;
                }
            });
        } else {
            if (children.type === ExpandedSection){
                // const expanded = this.state.expandedLists.includes(index) ? true : false;
                expandedSection = (
                    <ExpandedSection expanded={expaded}>
                        {children.props.children}
                    </ExpandedSection>
                );
            } else {
                content = children;
            }
        }
        return {content, expandedSection};
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

    const arrow = () => {
        return props.expanded ? (
            <div className={styles.arrow}>
                <div style={{position: 'relative', height: '100%', width: '100%'}}>
                    <div className={styles.innerArrow}/>
                    <div className={styles.borderArrow}/>
                </div>
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
            {arrow()}
            {getDetails()}
            {getContent()}
        </div>
    );
};

export interface IExpandedSectionProps {
    className?: string;
    style?: React.CSSProperties;
    expanded?: boolean;
}

export const ExpandedSection: React.StatelessComponent<IExpandedSectionProps> = (props) => {

    const display = props.expanded ? {display: 'block'} : {display: 'none'};

    return(
        <div
            className={`expanded-section-component ${styles.expandedSection} ${props.className}`}
            style={{...display, ...props.style}}
        >
            {props.children}
        </div>
    );
};

export interface IItemContentProps {
    className?: string;
    style?: React.CSSProperties;
}

export const ItemContent: React.StatelessComponent<IItemContentProps> = (props) => {

    return(
        <div
            className={`item-content-component ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

ListItem.defaultProps = {
    className: '',
    style: {}
};
