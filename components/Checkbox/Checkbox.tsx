import * as React from 'react';

import styles from './Checkbox.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';
import {H2} from '../index';

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

class CheckBoxGroup extends React.Component<ICheckBoxGroupProps, {}>{

    public static defaultProps = {
        className: '',
        style: {},
    };

    public static CheckBox: React.StatelessComponent<ICheckBoxProps>;

    private name: string;

    constructor(props: ICheckBoxGroupProps){
        super(props);

        this.name = this.generateName();
    }

    public render() {

        const {id, className, style, title} = this.props;

        const align = this.props.horizontal ? styles.horizontal : '';

        const checkBoxes = this.assignCheckBoxes();

        return (
            <div
                id={id}
                className={`checkboxgroup-component ${className}`}
                style={{...style}}
            >
                <H2>{title}</H2>
                <div className={align}>
                    {checkBoxes}
                </div>
            </div>
        );
    }

    private onClick = (data: {checked: boolean, value: string, label: string}) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onChange && this.props.onChange(e, {value: data, dataLabel: this.props.dataLabel});
        };
    }

    private assignCheckBoxes = () => {
        const checkBoxes: Array<React.ReactElement<ICheckBoxProps>> = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement<ICheckBoxProps>(child)){
                const checked = child.props.checked ? true : false;
                const extraProps: Partial<ICheckBoxProps & {key: number}> = {
                    horizontal: this.props.horizontal,
                    key: index,
                    name: this.name,
                    onClick: child.props.onClick ?
                            child.props.onClick :
                            this.onClick({checked, value: child.props.value, label: child.props.value}),
                    spacing: this.props.spacing
                };

                checkBoxes.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<CheckBoxGroup> element only accepts <CheckBox> elements as children');
            }
        });

        return checkBoxes;

    }

    private generateName = () => {
        return Date.now().toString();
    }
}

export const CheckBox: React.StatelessComponent<ICheckBoxProps> = (props) => {

    const disabledStyles = props.disabled ? styles.disabledCheckbox : '';
    const checked = props.checked ? true : false;
    const spacing = props.spacing ?
                    props.horizontal ?
                    {marginRight: `${props.spacing}px`} :
                    {marginBottom: `${props.spacing}px`} : {};
    const classes = `checkbox-component ${styles.checkbox} ${disabledStyles} ${props.className}`;

    const onCheckBoxClick = (data: {checked: boolean, value: string, label: string}) => {
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
                    type="checkbox"
                    value={props.value}
                    onClick={onCheckBoxClick({checked, value: props.value, label: props.value})}
                    disabled={props.disabled}
                    defaultChecked={checked}
                    className={'material-icons'}
                />
                <span>{props.label || props.value}</span>
                <br/>
                <i>{props.description}</i>
            </label>
        </div>
    );
};

export default CheckBoxGroup;
