import * as React from 'react';

// Models
import { IBoxComponentProps, ScreenType } from './model';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Styled Components
import { StyledBox } from './styles';
import { Screens } from '../_utils/globals/screens';

/**
 * Box
 */
export const Box: React.FC<IBoxComponentProps> = withMooskinContext(
	React.memo((props) => {
		const [shouldRender, setShouldRender] = React.useState(true);

		React.useEffect(() => {
			if (props.noRender) {
				setShouldRender(checkShouldRender(props.noRender));

				const onResize = () => {
					if (props.noRender) setShouldRender(checkShouldRender(props.noRender));
				};

				window.addEventListener('resize', onResize);

				return () => {
					window.removeEventListener('resize', onResize);
				};
			}
		}, []);

		if (shouldRender) {
			return <StyledBox ref={(ref: HTMLElement) => props.setRef && props.setRef(ref)} {...props} as={props.boxAs} />;
		}

		return null;
	})
);

const checkShouldRender = (noRender: Array<ScreenType>) => {
	const width = window.innerWidth;

	const found = noRender.find((screen) => {
		const limits = Screens[screen];
		return limits.max >= width && limits.min <= width;
	});

	if (found) return false;

	return true;
};

Box.defaultProps = {
	className: '',
	style: {},
	transition: '0.2s all'
};

Box.displayName = 'Box';
