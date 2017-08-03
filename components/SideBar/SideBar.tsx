import * as React from 'react';

import styles from './SideBar.css';

import {SmallIconButton} from '../index';

export interface ISideBarProps{

    /** wether the sidebar should be toggable by a button */
    button?: boolean;

    /** sidebar width */
    width: number;

    /** sidebar class */
    className?: string;

    /** override sidebar styles */
    style?: React.CSSProperties;

    /** sidebar children */
    children?: Array<React.ReactElement<ISideBarItemProps>> | React.ReactElement<ISideBarItemProps>;
}

export interface ISideBarItemProps{

    /** item href */
    href?: string;

    /** item label */
    label?: string;

    /** item image */
    image?: string;

    /** if active */
    active?: boolean;

    /** sidebar class */
    className?: string;

    /** override sidebar styles */
    style?: React.CSSProperties;

    /** callback function when item is clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** callback function when mouse enters the Item, mainly used to toggle secondary sidebars */
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** callback function when mouse leaves the item, mainly used to toggle secondary sidebars */
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** item children */
    children?: React.ReactElement<ISideBarProps>;

}

export interface ISideBarState {
    activeItem?: number;
    width: number;
}

export default class SideBar extends React.Component<ISideBarProps, ISideBarState>{

    public static defaultProps = {
        className: '',
        style: {},
    };

    public static Item: React.StatelessComponent<ISideBarItemProps>;

    constructor(props: ISideBarProps){

        super(props);

        this.state = {
            activeItem: this.getActiveItem(),
            width: this.props.button ? 0 : this.props.width
        };
    }

    public componentWillReceiveProps(nextProps: ISideBarProps) {
        this.setState({ width: nextProps.width });
    }

    public render(){

        const cover = this.getCover();

        const button = this.getButton();

        const sideBar = (
            <div
                className={`${styles.sidebar} ${this.props.className}`}
                style={{width: this.state.width, ...this.props.style}}
            >
                {this.getItems()}
                {cover}
            </div>
        );

        return(
            <div className={`sidebar-component`}>
                {button}
                {sideBar}
            </div>
        );

    }

    private getItems(){

        const items: Array<React.ReactElement<ISideBarItemProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<ISideBarItemProps>(child)){
                items.push(
                    <Item
                        key={index}
                        image={child.props.image}
                        label={child.props.label}
                        href={child.props.href}
                        active={this.state.activeItem === index}
                        onClick={this.onClickItem(index, child)}
                        onMouseEnter={child.props.onMouseEnter}
                        onMouseLeave={child.props.onMouseLeave}
                    >
                        {child.props.children}
                    </Item>
                );

            }else{
                throw new Error('<SideBar> only accepts <Item> elements as children');
            }
        });

        return items;
    }

    private onClickButton = () => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            this.setState({width: this.props.width});
        };
    }

    private onClickItem = (itemIndex: number, item: React.ReactElement<ISideBarItemProps>) => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            item.props.onClick && item.props.onClick(e);
            this.setState({activeItem: itemIndex});
        };
    }

    private getActiveItem() {
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ISideBarItemProps>(value) && value.props.active){
                return index;
            }
        }
    }

    private getCover = () => {
        if (this.props.button && this.state.width > 0){
            return (<div className={styles.cover} onClick={this.toggle}/>);
        } else {
            return '';
        }
    }

    private getButton = () => {
        if (this.props.button){
            return (
                <div>
                    <SmallIconButton icon="view headline" onClick={this.onClickButton()} className={styles.button} />
                </div>
            );
        } else {
            return '';
        }
    }

    private toggle = () => {
        this.setState({width: 0});
    }
}

export const Item: React.StatelessComponent<ISideBarItemProps> = (props) => {

    const activeItem = props.active ? styles.activeItem : '';

    return(
        <div
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={`item-component ${activeItem} ${styles.itemContainer} ${props.className}`}
            style={props.style}
        >
            <a href={props.href} className={styles.anchor}>
                <img src={props.image} className={styles.image} />
                <span>{props.label}</span>
            </a>
            <div>
                {props.children}
            </div>
        </div>
    );
};
