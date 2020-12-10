import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { ISwitchComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Label } from '../Label/Label';

// Styled Components
import { SwitchHandle, SwitchLabelDisabled, SwitchLabelNormal, SwitchStyled } from './styles';

/**
 * Switch
 */
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
        <Box d="flex" {...getBoxProps(props)} onClick={onClick}>
            {props.label && <Label width={props.labelWidth}>{props.label}</Label>}
            <SwitchStyled
                w={props.width}
                on={props.on}
                disabled={props.disabled}
            >
                {!props.disabled && <SwitchHandle on={props.on} width={props.width} />}
                {props.disabled ? renderDisabledContent() : renderSwitchContent()}
            </SwitchStyled>
        </Box>
    );
};

Switch.defaultProps = {
    className: '',
    disabledLabel: 'INCOMPLETE',
    offLabel: 'INACTIVE',
    onLabel: 'ACTIVE',
    style: {},
    width: 90
};

Switch.displayName = 'Switch';

export default Switch;
