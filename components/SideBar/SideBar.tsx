import * as React from 'react';

import styles from './SideBar.css';

import {SmallIconButton} from '../index';

export interface ISideBarProps{

    /** wether the sidebar should be toggable by a button */
    button?: boolean;

    /** sidebar width */
    width?: number;

    /** a secondary sidebar coming from a sidebar item */
    secondary?: boolean;

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
            width: this.props.button || this.props.secondary ? 0 : this.props.width ? this.props.width : 90
        };
    }

    public render(){

        const cover = this.getCover();

        const button = this.getButton();

        const sideBar = (
            <div
                className={`${styles.sidebar} ${this.props.className}`}
                style={{width: this.state.width, ...this.props.style}}
                onMouseLeave={this.toggle}
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
                        active={this.state.activeItem === index}
                        onClick={this.onClickItem(index)}
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

    // private getChildren = (secondary: any) => {
    //     const extraProps: Partial<ISideBarProps & {key: number}> = {
    //         width: this.props.width ? this.props.width * 3 : 200
    //     };
    //     return(React.cloneElement(secondary, extraProps));
    // }

    // private onItemHover = () => {
    //     this.setState({width: })
    // }

    private onClickButton = () => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            this.setState({width: this.props.width ? this.props.width : 90});
        };
    }

    private onClickItem = (itemIndex: number) => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            this.setState({activeItem: itemIndex});
        };
    }

    private getActiveItem(): number {
        let activeItem = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ISideBarItemProps>(value) && value.props.active){
                activeItem = index;
            }
        }

        return activeItem;
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

    const itsOver = () => {
        console.log('its above');
    };

    const activeItem = props.active ? styles.activeItem : '';

    return(
        <div
            onClick={props.onClick}
            onMouseEnter={itsOver}
            className={`item-component ${activeItem} ${styles.itemContainer} ${props.className}`}
            style={props.style}
        >
            <a onClick={this.itsOver} href={props.href} className={styles.anchor}>
                <img src={props.image} className={styles.image} />
                <span className={styles.itemLabel}>{props.label}</span>
            </a>
            <div>
                {props.children}
            </div>
        </div>
    );
};
