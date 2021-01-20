import * as React from 'react';

// Helpers
// import { getBoxProps } from '../_utils/helper';

// Models
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { ITextAreaComponentProps } from './model';

// Components
import { Description } from '../Description/Description';
import { Label } from '../Label/Label';

// Styled Components
// import {StyledTextArea} from './styles';

export const TextArea: React.FC<ITextAreaComponentProps> = (props) => {

    // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     !props.disabled && props.onChangeTextarea &&
    //     props.onChangeTextarea(e, {value: e.target.value, dataLabel: props.dataLabel});

    //     !props.disabled && props.onChange && props.onChange(e);
    // };

    // return <StyledTextArea{...props} boxAs="textarea" onChange={onChange} />;
    return null;
};

TextArea.defaultProps = {
    className: '',
    style: {}
};

TextArea.displayName = 'TextArea';

export default TextArea;

/**
 * TextareaLabel
 */
export const TextareaLabel: React.FC<ILabelComponentProps> = (props) => {
    return <Label disabled={props.disabled} {...props} />;
};

TextareaLabel.defaultProps = {
    className: '',
    style: {}
};

TextareaLabel.displayName = 'TextareaLabel';

/**
 * TextareaDescription
 */
export const TextareaDescription: React.FC<IDescriptionComponentProps> = (props) => {
    return <Description {...props} />;
};

TextareaDescription.defaultProps = {
    className: '',
    style: {}
};

TextareaDescription.displayName = 'TextareaDescription';
