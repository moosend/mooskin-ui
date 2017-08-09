import * as React from 'react';

import styles from './TabbedContent.css';

export interface ITabbedContentProps {

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface ITabProps {

    /** if active */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface IHeaderProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;

    /** callback function when a header is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IContentProps {

    /** if active (inherited from parent) */
    active?: boolean;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: any;
}

export interface ITabbedContentState {
    activeTab?: number;
}

export default class TabbedContent extends React.Component<ITabbedContentProps, ITabbedContentState>{

    public static Tab: React.StatelessComponent<ITabProps>;
    public static Header: React.StatelessComponent<IHeaderProps>;
    public static Content: React.StatelessComponent<IContentProps>;

    constructor(props: ITabbedContentProps){
        super(props);

        this.state = {
            activeTab: this.getActiveTab()
        };
    }

    public render() {

        const {headers, contents} = this.riteOfRakshir();

        return(
            <div>
                <div>
                    {headers}
                </div>
                <div>
                    {contents}
                </div>
            </div>
        );
    }

    private riteOfRakshir = () => {

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const contents: Array<React.ReactElement<ITabProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {

            if (React.isValidElement<ITabProps>(child)){
                const {header, content} = this.assignPropsToChildren(child.props.children, index);

                headers.push(header);

                contents.push(content);
            }

        });

        return {headers, contents};
    }

    private assignPropsToChildren = (children: any, index: number) => {

        const headerProps: Partial<IHeaderProps & {key: number}> = {
            active: this.state.activeTab === index,
            key: index,
            onClick: this.onClickHeader(index, children[0])
        };

        const contentProps: Partial<IContentProps & {key: number}> = {
            active: this.state.activeTab === index,
            key: index
        };

        const header: any = React.cloneElement(children[0], headerProps);
        const content: any = React.cloneElement(children[1], contentProps);

        return {header, content};
    }

    private onClickHeader = (tabIndex: number, header: React.ReactElement<IHeaderProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeTab: tabIndex});
            header.props.onClick && header.props.onClick(e);
        };
    }

    private getActiveTab(): number {
        let activeTab = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ITabProps>(value) && value.props.active){
                activeTab = index;
            }
        }

        return activeTab;
    }
}

export const Tab: React.StatelessComponent<ITabProps> = (props) => {
    return(
        <div>
            {props.children}
        </div>
    );
};

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {
    return(
        <div onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export const Content: React.StatelessComponent<IContentProps> = (props) => {

    const displayClass = !props.active ? styles.invisible : styles.visible;

    return(
        <div className={`content-component ${displayClass} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};
