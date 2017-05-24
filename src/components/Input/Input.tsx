import * as React from 'react';

import styles from './Input.css';

export interface IProps {

    /** override input styles */
    style?: {[key: string]: string};

}

class Input extends React.Component<IProps, {}> {

    public static defaultProps = {
        style: {}
    };

    public render(){

        const {style, children} = this.props;

        return (
            <input
                className={`input-component ${styles.input}`}
                style={style}
            >
                {children}
            </input>
        );
    }

}

export default Input;