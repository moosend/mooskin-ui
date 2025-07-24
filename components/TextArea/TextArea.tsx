import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ITextAreaComponentProps } from './model';

// Styled Components
import { StyledTextArea } from './styles';

/**
 * TextArea
 */
export const TextArea: React.FC<ITextAreaComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		!props.disabled && props.onChange && props.onChange(e);
	};
	return <StyledTextArea {...(props as any)} boxAs="textarea" onChange={onChange as any} />;
});

TextArea.displayName = 'TextArea';
