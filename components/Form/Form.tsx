import * as React from 'react';

import styles from './Form.css';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import Button, {IButtonProps} from '../Button/Button';
import CheckboxGroup from '../Checkbox';
import DatePicker from '../DatePicker';
import FileUpload from '../File';
import Input from '../Input';
import RadioGroup from '../Radio';
import Select from '../Select';
import Switch from '../Switch';
import Tags from '../Tags';
import TextArea from '../TextArea';

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

    /** validate form callback function (returns dataLabel of the unvalidated component) */
    validate?: (dataLabel: string) => void;

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

    static FormGroup: React.StatelessComponent<IFormGroupProps>;

    render(){

        const {style, className} = this.props;
        const form = this.assignPropsToChildren();

        return(
            <div style={style} className={`form-component ${styles.container}`}>
                <form
                    className={`form ${styles.form} ${className}`}
                    name={name}
                >
                     {form}
                </form>
            </div>
        );
    }

    assignPropsToChildren = () => {
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
                }
            }
            if (React.isValidElement<IFormGroupProps>(child)){

                if (child.type === FormGroup){

                    const elements = child.props.children && this.formGroupButtons(child.props.children);

                    formElements.push(
                        <FormGroup
                            key={index}
                            horizontal={child.props.horizontal}
                            style={child.props.style}
                            className={child.props.className}
                        >
                            {elements || child.props.children}
                        </FormGroup>
                    );
                }
            }
        });

        return formElements;

    }

    formGroupButtons = (group: any) => {

        const elements: any = [];

        const buttonProps: Partial<IButtonProps> = {
            onClick: this.onSubmit(this.getChildren())
        };

        if (Array.isArray(group)){
            group.map((element: any, index: number) => {

                const keyProp: Partial<any & {key: number}> = {
                    key: index,
                };

                if (element.type === Button && element.props.type === 'submit'){
                    elements.push(React.cloneElement(element, {...keyProp, ...buttonProps}));
                } else {
                    elements.push(React.cloneElement(element, keyProp));
                }
            });
        } else {
            if (group.type === Button && group.props.type === 'submit'){
                return React.cloneElement(group, {...buttonProps});
            } else {
                return group;
            }
        }

        return elements;
    }

    onSubmit = (children: any) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            const data = this.getEssence(children);
            if (data !== undefined && !data.invalidForm){
                this.props.onSubmit && this.props.onSubmit(e, {value: data, dataLabel: this.props.dataLabel});
            }
        };
    }

    getChildren = () => {
        const formChildren: any = [];
        React.Children.map(this.props.children, (child, index) => {
            if (React.isValidElement(child)){
                formChildren.push(child);
            }
        });

        return formChildren;
    }

    getEssence = (formChildren: any) => {
        let data: any = {};
        data = this.collectEssence(formChildren, data);
        return data;
    }

    collectEssence = (formChildren: any, data: any) => {
        if (Array.isArray(formChildren)){
            formChildren.forEach((element: any) => {
                if (element.type === Input || element.type === TextArea){
                    data = this.getData(data, element, 'value');
                } else if (element.type === Switch){
                    data = this.getData(data, element, 'on');
                } else if (element.type === Select){
                    data = this.getData(data, element, 'selected');
                } else if (element.type === RadioGroup){
                    data = this.getData(data, element, 'selectedRadios');
                } else if (element.type === CheckboxGroup){
                    data = this.getData(data, element, 'selectedChecks');
                } else if (element.type === DatePicker){
                    data = this.getData(data, element, 'date');
                } else if (element.type === FileUpload){
                    data = this.getData(data, element, 'files');
                } else if (element.type === Tags){
                    data = this.getData(data, element, 'tags');
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

    checkElementValidation = (element: any, valueName: string) => {
        const {dataLabel, required} = element.props;
        return element.props.validate({value: element.props[valueName], dataLabel, required});
    }

    getData = (data: any, element: any, valueName: string) => {
        if (element.props.validate){
            const validate = this.checkElementValidation(element, valueName);
            if (validate){
                data[element.props.dataLabel] = element.props[valueName];
                return data;
            }
            data.invalidForm = true;
            return data;
        } else {
            data[element.props.dataLabel] = element.props[valueName];
            return data;
        }
    }

}

export const FormGroup: React.StatelessComponent<IFormGroupProps> = (props) => {

    FormGroup.defaultProps = {
        className: '',
        style: {}
    };

    const alignment = !props.horizontal ? styles.vertical : styles.horizontal;

    return (
        <div style={props.style} className={`formgroup-component ${styles.container} ${alignment} ${props.className}`}>
            {props.children}
        </div>
    );
};
