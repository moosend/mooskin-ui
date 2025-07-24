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
	React.memo(({ className = '', style = {}, transition = '0.2s all', noRender = [], setRef, boxAs, ...props }) => {
		const [shouldRender, setShouldRender] = React.useState(checkShouldRender(noRender || []));

		React.useEffect(() => {
			if (noRender) {
				const onResize = () => {
					if (noRender) setShouldRender(checkShouldRender(noRender));
				};

				window.addEventListener('resize', onResize);

				return () => {
					window.removeEventListener('resize', onResize);
				};
			}
		}, []);

		if (shouldRender) {
			return <StyledBox className={className} style={style} ref={(ref: HTMLElement) => setRef && setRef(ref)} {...props} as={boxAs} />;
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

Box.displayName = 'Box';
