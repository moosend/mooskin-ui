import * as React from 'react';

import styles from './Topbar.css';

export interface ITopbarProps{

    /** id of the component */
    id?: string;

    /** override topbar classes */
    className?: string;

    /** override topbar styles */
    style?: React.CSSProperties;

    children?: any;

}

export default class Topbar extends React.Component<ITopbarProps, {}> {

    render(){
        return (
            <div className={`topbar-component ${styles.topbar} ${this.props.className}`} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

}
