import * as React from 'react';

import styles from './Form.css';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import Button, {IButtonProps} from '../Button/Button';
import {ICheckBoxData, ICheckBoxProps} from '../Checkbox/Checkbox';
import {CheckboxGroup, Input, RadioGroup, Select, Switch, TextArea} from '../index/';
import {IRadioData, IRadioProps} from '../Radio/Radio';

export interface IFormProps{

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** Form children */
    children?: any;

    /** Form classname */
    className?: string;

    /** Form styles */
    style?: React.CSSProperties;

    /** callback data on submit */
    onSubmit?: (e: React.FormEvent<HTMLElement>, data: IInputCallbackData) => void;

    // /** Form action */
    // action?: string;

    // /** Form method */
    // method?: string;

    // /** Form enctype */
    // enctype?: string;

    // /** Form name */
    // name?: string;

}

export interface IFormGroupProps{

    /** Form children */
    children?: any;

    /** Form classname */
    className?: string;

    /** Form styles */
    style?: React.CSSProperties;

    /** wether the content should be aligned horizontaly */
    horizontal?: boolean;

}

export default class Form extends React.Component<IFormProps, {}>{

    public static FormGroup: React.StatelessComponent<IFormGroupProps>;

    public render(){

        const {style, className} = this.props;
        const form = this.assignPropsToChildren();

        return(
            <div style={style} className={`form-component ${styles.container}`}>
                <form
                    className={`form ${styles.form} ${className}`}
                    name={name}
                >
                     {form}
                    {/* {this.props.children} */}
                </form>
            </div>
        );
    }

    private onSubmit = (children: any) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            const data = this.getEssence(children);
            this.props.onSubmit && this.props.onSubmit(e, {value: data, dataLabel: this.props.dataLabel});
        };
    }

    private assignPropsToChildren = () => {
        const formElements: any = [];
        const buttonProps: Partial<IButtonProps> = {
            onClick: this.onSubmit(this.getChildren())
        };
        React.Children.map(this.props.children, (child, index) => {
            const keyProp: Partial<any & {key: number}> = {
                key: index,
            };
            if (React.isValidElement<IButtonProps>(child)){
                if (child.type === Button && child.props.type === 'submit'){
                    formElements.push(
                        React.cloneElement(child, {...keyProp, ...buttonProps})
                    );
                } else {
                    formElements.push(
                        React.cloneElement(child, keyProp)
                    );
                }
            }
        });

        return formElements;

    }

    private getChildren = () => {
        const formChildren: any = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)){
                formChildren.push(child);
            }
        });

        return formChildren;
    }

    private getEssence = (formChildren: any) => {
        let data: any = {};
        data = this.collectEssence(formChildren, data);
        return data;
    }

    private collectEssence = (formChildren: any, data: any) => {
        if (Array.isArray(formChildren)){
            formChildren.map((element: any) => {
                if (element.type === Input && element.props.value !== undefined && element.props.value !== ''){
                    data[element.props.dataLabel] = element.props.value;
                } else if (element.type === TextArea && element.props.value !== undefined){
                    data[element.props.dataLabel] = element.props.value;
                } else if (element.type === Switch && element.props.on !== undefined){
                    data[element.props.dataLabel] = element.props.on;
                } else if (element.type === Select && element.props.selected !== undefined){
                    data[element.props.dataLabel] = element.props.selected;
                } else if (element.type === RadioGroup){
                    const radios: IRadioData[] = [];
                    element.props.children.map((radio: React.ReactElement<IRadioProps>) => {
                        radios.push(radio.props);
                    });
                    data[element.props.dataLabel] = radios;
                } else if (element.type === CheckboxGroup){
                    const checkboxes: ICheckBoxData[] = [];
                    element.props.children.map((checkbox: React.ReactElement<ICheckBoxProps>) => {
                        checkboxes.push(checkbox.props);
                    });
                    data[element.props.dataLabel] = checkboxes;
                } else {
                    this.collectEssence(element, data);
                    // throw new Error('Elements used within the form are not supported');
                }
            });
        }
        if (formChildren.type === FormGroup){
            this.collectEssence(formChildren.props.children, data);
        }
        return data;
    }
}

export const FormGroup: React.StatelessComponent<IFormGroupProps> = (props) => {

    const alignment = !props.horizontal ? styles.vertical : styles.horizontal;

    return (
        <div style={props.style} className={`formgroup-component ${styles.container} ${alignment}`}>
            {props.children}
        </div>
    );
};
