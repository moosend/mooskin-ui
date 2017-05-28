import * as React from 'react';

import styles from './H4.css';

import {IHeadingProps} from '../props';

class H4 extends React.Component<IHeadingProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `button-component ${styles.h4} ${className}`;

        return (
            <h4
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </h4>
        );
    }
}

export default H4;
