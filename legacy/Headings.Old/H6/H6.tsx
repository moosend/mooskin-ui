import * as React from 'react';

import styles from './H6.css';

import {IHeadingProps} from '../props';

class H6 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    static displayName = 'H6';

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h6-component ${styles.h6} ${className}`;

        return (
            <div
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </div>
        );
    }
}

export default H6;
