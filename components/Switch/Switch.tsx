import * as React from 'react';

import variables from '../_utils/globals/variables';
import Label from '../Label/Label';

import { ISwitchComponentProps } from './model';

import { SwitchContainer, SwitchHandle, SwitchLabelDisabled, SwitchLabelNormal, SwitchStyled } from './styles';

import { getBoxProps } from '../_utils/helper';

export const Switch: React.FC<ISwitchComponentProps> = (props) => {
    const renderDisabledContent = () => {
        return <SwitchLabelDisabled>{props.disabledLabel}</SwitchLabelDisabled>;
    };

    const renderSwitchContent = () => {
        return <SwitchLabelNormal on={props.on}>{props.on ? props.onLabel : props.offLabel}</SwitchLabelNormal>;
    };

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        !props.disabled && props.onClick && props.onClick(e, { value: !props.on, dataLabel: props.dataLabel });
    };

    return (
        <SwitchContainer {...getBoxProps(props)} onClick={onClick}>
            {props.label && <Label width={props.labelWidth}>{props.label}</Label>}
            <SwitchStyled
                w={props.width}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
                on={props.on}
                disabled={props.disabled}
            >
                {!props.disabled && <SwitchHandle on={props.on} width={props.width} />}
                {props.disabled ? renderDisabledContent() : renderSwitchContent()}
            </SwitchStyled>
        </SwitchContainer>
    );
};

Switch.defaultProps = {
    className: '',
    disabledLabel: 'INCOMPLETE',
    offLabel: 'INACTIVE',
    onLabel: 'ACTIVE',
    primaryColor: variables.backgroundPrimary,
    secondaryColor: variables.backgroundOff,
    style: {},
    width: 90,
};

Switch.displayName = 'Switch';

export default Switch;
