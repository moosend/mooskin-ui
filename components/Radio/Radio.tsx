import * as React from 'react';

import {IInputCallbackData} from '../_utils/types/commonTypes';
import {H2} from '../index';
import styles from './Radio.css';

export interface IRadioGroupProps {

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** group id attribute */
    id?: string;

    /** group title attribute */
    title?: string;

    /** to specify which Radio is selected */
    selected?: string;

    /** vertical align radios */
    vertical?: boolean;

    /** Spacing between radios */
    spacing?: number;

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

    /** value for this radio */
    value: string;

    /** Spacing radios */
    spacing?: number;

    /** Radio class */
    className?: string;

    /** vertical align radios */
    vertical?: boolean;

    /** name identifier for radio */
    name?: string;

    /** override Radio styles */
    style?: {[key: string]: string};

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

    public static Radio: React.StatelessComponent<IRadioProps>;

    private name: string;

    constructor(props: IRadioGroupProps){
        super(props);

        this.name = this.generateName();
    }

    public render(){

        const {id, className, style, title} = this.props;

        const radios = this.assignRadios();

        return (
            <div
                id={id}
                className={`radiogroup-component ${className}`}
                style={{...style}}
            >
                <H2>{title}</H2>
                {radios}
            </div>
        );
    }

    private onClick = (value: string) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value, dataLabel: this.props.dataLabel});
        };
    }

    private assignRadios = () => {
        return React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<IRadioProps>(child)){
                const extraProps: Partial<IRadioProps> = {
                    name: this.name,
                    onClick: this.onClick(child.props.value),
                    selected: this.props.selected,
                    spacing: this.props.spacing,
                    vertical: this.props.vertical,
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

    private generateName = () => {
        return (new Date()).getTime().toString();
    }

}

export const Radio: React.StatelessComponent<IRadioProps> = (props) => {

    const disabledStyles = props.disabled ? styles.disabledRadio : '';
    const checked = props.selected === props.value ? true : false;
    const spacing = props.spacing ?
                    props.vertical ?
                    {marginBottom: `${props.spacing}px`} :
                    {marginRight: `${props.spacing}px`} : {};
    const classes = `radio-component ${styles.radio} ${disabledStyles} ${props.className}`;
    const align = props.vertical ? {} : {float: 'left'};

    const onRadioClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e);
    };

    return (
        <div
            htmlFor={props.id}
            className={classes}
            style={{...spacing, ...align, ...props.style}}
        >
            <label>
                <input
                    name={props.name}
                    type="radio"
                    value={props.value}
                    onClick={onRadioClick}
                    disabled={props.disabled}
                    defaultChecked={checked}
                />
                <span>{props.label || props.value}</span>
            </label>
        </div>
    );
};
