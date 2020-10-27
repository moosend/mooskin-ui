import * as React from 'react';

import styles from './Form.css';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {IButtonComponentProps} from '../Button/model';

export interface IFormProps{

    /** form id */
    id?: string;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** Form children */
    children?: any;

    /** form to be used with RecurlyJS */
    withRecurly?: boolean;

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
    children?: JSX.Element | JSX.Element[];

    /** Form classname */
    className?: string;

    /** Form styles */
    style?: React.CSSProperties;

    /** wether the content should be aligned horizontaly */
    horizontal?: boolean;

}

export default class Form extends React.Component<IFormProps, {}>{

    static defaultProps = {
        className: '',
        style: {}
    };

    static displayName = 'Form';

    static FormGroup: React.StatelessComponent<IFormGroupProps>;

    render(){

        const {className} = this.props;
        const form = this.assignPropsToChildren();

        return(
            <form
                id={this.props.id}
                className={`form ${styles.form} ${className}`}
                style={this.props.style}
            >
                {form}
                {this.props.withRecurly && <input type="hidden" name="recurly-token" data-recurly="token" />}
            </form>
        );
    }

    assignPropsToChildren = () => {
        const formElements: Array<React.ReactElement<any>> = [];
        const buttonProps: Partial<IButtonComponentProps> = {
            onClick: this.onSubmit(this.getChildren())
        };
        React.Children.map(this.props.children, (child, index) => {
            const keyProp: Partial<any & {key: number}> = {
                key: index,
            };
            if (React.isValidElement<IButtonComponentProps>(child)) {
                if ((child.type as React.ComponentClass<IButtonComponentProps>).displayName === 'Button' && child.props.type === 'submit'){
                    formElements.push(
                        React.cloneElement(child, {...keyProp, ...buttonProps})
                    );
                }
            }
            if (React.isValidElement<IFormGroupProps>(child)) {

                if ((child.type as React.ComponentClass<IFormGroupProps>).displayName === 'FormGroup'){

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

        const buttonProps: Partial<IButtonComponentProps> = {
            onClick: this.onSubmit(this.getChildren())
        };

        if (Array.isArray(group)){
            group.map((element: any, index: number) => {

                const keyProp: Partial<any & {key: number}> = {
                    key: index,
                };

                if (element.type.displayName === 'Button' && element.props.type === 'submit'){
                    elements.push(React.cloneElement(element, {...keyProp, ...buttonProps}));
                } else {
                    elements.push(React.cloneElement(element, keyProp));
                }
            });
        } else {
            if (group.type.displayName === 'Button' && group.props.type === 'submit'){
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
        if (formChildren.type === FormGroup){
            this.collectEssence(formChildren.props.children, data);
        }
        if (Array.isArray(formChildren)){
            formChildren.forEach((element: any) => {
                if (element.type.displayName === 'Input' || element.type.displayName === 'TextArea'){
                    data = this.getData(data, element, 'value');
                } else if (element.type.displayName === 'Switch'){
                    data = this.getData(data, element, 'on');
                } else if (element.type.displayName === 'Select'){
                    data = this.getData(data, element, 'selected');
                } else if (element.type.displayName === 'RadioGroup'){
                    data = this.getData(data, element, 'selectedRadios');
                } else if (element.type.displayName === 'CheckboxGroup'){
                    data = this.getData(data, element, 'selectedChecks');
                } else if (element.type.displayName === 'DatePicker'){
                    data = this.getData(data, element, 'date');
                } else if (element.type.displayName === 'FileUpload'){
                    data = this.getData(data, element, 'files');
                } else if (element.type.displayName === 'Tags'){
                    data = this.getData(data, element, 'tags');
                } else {
                    this.collectEssence(element, data);
                    // throw new Error('Elements used within the form are not supported');
                }
            });
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

    const alignment = !props.horizontal ? styles.vertical : styles.horizontal;

    return (
        <div
            style={props.style}
            className={`formgroup-component ${styles.formGroup} ${styles.container} ${alignment} ${props.className}`}
        >
            {props.children}
        </div>
    );
};

FormGroup.defaultProps = {
    className: '',
    style: {}
};

FormGroup.displayName = 'FormGroup';
