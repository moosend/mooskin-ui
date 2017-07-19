import * as React from 'react';

import styles from './Form.css';

import Button, {IButtonProps} from '../Button/Button';
import {CheckboxGroup, Input, RadioGroup, Switch, TextArea} from '../index/';

export interface IFormProps{

    /** Form children */
    children?: any;

    /** Form action */
    action?: string;

    /** Form method */
    method?: string;

    /** Form enctype */
    enctype?: string;

    /** Form name */
    name?: string;

    /** Form classname */
    className?: string;

    /** Form styles */
    style?: {[key: string]: string|number};

}

export interface IFormGroupProps{

    /** Form children */
    children?: any;

    /** Form classname */
    className?: string;

    /** Form styles */
    style?: {[key: string]: string|number};

    /** wether the content should be aligned horizontaly */
    horizontal?: boolean;

}

export default class Form extends React.Component<IFormProps, {}>{

    public static FormGroup: React.StatelessComponent<IFormGroupProps>;

    public render(){

        const {method, enctype, name, action, style, className} = this.props;
        const form = this.assignPropsToChildren();

        return(
            <div style={style} className={`form-component ${styles.container}`}>
                <form
                    className={`form ${styles.form} ${className}`}
                    method={method}
                    encType={enctype}
                    action={action}
                    name={name}
                >
                     {form}
                    {/* {this.props.children} */}
                </form>
            </div>
        );
    }

    private onSubmit = () => {
        return (e: React.MouseEvent<HTMLElement>) => {
            console.log('Button clicked');
            const formChildren = this.getChildren();
            this.collectEssence(formChildren);
        };
    }

    private assignPropsToChildren = () => {
        const formElements: any = [];
        const buttonProps: Partial<IButtonProps> = {
            onClick: this.onSubmit()
        };
        React.Children.map(this.props.children, (child, index) => {
            const keyProp: Partial<any & {key: number}> = {
                key: index,
            };
            if (React.isValidElement(child)){
                if (child.type === Button){
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

    private collectEssence = (formChildren: any) => {
        if (Array.isArray(formChildren)){
            formChildren.map((element: any) => {
                if (element.type === Input){
                    console.log(element.props.dataLabel + ': ' + element.props.value);
                } else if (element.type === TextArea){
                    console.log(element.props.dataLabel + ': ' + element.props.value);
                } else if (element.type === Switch){
                    console.log(element.props.dataLabel + ': ' + element.props.on);
                } else if (element.type === RadioGroup){
                    console.log(element.props.children);
                    // this.collectEssence(element.props.children);
                } else if (element.type === CheckboxGroup){
                    console.log(element.props.children);
                    // this.collectEssence(element.props.children);
                } else {
                    this.collectEssence(element);
                    // throw new Error('Elements used within the form are not supported');
                }
            });
        }
        if (formChildren.type === FormGroup){
            this.collectEssence(formChildren.props.children);
        }
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
