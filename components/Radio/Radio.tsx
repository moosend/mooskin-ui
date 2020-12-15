import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { IRadioButtonComponentProps, IRadioComponentProps } from './model';

// Components
import Description from '../Description/Description';

// Styled Components
import {StyledRadio, StyledRadioButton, StyledRadioLabel} from './styles';

export const Radio: React.FC<IRadioComponentProps> = (props) => {

    const batchClickHandler = (e: React.MouseEvent<HTMLElement>, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
        props.onClickRadio && props.onClickRadio(e, {dataLabel: props.dataLabel, value: !props.selected});
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ILabelComponentProps>(child) && child.type === RadioLabel){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    disabled: props.disabled,
                    key: i,
                    onClick: (e) => batchClickHandler(e, child.props.onClick)
                } as ILabelComponentProps);
            }

            if (React.isValidElement<IRadioButtonComponentProps>(child) && child.type === RadioButton){
                return React.cloneElement(child, {
                    children: props.selected ? 'radio_button_checked' : 'radio_button_unchecked',
                    disabled: props.disabled,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLElement>) => batchClickHandler(e, child.props.onClick)
                } as IRadioButtonComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    // children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
    return <StyledRadio {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

Radio.defaultProps = {
    className: '',
    style: {}
};

Radio.displayName = 'Radio';

/**
 * RadioButton
 */
export const RadioButton: React.FC<IRadioButtonComponentProps> = (props) => {
    return <StyledRadioButton {...props}/>;
};

RadioButton.defaultProps = {
    className: '',
    style: {}
};

RadioButton.displayName = 'RadioButton';

/**
 * RadioLabel
 */
export const RadioLabel: React.FC<ILabelComponentProps> = (props) => {
    return <StyledRadioLabel disabled={props.disabled} {...props} />;
};

RadioLabel.defaultProps = {
    className: '',
    style: {}
};

RadioLabel.displayName = 'RadioLabel';

/**
 * RadioDescription
 */
export const RadioDescription: React.FC<IDescriptionComponentProps> = (props) => {
    return <Description {...props} />;
};

RadioDescription.defaultProps = {
    className: '',
    style: {}
};

RadioDescription.displayName = 'RadioDescription';

export default Radio;
