import * as React from 'react';

import {IInputCallbackData} from '../_utils/types/commonTypes';

import styles from './Switch.css';

export interface ISwitchProps {

    /** override switch id */
    id?: string;

    /** override switch active label */
    on?: string;

    /** override switch inactive label */
    off?: string;

    /** override switch disabled label */
    deactivated?: string;

    /** provide to make the switch disabled */
    disabled?: boolean;

    /** wether the switch is running or not */
    running?: boolean;

    /** switch class */
    className?: string;

    /** what data is being used, you know on what field changes are made */
    dataLabel?: string;

    /** override switch styles */
    style?: {[key: string]: string};

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

}

class Switch extends React.Component<ISwitchProps, {}> {

    public static defaultProps = {
        className: '',
        deactivated: 'INCOMPLETE',
        off: 'INACTIVE',
        on: 'ACTIVE',
        style: {},
    };

    public render(){

        const {id, style, className, disabled} = this.props;

        const toggleClasses = this.props.running ? `${styles.onSwitch} ${styles.onSlider}` : styles.offSwitch;

        const disabledSwitch = disabled ? styles.disabledSwitch : '';

        const textClass = this.props.running ? styles.onText : styles.offText;

        const text = this.switchLabel();

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

    private onClick = (e: React.MouseEvent<HTMLElement>, data?: IInputCallbackData) => {
        !this.props.disabled &&
        this.props.onClick &&
        this.props.onClick(e, {value: this.props.running && !this.props.disabled, dataLabel: this.props.dataLabel});
    }

    private switchLabel = () => {
        if (this.props.disabled){
            return this.props.deactivated;
        } else if (!this.props.disabled && this.props.running) {
            return this.props.on;
        } else {
            return this.props.off;
        }
    }
}

export default Switch;
