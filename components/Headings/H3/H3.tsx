import * as React from 'react';

import styles from './H3.css';

import {IHeadingProps} from '../props';

class H3 extends React.Component<IHeadingProps, {}> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `h3-component ${styles.h3} ${className}`;

        return (
            <h3
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h3>
        );
    }
}

export default H3;
