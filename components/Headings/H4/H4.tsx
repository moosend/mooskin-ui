import * as React from 'react';

import styles from './H4.css';

import {IHeadingProps} from '../props';

class H4 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h4-component ${styles.h4} ${className}`;

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

export default H4;
