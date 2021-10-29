import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ILoadingBarComponentProps } from './model';

// Styled Components
import { StyledLoadingBar } from './styles';

export const LoadingBar: React.FC<ILoadingBarComponentProps> = withMooskinContext((props) => {
	const [progress, setProgress] = React.useState(props.progress);
	const [opacity, setOpacity] = React.useState(1);

	React.useEffect(() => {
		setProgress(props.progress);
	}, [props.progress]);

	React.useEffect(() => {
		if (props.error) {
			props.onLoaderError && props.onLoaderError();
			setProgress(100);
		}
	}, [props.error]);

	React.useEffect(() => {
		if (progress >= 100) {
			!props.error && props.onLoaderDone && props.onLoaderDone();
			setTimeout(() => {
				setOpacity(0);
			}, 500);
			setTimeout(() => {
				setProgress(0);
			}, 1000);
			setTimeout(() => {
				setOpacity(1);
			}, 1500);
		}
	}, [progress]);

	return <StyledLoadingBar {...props} progress={progress} opacity={opacity} />;
});

LoadingBar.defaultProps = {
	className: '',
	progress: 0,
	style: {}
};

LoadingBar.displayName = 'LoadingBar';
