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
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** radio id attribute */
    id?: string;

    /** provide to make the radio disabled */
    disabled?: boolean;

    /** wether the radio is selected or not */
    selected?: boolean;

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

export interface IRadioState{
    data: IRadioData[];
}

export interface IRadioData{
    selected?: boolean;
    value?: string;
    label?: string;
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

        this.state = {
            data: this.setData()
        };
    }

    public render(){

        const {id, className, style, title} = this.props;

        const align = this.props.vertical ? '' : styles.vertical;

        return (
            <div
                id={id}
                className={`radiogroup-component ${className}`}
                style={{...style}}
            >
                <H2>{title}</H2>
                <div className={align}>
                    {this.assignRadios()}
                </div>
            </div>
        );
    }

    private onClick = (dataArray: {selected: boolean, value: string, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const data: IRadioData[] = this.state.data;
            data.forEach((radio, index) => {
                data[index] = {
                    label: radio.label,
                    selected: false,
                    value: radio.value
                };
            });
            this.setState({data});
            data.map((radio, index) => {
                if (radio.value === dataArray.value){
                    data[index] = {
                        label: dataArray.label,
                        selected: !dataArray.selected,
                        value: dataArray.value
                    };
                } else {
                    return {
                        radio
                    };
                }
            });
            this.setState({data});
            this.props.onChange && this.props.onChange(e, {value: data, dataLabel: this.props.dataLabel});
        };
    }

    private setData = () => {
        const data: IRadioData[] = [];
        React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<IRadioProps>(child)){
                data.push({
                    label: child.props.label,
                    selected: child.props.selected ? child.props.selected : false,
                    value: child.props.value
                });
            }
        });
        return data;
    }

    private assignRadios = () => {
        const {data} = this.state;
        const radios: Array<React.ReactElement<IRadioProps>> = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement<IRadioProps>(child)){
                const selected = data[index].selected === true ? true : false;
                const label = child.props.label ? child.props.label : child.props.value;
                const extraProps: Partial<IRadioProps & {key: number}> = {
                    key: index,
                    label: data[index].label,
                    name: this.name,
                    onClick: /** child.props.onClick ? child.props.onClick : */
                    this.onClick({selected, value: child.props.value, label}),
                    selected: data[index].selected,
                    spacing: this.props.spacing,
                    value: data[index].value,
                    vertical: this.props.vertical
                };

                radios.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<RadioGroup> element only accepts <Radio> elements as children');
            }
        });

        if (this.checkSelected(radios)){
            return radios;
        } else {
            throw new Error('Only one <Radio> element should have the selected prop');
        }

    }

    private checkSelected = (radios: Array<React.ReactElement<IRadioProps>>) => {
        let selected: number = 0;
        radios.forEach((radio: React.ReactElement<IRadioProps>) => {
            if (radio.props.selected){
                selected = selected + 1;
            }
        });
        if (selected > 1){
            return false;
        } else {
            return true;
        }
    }

    private generateName = () => {
        return Date.now().toString();
    }

}

export const Radio: React.StatelessComponent<IRadioProps> = (props) => {

    const disabledStyles = props.disabled ? styles.disabledRadio : '';
    const label = props.label ? props.label : props.value;
    const checkedStyles = !props.selected ? '' : styles.radioChecked;
    const selected = props.selected ? true : false;
    const spacing = props.spacing ?
                    props.vertical ?
                    {marginBottom: `${props.spacing}px`} :
                    {marginRight: `${props.spacing}px`} : {};
    const classes = `radio-component ${styles.radio} ${disabledStyles} ${props.className} ${checkedStyles}`;

    const onRadioClick = (data: {selected: boolean, value: string, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            !props.disabled && props.onClick && props.onClick(e, {value: data, dataLabel: props.dataLabel});
        };
    };

    return (
        <div
            htmlFor={props.id}
            className={classes}
            style={{...spacing, ...props.style}}
        >
            <label>
                <input
                    name={props.name}
                    type="radio"
                    value={props.value}
                    onClick={onRadioClick({selected, value: props.value, label})}
                    disabled={props.disabled}
                    defaultChecked={selected}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
