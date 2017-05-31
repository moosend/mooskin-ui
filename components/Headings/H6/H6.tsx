import * as React from 'react';

import styles from './H6.css';

import {IHeadingProps} from '../props';

class H6 extends React.Component<IHeadingProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `h6-component ${styles.h6} ${className}`;

        return (
            <h6
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h6>
        );
    }
}

export default H6;
