import * as React from 'react';

import styles from './H5.css';

import {IHeadingProps} from '../props';

class H5 extends React.Component<IHeadingProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `h5-component ${styles.h5} ${className}`;

        return (
            <h5
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h5>
        );
    }
}

export default H5;
