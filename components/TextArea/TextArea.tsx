import * as React from 'react';

import { ITextAreaComponentProps } from './model';

import Description from '../Description/Description';
import Label from '../Label/Label';
import {StyledTextArea, StyledTextAreaContainer, StyledTextAreaWrapper} from './styles';

export const TextArea: React.FC<ITextAreaComponentProps> = (props) => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !props.disabled &&
        props.onChange &&
        props.onChange(e, {value: e.target.value, dataLabel: props.dataLabel});
    };

    return (
        <StyledTextAreaContainer
            className={props.className}
            style={props.style}
            id={props.id}
        >
            {props.label && <Label style={{alignSelf: 'flex-start'}} width={props.labelWidth}>{props.label}</Label>}
            <StyledTextAreaWrapper>
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
            </StyledTextAreaWrapper>
        </StyledTextAreaContainer>
    );
};

TextArea.defaultProps = {
    className: '',
    style: {}
};

TextArea.displayName = 'TextArea';

export default TextArea;
