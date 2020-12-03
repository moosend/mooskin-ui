import * as React from 'react';

import Description from '../Description/Description';
import Label from '../Label/Label';
import {StyledCheckbox, StyledCheckboxContainer, StyledCheckboxWrapper} from './styles';

import { ICheckboxComponentProps } from './model';

import { getBoxProps } from '../_utils/helper';

export const Checkbox: React.FC<ICheckboxComponentProps> = (props) => {

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const data = {checked: !props.checked, value: props.value, label: props.label};
        !props.disabled && props.onClick && props.onClick(e, {value: data, dataLabel: props.dataLabel});
    };

    return (
        <StyledCheckboxContainer {...getBoxProps(props)}>
            <StyledCheckboxWrapper disabled={props.disabled} onClick={onClick}>
                <StyledCheckbox children={props.checked ? 'check_box' : 'check_box_outline_blank'} checked={props.checked}/>
                <Label minW="unset" disabled={props.disabled}>
                    {props.label}
                </Label>
            </StyledCheckboxWrapper>
            {props.description && <Description children={props.description} />}
        </StyledCheckboxContainer>
    );
};

Checkbox.defaultProps = {
    className: '',
    style: {}
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
