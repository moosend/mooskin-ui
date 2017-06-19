import * as React from 'react';

import {IInputCallbackData} from '../_utils/types/commonTypes';
import styles from './Radio.css';

export interface IRadioGroupProps {

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** group id attribute */
    id?: string;

    /** to specify which Radio is selected */
    selected?: string;

    /** RadioGroup class */
    className?: string;

    /** override RadioGroup styles */
    style?: {[key: string]: string};

    /** childrens must be a Radio Component */
    children?: Array<React.ReactElement<IRadioProps>> | React.ReactElement<IRadioProps>;

    /** Callback that fires when Radio Group state changes */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface IRadioProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** radio id attribute */
    id?: string;

    /** provide to make the radio disabled */
    disabled?: boolean;

    /** radio matches the selected prop from parent component */
    selected?: string;

    /** value for this option */
    value: string;

    /** radio label */
    label?: string;
}

export interface IRadioState {
    selected?: string;
}

export default class RadioGroup extends React.Component<IRadioGroupProps, IRadioState> {

    public static defaultProps = {
        className: '',
        style: {},
    };

    constructor(props: IRadioGroupProps){
        super(props);

        this.state = {
            selected: this.props.selected
        };
    }

    public render(){

        const {id, className, style} = this.props;

        const radios = this.assignRadios();

        return (
            <div
                id={id}
                className={className}
                style={style}
            >
                {radios}
            </div>
        );
    }

    private onClick = (value: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value, dataLabel: this.props.dataLabel});
            this.setState({selected: value});
        };
    }

    private assignRadios = () => {
        return React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<IRadioProps>(child)){
                const extraProps: Partial<IRadioProps> = {
                    onClick: this.onClick(child.props.value),
                    selected: this.state.selected
                };
                return (
                    <div>
                        {React.cloneElement(child, extraProps)}
                    </div>
                );
            }else{
                throw new Error('<RadioGroup> element only accepts <Radio> elements as children');
            }
        });
    }

}

export const Radio: React.StatelessComponent<IRadioProps> = (props) => {

    const labelStyles = props.id ? {cursor: 'pointer'} : {};
    const disabledStyles = props.disabled ? styles.disabledRadio : '';
    const checked = props.selected === props.value ? true : false;

    return (
        <div
            htmlFor={props.id}
            className={`radio-component ${styles.radio} ${disabledStyles}`}
        >
            <input
                id={props.id}
                name="radio"
                type="radio"
                value={props.value}
                onClick={props.onClick}
                disabled={props.disabled}
                defaultChecked={checked}
            />
            <label
                htmlFor={props.id}
                style={labelStyles}
            >
                {props.label || props.value}
            </label>
        </div>
    );
};
