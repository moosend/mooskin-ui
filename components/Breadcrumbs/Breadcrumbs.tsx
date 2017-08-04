import * as React from 'react';

import styles from './Breadcrumbs.css';

export interface IBreadcrumbsGroupProps{
    /** BreadcrumbsGroup class */
    className?: string;

    /** children here can only be Breadcrumb elements */
    children?: Array<React.ReactElement<IBreadcrumbProps>> | React.ReactElement<IBreadcrumbProps>;
}

export interface IBreadcrumbProps{
    /** Breadcrumb class */
    className?: string;

    /** id of the breadcrumb */
    id: string;

    /** Breadcrumb title */
    title: string;

    /** active or not */
    active?: boolean;

    /** children here can be any elements */
    children?: any;

    /** callback when clicking on a breadcrumb */
    onClick?: (id: string) => void;
}

export interface IBreadcrumbBodyProps{
    /** BreadcrumbBody content */
    content: any;

    /** active or not */
    active?: boolean;
}

export default class BreadcrumbsGroup extends React.Component<IBreadcrumbsGroupProps, {}>{

    public static defaultProps: Partial<IBreadcrumbsGroupProps> = {
        className: ''
    };

    public static Breadcrumb: React.StatelessComponent<IBreadcrumbProps>;

    public render(){

        const {className} = this.props;

        return (
            <div className={`${styles.breadcrumbsGroup} ${className}`}>
                <div className={styles.breadcrumbsContainer}>{this.props.children}</div>
                <div>{this.renderBodies()}</div>
            </div>
        );
    }

    private renderBodies= () => {
        return React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement<IBreadcrumbProps>(child)){

                return <BreadcrumbBody content={child.props.children} active={child.props.active}/>;

            }else{
                throw new Error('<BreadcrumbGroup> element only accepts Breadcrumb elements as children');
            }
        });
    }
}

export const Breadcrumb: React.StatelessComponent<IBreadcrumbProps> = (props) => {

    const active = props.active ? styles.activeBreadcrumb : '';

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        props.onClick && props.onClick(props.id);
    };

    return (
        <div id={props.id} className={`${styles.breadcrumb} ${props.className} ${active}`} onClick={onClick}>
            <a href="javascript:void(0)">{props.title}</a>
        </div>
    );
};

export const BreadcrumbBody: React.StatelessComponent<IBreadcrumbBodyProps> = (props) => {

    const display = props.active ? 'block' : 'none';

    return (
        <div className={styles.breadcrumbBody} style={{display}}>
            {props.content}
        </div>
    );
};
