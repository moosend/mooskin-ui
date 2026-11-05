import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { ILoadingBarComponentProps } from './model';

// Styled Components
import { StyledLoadingBar } from './styles';

export const LoadingBar: React.FC<ILoadingBarComponentProps> = withMooskinContext(
	({ className: _className = '', progress = 0, style: _style = {}, error, onLoaderDone, onLoaderError, ...props }) => {
		const [progressState, setProgressState] = React.useState(progress);
		const [opacity, setOpacity] = React.useState(1);
		const onLoaderDoneRef = React.useRef(onLoaderDone);
		const onLoaderErrorRef = React.useRef(onLoaderError);
		const errorRef = React.useRef(error);
		onLoaderDoneRef.current = onLoaderDone;
		onLoaderErrorRef.current = onLoaderError;
		errorRef.current = error;

		React.useEffect(() => {
			setProgressState(progress);
		}, [progress]);

		React.useEffect(() => {
			if (error) {
				onLoaderErrorRef.current?.();
				setProgressState(100);
			}
		}, [error]);

		React.useEffect(() => {
			if (progressState >= 100) {
				if (!errorRef.current) {
					onLoaderDoneRef.current?.();
				}
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

		return <StyledLoadingBar {...props} error={error} progress={progressState} opacity={opacity} />;
	},
);

LoadingBar.displayName = 'LoadingBar';
