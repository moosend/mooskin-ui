import * as React from 'react';

import styles from './H3.css';

import {IHeadingProps} from '../props';

class H3 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h3-component ${styles.h3} ${className}`;

        return (
            <div
                id={id}
                className={classes}
                style={style}
            >
                {children}
            </div>
        );
    }
}

export default H3;
