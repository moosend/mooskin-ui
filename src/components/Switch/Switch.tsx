import * as React from 'react';

import styles from './Switch.css';

export interface ISwitchProps {

    /** switch type */
    type?: string;

    /** switch class */
    className?: string;

    /** override switch styles */
    style?: {[key: string]: string};

    /** callback that is called when the switch changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

class Switch extends React.Component<ISwitchProps, void> {

    public static defaultProps = {
        className: '',
        style: {},
        type: 'checkbox'
    };

    public render(){

        const {style, className, type} = this.props;

        const labelClass = `switch-component ${styles.switch}`;
        const switchClasses = `switch-component ${styles.slider} ${styles.round} ${className}`;

        return (
            <label className={labelClass}>
                <input
                    onChange={this.onChange}
                    type={type}
                />
                <div
                    style={style}
                    className={switchClasses}
                />
            </label>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e);
        console.log(e.target.checked);
    }
}

export default Switch;
