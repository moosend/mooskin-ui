import * as React from 'react';

import styles from './Switch.css';

export interface ISwitchProps {

    /** override switch id */
    id?: string;

    /** provide to make the switch disabled */
    disabled?: boolean;

    /** provide to make the switch required */
    required?: boolean;

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

        const {id, style, className, type, disabled, required} = this.props;

        const disabledSwitch = disabled ? styles.disabledSwitch : '';

        const labelClass = `switch-component ${styles.switch} ${disabledSwitch}`;
        const switchClasses = `switch-component ${styles.slider} ${styles.round} ${className}`;

        return (
            <label
                id={id}
                className={labelClass}
            >
                <input
                    onChange={this.onChange}
                    disabled={disabled}
                    required={required}
                    type={type}
                />
                <span
                    style={style}
                    className={switchClasses}
                />
            </label>
        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e);
        console.log(e.target.checked);
    }
}

export default Switch;
