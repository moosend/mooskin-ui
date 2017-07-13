import * as React from 'react';

import {IInputCallbackData} from '../_utils/types/commonTypes';

import styles from './Switch.css';

export interface ISwitchProps {

    /** override switch id */
    id?: string;

    /** override switch active label */
    onLabel?: string;

    /** override switch inactive label */
    offLabel?: string;

    /** override switch disabled label */
    disabledLabel?: string;

    /** provide to make the switch disabled */
    disabled?: boolean;

    /** wether the switch is on or off */
    on?: boolean;

    /** switch class */
    className?: string;

    /** what data is being used, you know on what field changes are made */
    dataLabel?: string;

    /** override switch styles */
    style?: {[key: string]: string|number};

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

}

class Switch extends React.Component<ISwitchProps, {}> {

    public static defaultProps = {
        className: '',
        disabledLabel: 'INCOMPLETE',
        offLabel: 'INACTIVE',
        onLabel: 'ACTIVE',
        style: {},
    };

    public render(){

        const {id, style, className, disabled} = this.props;

        const toggleClasses = this.props.on ? `${styles.onSwitch} ${styles.onSlider}` : styles.offSwitch;

        const disabledSwitch = disabled ? styles.disabledSwitch : '';

        const textClass = this.props.on ? styles.onText : styles.offText;

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
        this.props.onClick(e, {value: !this.props.on && !this.props.disabled, dataLabel: this.props.dataLabel});
    }

    private switchLabel = () => {
        if (this.props.disabled){
            return this.props.disabledLabel;
        } else if (!this.props.disabled && this.props.on) {
            return this.props.onLabel;
        } else {
            return this.props.offLabel;
        }
    }
}

export default Switch;
