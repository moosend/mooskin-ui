import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IRadioComponentProps } from './model';

// Components
import Description from '../Description/Description';
import Label from '../Label/Label';

// Styled Components
import {StyledRadio, StyledRadioContainer, StyledRadioWrapper} from './styles';

export const Radio: React.FC<IRadioComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = {label: props.label, value: props.value, selected: props.selected || false};
        !props.disabled && props.onClick && props.onClick(e, {value, dataLabel: props.dataLabel});
    };

    return (
        <StyledRadioContainer {...getBoxProps(props)}>
            <StyledRadioWrapper disabled={props.disabled} onClick={onClick}>
                <StyledRadio
                    children={props.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
                    selected={props.selected}
                    disabled={props.disabled}
                />
                <Label minW="unset" disabled={props.disabled}>
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
