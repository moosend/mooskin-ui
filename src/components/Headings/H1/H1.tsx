import * as React from 'react';

import styles from './H1.css';

import {IHeaderProps} from '../../../types/commonTypes';

class H1 extends React.Component<IHeaderProps, void> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render() {

        const {id, className, style, children} = this.props;

        const classes = `button-component ${styles.h1} ${className}`;

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
