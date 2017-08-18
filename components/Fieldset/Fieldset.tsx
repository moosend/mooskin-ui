import * as React from 'react';

import styles from './Fieldset.css';

export interface IFieldsetProps{

    /** fieldset id */
    id?: string;

    /** Fieldset legend */
    legend?: string;

    /** Fieldset class */
    className?: string;

    /** override Fieldset styles */
    style?: React.CSSProperties;

    /** Fieldset children */
    children?: any;
}

export default class Fieldset extends React.Component<IFieldsetProps, {}>{

    render(){

        const legend = this.props.legend ? {} : {display: 'none'};

        return (
            <fieldset
                id={this.props.id}
                className={`fieldset-component ${styles.fieldset} ${this.props.className}`}
                style={this.props.style}
            >
                <legend className={styles.legend} style={legend}>{this.props.legend}</legend>
                {this.props.children}
            </fieldset>
        );

    }
}
