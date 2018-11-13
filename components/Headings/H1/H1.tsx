import * as React from 'react';

import styles from './H1.css';

import {IHeadingProps} from '../props';

class H1 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h1-component ${styles.h1} ${className}`;

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

export default H1;
