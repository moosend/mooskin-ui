import * as React from 'react';

import styles from './H6.css';

import {IHeadingProps} from '../props';

class H6 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h6-component ${styles.h6} ${className}`;

        return (
            <p
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </p>
        );
    }
}

export default H6;
