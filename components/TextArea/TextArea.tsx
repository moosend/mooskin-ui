import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { ITextAreaComponentProps } from './model';

// Styled Components
import { StyledTextArea } from './styles';

/**
 * TextArea
 */
export const TextArea: React.FC<ITextAreaComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		!props.disabled && props.onChange?.(e);
	};
	return <StyledTextArea {...props} className={className} style={style} boxAs="textarea" onChange={onChange} />;
});

TextArea.displayName = 'TextArea';
