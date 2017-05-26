import * as React from 'react';

import styles from './H3.css';

import {IHeadingProps} from '../../../types/commonTypes';

class H3 extends React.Component<IHeadingProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `button-component ${styles.h3} ${className}`;

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
