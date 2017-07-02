import * as React from 'react';

import styles from './H1.css';

import {IHeadingProps} from '../props';

class H1 extends React.Component<IHeadingProps, {}> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `h1-component ${styles.h1} ${className}`;

        return (
            <h1
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h1>
        );
    }
}

export default H1;
