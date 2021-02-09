import * as React from 'react';

// Models
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { ITextAreaComponentProps } from './model';

// Components
import { Description } from '../Description/Description';
import { Label } from '../Label/Label';

// Styled Components
import { StyledTextArea } from './styles';

/**
 * TextArea
 */
export const TextArea: React.FC<ITextAreaComponentProps> = (props) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        !props.disabled && props.onChange && props.onChange(e);
    };
    return <StyledTextArea {...(props as any)} boxAs="textarea" onChange={onChange as any} />;
};

TextArea.defaultProps = {
    className: '',
    style: {}
};

TextArea.displayName = 'TextArea';

export default TextArea;

/**
 * TextAreaLabel
 */
export const TextAreaLabel: React.FC<ILabelComponentProps> = (props) => {
    return <Label disabled={props.disabled} {...props} />;
};

TextAreaLabel.defaultProps = {
    className: '',
    style: {}
};

TextAreaLabel.displayName = 'TextAreaLabel';

/**
 * TextAreaDescription
 */
export const TextAreaDescription: React.FC<IDescriptionComponentProps> = (props) => {
    return <Description {...props} />;
};

TextAreaDescription.defaultProps = {
    className: '',
    style: {}
};

TextAreaDescription.displayName = 'TextAreaDescription';
