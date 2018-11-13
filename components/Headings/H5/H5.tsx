import * as React from 'react';

import styles from './H5.css';

import {IHeadingProps} from '../props';

class H5 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h5-component ${styles.h5} ${className}`;

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

export default H5;
