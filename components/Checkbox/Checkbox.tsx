import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { ICheckboxButtonComponentProps, ICheckboxComponentProps } from './model';

// Components
import Description from '../Description/Description';

// Styled Components
import {StyledCheckbox, StyledCheckboxButton, StyledCheckboxLabel} from './styles';

export const Checkbox: React.FC<ICheckboxComponentProps> = (props) => {

    const batchClickHandler = (e: React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
        props.onClickCheckbox && props.onClickCheckbox(e, {dataLabel: props.dataLabel, value: !props.checked});
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ILabelComponentProps>(child) && child.type === CheckboxLabel){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    disabled: props.disabled,
                    key: i,
                    onClick: (e) => batchClickHandler(e, child.props.onClick)
                } as ILabelComponentProps);
            }

            if (React.isValidElement<ICheckboxButtonComponentProps>(child) && child.type === CheckboxButton){
                return React.cloneElement(child, {
                    children: props.checked ? 'check_box' : 'check_box_outline_blank',
                    disabled: props.disabled,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLElement>) => batchClickHandler(e, child.props.onClick)
                } as ICheckboxButtonComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    // children={props.selected ? 'Checkbox_button_checked' : 'Checkbox_button_unchecked'}
    return <StyledCheckbox {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

Checkbox.defaultProps = {
    className: '',
    style: {}
};

Checkbox.displayName = 'Checkbox';

/**
 * CheckboxButton
 */
export const CheckboxButton: React.FC<ICheckboxButtonComponentProps> = (props) => {
    return <StyledCheckboxButton {...props}/>;
};

CheckboxButton.defaultProps = {
    className: '',
    style: {}
};

CheckboxButton.displayName = 'CheckboxButton';

/**
 * CheckboxLabel
 */
export const CheckboxLabel: React.FC<ILabelComponentProps> = (props) => {
    return <StyledCheckboxLabel disabled={props.disabled} {...props} />;
};

CheckboxLabel.defaultProps = {
    className: '',
    style: {}
};

CheckboxLabel.displayName = 'CheckboxLabel';

/**
 * CheckboxDescription
 */
export const CheckboxDescription: React.FC<IDescriptionComponentProps> = (props) => {
    return <Description {...props} />;
};

CheckboxDescription.defaultProps = {
    className: '',
    style: {}
};

CheckboxDescription.displayName = 'CheckboxDescription';

export default Checkbox;
