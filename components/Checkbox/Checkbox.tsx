import * as React from 'react';

import styles from './Checkbox.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';
import {H2} from '../Headings';

export interface ICheckBoxGroupProps {

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** group id attribute */
    id?: string;

    /** group title attribute */
    title?: string;

    /** horizontal align Checkboxes */
    horizontal?: boolean;

    /** Spacing between Checkboxes */
    spacing?: number;

    /** CheckboxGroup class */
    className?: string;

    /** override CheckboxGroup styles */
    style?: {[key: string]: string};

    /** childrens must be a Checkbox Component */
    children?: Array<React.ReactElement<ICheckBoxProps>> | React.ReactElement<ICheckBoxProps>;

    /** Callback that fires when Checkbox Group state changes */
    onChange?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;
}

export interface ICheckBoxProps {
    onClick?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** Checkbox id attribute */
    id?: string;

    /** provide to make the Checkbox disabled */
    disabled?: boolean;

    /** Checkbox matches the selected prop from parent component */
    checked?: boolean;

    /** value for this Checkbox */
    value: string;

    /** horizontal align Checkboxes */
    horizontal?: boolean;

    /** Spacing Checkbox */
    spacing?: number;

    /** Checkbox class */
    className?: string;

    /** name identifier for Checkbox */
    name?: string;

    /** override Checkbox styles */
    style?: {[key: string]: string};

    /** Checkbox label */
    label?: string;

    /** Checkbox description */
    description?: string;
}

export interface ICheckBoxState{
    data: ICheckBoxData[];
}

export interface ICheckBoxData{
    checked?: boolean;
    value?: string;
    label?: string;
}

export default class CheckBoxGroup extends React.Component<ICheckBoxGroupProps, ICheckBoxState>{

    public static defaultProps = {
        className: '',
        style: {},
    };

    public static CheckBox: React.StatelessComponent<ICheckBoxProps>;

    private name: string;

    constructor(props: ICheckBoxGroupProps){
        super(props);

        this.name = this.generateName();

        this.state = {
            data: this.setData()
        };
    }

    public render() {

        const {id, className, style, title} = this.props;

        const headingStyle = title ? {} : {display: 'none'};

        const align = this.props.horizontal ? styles.horizontal : '';

        return (
            <div
                id={id}
                className={`checkboxgroup-component ${className}`}
                style={{...style}}
            >
                <H2 style={headingStyle} >{title}</H2>
                <div className={align}>
                    {this.assignCheckBoxes()}
                </div>
            </div>
        );
    }

    private onClick = (dataArray: {checked: boolean, value: string, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            const data: ICheckBoxData[] = this.state.data;
            data.map ((checkbox, index) => {
                if (checkbox.value === dataArray.value){
                    data[index] = {
                        checked: !dataArray.checked,
                        label: dataArray.label,
                        value: dataArray.value
                    };
                } else {
                    return {checkbox};
                }
            });
            this.setState({data});
            this.props.onChange && this.props.onChange(e, {value: data, dataLabel: this.props.dataLabel});
        };
    }

    private setData = () => {
        const data: ICheckBoxData[] = [];
        React.Children.map(this.props.children, (child) => {
            if (React.isValidElement<ICheckBoxProps>(child)){
                data.push({
                    checked: child.props.checked ? child.props.checked : false,
                    label: child.props.label,
                    value: child.props.value
                });
            }
        });
        return data;
    }

    private assignCheckBoxes = () => {
        const {data} = this.state;
        const checkBoxes: Array<React.ReactElement<ICheckBoxProps>> = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement<ICheckBoxProps>(child)){
                const checked = data[index].checked === true ? true : false;
                const label = child.props.label ? child.props.label : child.props.value;
                const extraProps: Partial<ICheckBoxProps & {key: number}> = {
                    checked: data[index].checked,
                    horizontal: this.props.horizontal,
                    key: index,
                    label: data[index].label,
                    name: this.name,
                    onClick: /** child.props.onClick ? child.props.onClick : */
                            this.onClick({checked, value: child.props.value, label}),
                    spacing: this.props.spacing,
                    value: data[index].value
                };

                checkBoxes.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<CheckBoxGroup> element only accepts <CheckBox> elements as children');
            }
        });

        if (this.checkDuplicateValues()){
            return checkBoxes;
        } else {
            throw new Error('<CheckBox> elements must not have duplicate values');
        }

    }

    private checkDuplicateValues = () => {
        const values: string[] = [];
        let duplicates: number = 0;
        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<ICheckBoxProps>(child)){
                values.push(child.props.value);
            }
        });
        values.forEach((valueOne) => {
            values.forEach((valueTwo) => {
                if (valueOne === valueTwo){
                    duplicates = duplicates + 1;
                }
            });
        });
        if (duplicates > values.length){
            return false;
        } else {
            return true;
        }

    }

    private generateName = () => {
        return Date.now().toString();
    }
}

export const CheckBox: React.StatelessComponent<ICheckBoxProps> = (props) => {

    const generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    };

    const disabledStyles = props.disabled ? styles.disabledCheckbox : '';
    const label = props.label ? props.label : props.value;
    const checked = props.checked ? true : false;
    const checkedStyles = !props.checked ? '' : styles.checkboxChecked;
    const spacing = props.spacing ?
                    props.horizontal ?
                    {marginRight: `${props.spacing}px`} :
                    {marginBottom: `${props.spacing}px`} : {};
    const classes = `checkbox-component ${styles.checkbox} ${disabledStyles} ${props.className} ${checkedStyles}`;

    const genId = generateId();

    const onCheckBoxClick = (data: {checked: boolean, value: string, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            !props.disabled && props.onClick && props.onClick(e, {value: data, dataLabel: props.dataLabel});
        };
    };

    return (
        <div
            // htmlFor={props.id}
            className={classes}
            style={{...spacing, ...props.style}}
        >
            <input
                id={genId}
                name={props.name}
                type="checkbox"
                value={props.value}
                onClick={onCheckBoxClick({checked: !checked, value: props.value, label})}
                disabled={props.disabled}
                defaultChecked={checked}
                className={'material-icons'}
            />
            <label htmlFor={genId}>
                <span>{label}</span>
            </label>
            <br/>
            <i>{props.description}</i>
        </div>
    );
};
