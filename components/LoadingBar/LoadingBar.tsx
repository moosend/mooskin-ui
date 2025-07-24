import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILoadingBarComponentProps } from './model';

// Styled Components
import { StyledLoadingBar } from './styles';

export const LoadingBar: React.FC<ILoadingBarComponentProps> = withMooskinContext(
	({ className = '', progress = 0, style = {}, ...props }) => {
		const [progressState, setProgressState] = React.useState(progress);
		const [opacity, setOpacity] = React.useState(1);

		React.useEffect(() => {
			setProgressState(progressState);
		}, [progress]);

		React.useEffect(() => {
			if (props.error) {
				props.onLoaderError && props.onLoaderError();
				setProgressState(100);
			}
		}, [props.error]);

		React.useEffect(() => {
			if (progressState >= 100) {
				!props.error && props.onLoaderDone && props.onLoaderDone();
				setTimeout(() => {
					setOpacity(0);
				}, 500);
				setTimeout(() => {
					setProgressState(0);
				}, 1000);
				setTimeout(() => {
					setOpacity(1);
				}, 1500);
			}
		}, [progressState]);

		return <StyledLoadingBar {...props} progress={progressState} opacity={opacity} />;
	}
);

LoadingBar.displayName = 'LoadingBar';
