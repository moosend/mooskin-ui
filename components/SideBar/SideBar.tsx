import * as React from 'react';

import styles from './SideBar.css';

import {SmallIconButton} from '../index';

export interface ISideBarProps{

    /** wether the sidebar should be toggable by a button */
    button?: boolean;

    /** sidebar on/off */
    display: boolean;

    /** sidebar class */
    className?: string;

    /** callback function when sidebar Button is clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

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
    display: boolean;
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
            display: false
        };
    }

    public componentWillMount(){
        this.setState({display: this.props.display});
    }

    public componentWillReceiveProps(nextProps: ISideBarProps) {
        this.setState({ display: nextProps.display});
    }

    public render(){

        const cover = this.getCover();

        const button = this.getButton();

        const display = this.state.display ? styles.sidebarOn : styles.sidebarOff;

        const sideBar = (
            <div
                className={`${styles.sidebar} ${this.props.className} ${display}`}
                style={this.props.style}
            >
                {this.getItems()}
            </div>
        );

        return(
            <div className={`sidebar-component`}>
                {button}
                {sideBar}
                {cover}
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
                        style={child.props.style}
                        className={child.props.className}
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
            this.props.onClick && this.props.onClick(e);
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
        if (this.props.button && this.state.display === true){
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
        this.setState({display: false});
    }
}

export const Item: React.StatelessComponent<ISideBarItemProps> = (props) => {

    const activeItem = props.active ? styles.activeItem : '';
    const arrow = props.image ? styles.arrowImg : styles.arrowNoImg;

    return(
        <div
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={`item-component ${styles.itemContainer} ${props.className}`}
            style={props.style}
        >
            <div className={`${styles.arrow} ${arrow}`} />
            <a
                href={props.href}
                className={`${styles.anchor} ${activeItem}`}
            >
                <img src={props.image} className={styles.image} />
                <span>{props.label}</span>
            </a>
            <div>
                {props.children}
            </div>
        </div>
    );
};
