import * as React from 'react';

import { ITextAreaComponentProps } from './model';

import Description from '../Description/Description';
import Label from '../Label/Label';
import {StyledTextArea} from './styles';

import { getBoxProps } from '../_utils/helper';
import { Box } from '../Box/Box';

export const TextArea: React.FC<ITextAreaComponentProps> = (props) => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !props.disabled &&
        props.onChange &&
        props.onChange(e, {value: e.target.value, dataLabel: props.dataLabel});
    };

    return (
        <Box d="flex" {...getBoxProps(props)} >
            {props.label && <Label style={{alignSelf: 'flex-start'}} width={props.labelWidth}>{props.label}</Label>}
            <Box d="flex" direction="column">
                <StyledTextArea
                    onChange={onChange}
                    value={props.value}
                    placeholder={props.placeholder}
                    cols={props.cols}
                    rows={props.rows}
                    minLength={props.minlength}
                    maxLength={props.maxlength}
                    required={props.required}
                    disabled={props.disabled}
                    readOnly={props.readonly}
                />
                {props.description && <Description>{props.description}</Description>}
            </Box>
        </Box>
    );
};

TextArea.defaultProps = {
    className: '',
    style: {}
};

TextArea.displayName = 'TextArea';

export default TextArea;
