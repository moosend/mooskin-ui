import * as React from 'react';

import styles from './SideBar.css';

import {SmallIconButton} from '../index';

export interface ISideBarProps{

    /** wether the sidebar should be toggable by a button */
    button?: boolean;

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
    label: string;

    /** item image */
    image?: string;

    /** image when item is active */
    imageOn?: string;

    /** if active */
    active?: boolean;

    /** sidebar class */
    className?: string;

    /** override sidebar styles */
    style?: React.CSSProperties;

    /** callback function when mouse enters the Item, mainly used to toggle secondary sidebar */
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** callback function when mouse leaves the item, mainly used to toggle secondary sidebar */
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** callback function when item is clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** item children */
    children?: React.ReactElement<ISideBarProps>;

}

export interface ISecondaryProps{

    /** wether the sidebar should be displayed or not */
    display?: boolean;

    /** sidebar class */
    className?: string;

    /** override sidebar styles */
    style?: React.CSSProperties;

    /** sidebar children */
    children?: Array<React.ReactElement<ISideBarItemProps>> | React.ReactElement<ISideBarItemProps>;
}

export interface ISideBarState {
    activeItem?: number;
    display: boolean;
    secondaryDisplay?: boolean;
    smallDisplay?: boolean;
    // secondaryActive?: number;
}

export default class SideBar extends React.Component<ISideBarProps, ISideBarState>{

    public static defaultProps = {
        className: '',
        style: {},
    };

    public static Item: React.StatelessComponent<ISideBarItemProps>;
    public static Secondary: React.StatelessComponent<ISecondaryProps>;

    constructor(props: ISideBarProps){

        super(props);

        this.state = {
            activeItem: this.getActiveItem(),
            display: false,
            // secondaryActive: this.getActiveSecondary(),
            secondaryDisplay: false,
            smallDisplay: false
        };
    }

    public componentWillMount(){
        this.setState(this.getInitialState());
    }

    // public componentWillReceiveProps(nextProps: ISideBarProps) {
    //     this.setState({ display: nextProps.display});
    // }

    public render(){

        const cover = this.getCover();

        const button = this.getButton();

        const smallDisplay = this.state.smallDisplay ? styles.smallOn : styles.smallOff;

        const display = this.state.display ? styles.sidebarOn : styles.sidebarOff;

        const sideBar = (
            <div
                className={`${styles.sidebar} ${this.props.className} ${display} ${smallDisplay}`}
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

    private getInitialState = () => {
        return {
            display: this.props.button ? false : true,
            smallDisplay: false
        };
    }

    private getItems(){

        const items: Array<React.ReactElement<ISideBarItemProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<ISideBarItemProps>(child)){

                const secondary = child.props.children ? this.getSecondary(child.props.children) : '';

                if (child.props.children){
                    items.push(
                        <Item
                            key={index}
                            image={child.props.image}
                            imageOn={child.props.imageOn}
                            label={child.props.label}
                            href={child.props.href}
                            active={this.state.activeItem === index}
                            onClick={this.onClickItem(index, child)}
                            onMouseEnter={this.toggleSecondary}
                            onMouseLeave={this.toggleSecondary}
                            style={child.props.style}
                            className={child.props.className}
                        >
                            {secondary || child.props.children}
                        </Item>
                    );
                } else {
                    items.push(
                        <Item
                            key={index}
                            image={child.props.image}
                            imageOn={child.props.imageOn}
                            label={child.props.label}
                            href={child.props.href}
                            active={this.state.activeItem === index}
                            onClick={this.onClickItem(index, child)}
                            style={child.props.style}
                            className={child.props.className}
                        >
                            {secondary || child.props.children}
                        </Item>
                    );
                }

            }else{
                throw new Error('<SideBar> only accepts <Item> elements as children');
            }
        });

        return items;
    }

    private getSecondary = (secondary: React.ReactElement<ISideBarProps>) => {
        if (React.isValidElement<ISideBarProps>(secondary)){
            return (
                <Secondary
                    className={secondary.props.className}
                    style={secondary.props.style}
                    display={this.state.secondaryDisplay}
                >
                    {secondary.props.children}
                    {/* {secondary.props.children && this.getSecondaryItems(secondary.props.children)} */}
                </Secondary>
            );
        }
    }

    // private getSecondaryItems = (items: ISideBarItemProps[]) => {

    //     const secondaryItems: any[] = [];

    //     items.forEach((item: ISideBarItemProps, index: number) => {
    //         if (React.isValidElement<ISideBarItemProps>(item)){
    //             secondaryItems.push(
    //                 <Item
    //                     key={index}
    //                     image={item.image}
    //                     label={item.label}
    //                     href={item.href}
    //                     style={item.style}
    //                     className={item.className}
    //                 >
    //                     {item.children}
    //                 </Item>
    //             );
    //         }
    //     });

    //     return secondaryItems;

    // }

    private onClickButton = () => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            this.setState({display: true, smallDisplay: true});
        };
    }

    private onClickItem = (itemIndex: number, item: React.ReactElement<ISideBarItemProps>) => {
        return (e: React.MouseEvent<HTMLDivElement>) => {
            item.props.onClick && item.props.onClick(e);
            this.setState({activeItem: itemIndex});
        };
    }

    // private onClickSecondaryItem = (itemIndex: number, item: React.ReactElement<ISideBarItemProps>) => {
    //     return (e: React.MouseEvent<HTMLDivElement>) => {
    //         item.props.onClick && item.props.onClick(e);
    //         this.setState({activeItem: itemIndex});
    //     };
    // }

    private getActiveItem() {
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ISideBarItemProps>(value) && value.props.active){
                return index;
            }
        }

    }

    private getCover = () => {
        const coverDisplay = this.coverClasses();
        return <div className={`${styles.cover} ${coverDisplay}`} onClick={this.toggle}/>;
    }

    private coverClasses = () => {
        if (this.props.button && this.state.display){
            return styles.coverOn;
        } else if (this.state.display && this.state.smallDisplay){
            return styles.coverSmall;
        } else {
            return '';
        }
    }

    private getButton = () => {
        const buttonDisplay = this.props.button ? styles.buttonOn : '';
        return (
            <div>
                <SmallIconButton
                    icon="view headline"
                    onClick={this.onClickButton()}
                    className={`${styles.button} ${buttonDisplay}`}
                />
            </div>
        );
    }

    private toggle = () => {
        this.setState({display: false, smallDisplay: false});
    }

    private toggleSecondary = () => {
        this.setState({secondaryDisplay: !this.state.secondaryDisplay});
    }
}

export const Item: React.StatelessComponent<ISideBarItemProps> = (props) => {

    const getImage = () => {
        if (!props.active){
            return props.image;
        } else if (props.active){
            return props.imageOn ? props.imageOn : props.image;
        }
    };

    const activeItem = props.active ? styles.activeItem : '';
    const arrow = props.children ? styles.arrow : '';
    const arrowStyle = props.image ? styles.arrowImg : styles.arrowNoImg;

    return(
        <div
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={`item-component ${styles.itemContainer} ${props.className}`}
            style={props.style}
        >
            <div className={`${arrow} ${arrowStyle}`} />
            <a
                href={props.href}
                className={`${styles.anchor} ${activeItem}`}
            >
                <img src={getImage()} className={styles.image} />
                <span>{props.label}</span>
            </a>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export const Secondary: React.StatelessComponent<ISecondaryProps> = (props) => {

    const display = props.display ? styles.secondaryOn : styles.sidebarOff;

    return(
        <div
            className={`item-component ${styles.sidebar} ${styles.secondary} ${display} ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
};
