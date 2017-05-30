import * as React from 'react';

import styles from './Switch.css';

export interface ISwitchProps {

    /** override switch id */
    id?: string;

    /** provide to make the switch disabled */
    disabled?: boolean;

    /** wether the switch is running or not */
    running?: boolean;

    /** switch class */
    className?: string;

    /** override switch styles */
    style?: {[key: string]: string};

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}

class Switch extends React.Component<ISwitchProps, {}> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    public render(){

        const {id, style, className, disabled} = this.props;

        const toggleClasses = this.props.running ? `${styles.onSwitch} ${styles.onSlider}` : styles.offSwitch;

        const disabledSwitch = disabled ? styles.disabledSwitch : '';

        const textClass = this.props.running ? styles.onText : styles.offText;

        let text;

        if (this.props.disabled){
            text = 'INCOMPLETE';
        } else if (!this.props.disabled && this.props.running) {
            text = 'ACTIVE';
        } else {
            text = 'INACTIVE';
        }

        return (

            <div
                id={id}
                style={style}
                onClick={this.onClick}
                className={`switch-component ${toggleClasses} ${disabledSwitch} ${styles.switch} ${className}`}
            >
                <span className={`switch-component ${styles.slider}`}/>
                <label className={`switch-component ${styles.text} ${textClass}`}>{text}</label>
            </div>

        );
    }

    private onClick = (e: React.MouseEvent<HTMLElement>) => {
        !this.props.disabled &&
        this.props.onClick &&
        this.props.onClick(e);
    }
}

export default Switch;
