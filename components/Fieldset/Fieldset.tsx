import * as React from 'react';

// import styles from './Fieldset.css';

export interface IFieldsetProps{

    /** Fieldset class */
    className?: string;

    /** override Fieldset styles */
    style?: {[key: string]: string};

    /** Fieldset children */
    children?: any;
}

export default class Fieldset extends React.Component<IFieldsetProps, {}>{

    public render(){

        return (
            <fieldset>
                {this.props.children};
            </fieldset>
        );

    }
}
