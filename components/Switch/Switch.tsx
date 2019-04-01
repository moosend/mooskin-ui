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

    /** switch label */
    label?: string;

    /** switch label width */
    labelWidth?: number;

    /** switch class */
    className?: string;

    /** what data is being used, you know on what field changes are made */
    dataLabel?: string;

    /** override switch styles */
    style?: React.CSSProperties;

    /** callback that is called when the switch changes */
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

}

class Switch extends React.Component<ISwitchProps, {}> {

    static defaultProps = {
        className: '',
        disabledLabel: 'INCOMPLETE',
        offLabel: 'INACTIVE',
        onLabel: 'ACTIVE',
        style: {},
    };

    static displayName = 'Switch';

    render(){

        const {id, style, className, disabled, label} = this.props;

        const toggleClasses = this.props.on ? styles.onSlider : '';

        const disabledSwitch = disabled ? styles.disabledSwitch : '';

        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};

        return (

            <div className={styles.switchContainer}>
                {label && <span className={styles.label} style={spacing}>{label}</span>}
                <div
                    id={id}
                    style={style}
                    onClick={this.onClick}
                    className={`switch-component ${toggleClasses} ${disabledSwitch} ${styles.switch} ${className}`}
                >
                    <span className={`switch-component ${styles.slider}`}/>
                    {this.props.disabled ? this.renderDisabledContent() : this.renderSwitchContent()}
                </div>
            </div>

        );
    }

    renderDisabledContent = () => {
        return (
            <label className={`switch-component ${styles.text}`}>{this.props.disabledLabel}</label>
        );
    }

    renderSwitchContent = () => {

        const { onLabel, offLabel, on} = this.props;

        return (
            <div style={{display: 'flex', height: '100%'}} className={on ? styles.onContainer : styles.offContainer}>
                <label className={`switch-component ${styles.text} ${styles.onSwitch}`}>{onLabel}</label>
                <label className={`switch-component ${styles.text} ${styles.offSwitch}`}>{offLabel}</label>
            </div>
        );
    }

    onClick = (e: React.MouseEvent<HTMLElement>, data?: IInputCallbackData) => {
        !this.props.disabled &&
        this.props.onClick &&
        this.props.onClick(e, {value: !this.props.on && !this.props.disabled, dataLabel: this.props.dataLabel});
    }
}

export default Switch;
