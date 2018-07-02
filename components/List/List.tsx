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

    /** wether the list item is active to expand inner content */
    active?: boolean;

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

    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IListState {
    hoverItem?: number;
    activeLists: number[];
}

export default class List extends React.Component<IListProps, IListState>{

    static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: IListProps){
        super(props);

        this.state = {
            activeLists: [],
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
                    this.getItemChildren(child.props.children, index) : {content: null, expandedSection: null};
                const onClick = expandedSection ? this.onListClick(index) : undefined;
                child.props.active && this.setActiveState(index);
                const active = child.props.active ? child.props.active
                            : this.state.activeLists.includes(index) ? true : false;
                const cursor = expandedSection ? {cursor: 'pointer'} : {};
                items.push(
                    <div style={{display: 'flex', flexDirection: 'column'}} key={index}>
                        <ListItem
                            active={active}
                            hovered={index === this.state.hoverItem}
                            className={child.props.className}
                            image={child.props.image}
                            description={child.props.description}
                            title={child.props.title}
                            style={{...cursor, ...child.props.style}}
                            hoverColor={child.props.hoverColor || this.props.hoverColor}
                            onMouseEnter={this.onItemEnter(index)}
                            onMouseLeave={this.onItemLeave}
                            onClick={onClick}
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

    onListClick = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            if (this.state.activeLists.includes(index)){
                const activeLists = [...this.state.activeLists];
                const i = activeLists.indexOf(index);
                activeLists.splice(i, 1);
                this.setState({activeLists});
            } else {
                const activeLists = [...this.state.activeLists];
                activeLists.push(index);
                this.setState({activeLists});
            }
        };
    }

    setActiveState = (index: number) => {
        if (!this.state.activeLists.includes(index)){
            const activeLists = [...this.state.activeLists];
            activeLists.push(index);
            this.setState({activeLists});
        }
    }

    onItemEnter = (index: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({hoverItem: index});
        };
    }

    onItemLeave = () => {
        this.setState({hoverItem: -1});
    }

    getItemChildren = (children: any, index: number) => {
        let content;
        let expandedSection;
        if (Array.isArray(children)){
            children.forEach((child, i) => {
                if (child.type === ExpandedSection){
                    const active = this.state.activeLists.includes(index) ? true : false;
                    expandedSection = (
                        <ExpandedSection active={active}>
                            {child.props.children}
                        </ExpandedSection>
                    );
                } else {
                    content = child;
                }
            });
        } else {
            if (children.type === ExpandedSection){
                const active = this.state.activeLists.includes(index) ? true : false;
                expandedSection = (
                    <ExpandedSection active={active}>
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
        return props.active ? (
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
            onClick={props.onClick}
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
    active?: boolean;
}

export const ExpandedSection: React.StatelessComponent<IExpandedSectionProps> = (props) => {

    const display = props.active ? {display: 'block'} : {display: 'none'};

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
