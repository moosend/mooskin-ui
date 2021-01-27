import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { IRadioComponentProps, IRadioIconComponentProps } from './model';

// Components
import Description from '../Description/Description';

// Styled Components
import {StyledRadio, StyledRadioIcon, StyledRadioLabel} from './styles';

export const Radio: React.FC<IRadioComponentProps> = (props) => {

    const [hasRadio, setHasRadio] = React.useState(false);

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickRadio && props.onClickRadio(e, {dataLabel: props.dataLabel, value: !props.selected});
    };

    const batchClickHandler = (e: React.MouseEvent<HTMLDivElement>, callback?: (e: React.MouseEvent<HTMLDivElement>) => void) => {
        onClick(e);
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
                    onClick: (e: React.MouseEvent<HTMLDivElement>) => batchClickHandler(e, child.props.onClick)
                } as ILabelComponentProps);
            }

            if (React.isValidElement<IRadioIconComponentProps>(child) && child.type === RadioIcon){
                !hasRadio && setHasRadio(true);
                return React.cloneElement(child, {
                    children: props.selected ? 'radio_button_checked' : 'radio_button_unchecked',
                    disabled: props.disabled,
                    key: i,
                    onClick: (e: React.MouseEvent<HTMLDivElement>) => batchClickHandler(e, child.props.onClick)
                } as IRadioIconComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    // children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
    return (
        <StyledRadio {...getBoxProps(props)}>
            {!hasRadio && (
                <RadioIcon
                    disabled={props.disabled}
                    onClick={onClick}
                    children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
                />
            )}
            {recurseChildren(props.children)}
        </StyledRadio>
    );
};

Radio.defaultProps = {
    className: '',
    style: {}
};

Radio.displayName = 'Radio';

/**
 * RadioIcon
 */
export const RadioIcon: React.FC<IRadioIconComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickIcon && props.onClickIcon(e);
        props.onClick && props.onClick(e);
    };
    return <StyledRadioIcon {...props} onClick={onClick} />;
};

RadioIcon.defaultProps = {
    className: '',
    style: {}
};

RadioIcon.displayName = 'RadioIcon';

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
