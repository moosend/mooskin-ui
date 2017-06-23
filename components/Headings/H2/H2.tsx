import * as React from 'react';

import styles from './H2.css';

import {IHeadingProps} from '../props';

class H2 extends React.Component<IHeadingProps, {}> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `h2-component ${styles.h2} ${className}`;

        return (
            <h2
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h2>
        );
    }
}

export default H2;
