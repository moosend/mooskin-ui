import * as React from 'react';

import styles from './H4.css';

import {IHeadingProps} from '../props';

class H4 extends React.Component<IHeadingProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    static displayName = 'H4';

    render() {

        const {id, className, style, children} = this.props;

        const classes = `h4-component ${styles.h4} ${className}`;

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

export default H4;
