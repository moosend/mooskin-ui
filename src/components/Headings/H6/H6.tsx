import * as React from 'react';

import styles from './H6.css';

import {IHeaderProps} from '../../../types/commonTypes';

class H6 extends React.Component<IHeaderProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `button-component ${styles.h6} ${className}`;

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
