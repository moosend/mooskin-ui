import * as React from 'react';

import Description from '../Description/Description';
import Label from '../Label/Label';
import {StyledRadio, StyledRadioContainer, StyledRadioWrapper} from './styles';

import { IRadioComponentProps } from './model';

export const Radio: React.FC<IRadioComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = {label: props.label, value: props.value, selected: props.selected || false};
        !props.disabled && props.onClick && props.onClick(e, {value, dataLabel: props.dataLabel});
    };

    return (
        <StyledRadioContainer id={props.id} className={props.className}>
            <StyledRadioWrapper disabled={props.disabled} onClick={onClick}>
                <StyledRadio children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'} selected={props.selected}/>
                <Label style={{minWidth: 'unset'}} disabled={props.disabled}>
                    {props.label}
                </Label>
            </StyledRadioWrapper>
            {props.description && <Description children={props.description} />}
        </StyledRadioContainer>
    );
};

Radio.defaultProps = {
    className: '',
    style: {}
};

Radio.displayName = 'Radio';

export default Radio;
