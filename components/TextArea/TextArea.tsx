import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { ITextAreaComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Description } from '../Description/Description';
import { Label } from '../Label/Label';

// Styled Components
import {StyledTextArea} from './styles';

export const TextArea: React.FC<ITextAreaComponentProps> = (props) => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !props.disabled &&
        props.onChangeTextarea &&
        props.onChangeTextarea(e, {value: e.target.value, dataLabel: props.dataLabel});

        !props.disabled &&
        props.onChange &&
        props.onChange(e);
    };

    return (
        <Box d="flex" {...getBoxProps(props)} >
            {props.label && <Label style={{alignSelf: 'flex-start'}} width={props.labelWidth}>{props.label}</Label>}
            <Box d="flex" direction="column">
                <StyledTextArea
                    boxAs="textarea"
                    onChange={onChange}
                    value={props.value}
                    placeholder={props.placeholder}
                    cols={props.cols}
                    rows={props.rows}
                    minLength={props.minlength}
                    maxLength={props.maxlength}
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
