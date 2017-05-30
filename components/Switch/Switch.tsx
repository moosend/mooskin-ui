import * as React from 'react';

import styles from './Switch.css';

export interface ISwitchProps {

    /** override switch id */
    id?: string;

    /** provide to make the switch disabled */
    disabled?: boolean;

    /** provide to make the switch required */
    required?: boolean;

    /** wether the Switch is on or off  */
    checked?: boolean;

    /** switch class */
    className?: string;

    /** override switch styles */
    style?: {[key: string]: string};

    /** callback that is called when the switch changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export interface ISwitchState {
    checked: boolean;
}

class Switch extends React.Component<ISwitchProps, ISwitchState> {

    public static defaultProps = {
        className: '',
        style: {}
    };

    constructor(props: ISwitchProps){
        super(props);
        this.state = {
            checked: this.props.checked || false
        };
    }

    public render(){

        const {id, style, className, disabled, required} = this.props;

        const checkedClasses = this.state.checked ? styles.on : styles.off;

        // const disabledSwitch = disabled ? styles.disabledSwitch : '';

        // const switchClasses = `switch-component ${styles.switch} ${disabledSwitch}  ${className}`;
        // const switchClasses = `switch-component ${styles.slider} ${styles.round}`;

        return (

            <div
                id={id}
                style={style}
                className={`${checkedClasses} ${className}`}
            >
                <input
                    checked={this.state.checked}
                    onChange={this.onChange}
                    disabled={disabled}
                    required={required}
                    type={'checkbox'}
                />
                <label>
                    <span />
                    <span />
                </label>
            </div>

        );
    }

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // this.setState({checked: e.target.checked});
        !this.props.disabled && this.setState((prevState, props) => ({checked: !prevState.checked}));
        this.props.onChange && this.props.onChange(e);
        console.log(e.target.checked);
    }
}

export default Switch;
