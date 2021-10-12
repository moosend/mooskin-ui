import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ISwitchComponentProps, ISwitchHandleComponentProps } from './model';

// Styled Components
import { StyledSwitch, StyledSwitchHandle, StyledSwitchLabelDisabled, StyledSwitchLabelNormal } from './styles';

/**
 * Switch
 */
export const Switch: React.FC<ISwitchComponentProps> = withMooskinContext((props) => {
	const [hasHandle, setHasHandle] = React.useState(false);

	const renderDisabledContent = () => {
		return <StyledSwitchLabelDisabled active={props.active}>{props.text}</StyledSwitchLabelDisabled>;
	};

	const renderSwitchContent = () => {
		return <StyledSwitchLabelNormal active={props.active}>{props.text}</StyledSwitchLabelNormal>;
	};

	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		!props.disabled && props.onClickSwitch && props.onClickSwitch(e, { value: !props.active, dataLabel: props.dataLabel });
	};

	const recurseChildren = (children: any): any => {
		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<ISwitchHandleComponentProps>(child) && child.type === SwitchHandle) {
				!hasHandle && setHasHandle(true);
				if (!props.disabled) {
					return React.cloneElement(child, {
						active: props.active,
						children: recurseChildren((child.props as any).children),
						key: i,
						switchWidth: props.w,
					} as ISwitchHandleComponentProps);
				}
				return null;
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	return (
		<StyledSwitch {...props} onClick={onClick}>
			{!hasHandle && !props.disabled && <SwitchHandle active={props.active} switchWidth={props.w} />}
			{props.disabled ? renderDisabledContent() : renderSwitchContent()}
			{recurseChildren(props.children)}
		</StyledSwitch>
	);
});

Switch.defaultProps = {
	className: '',
	style: {},
	w: 90,
};

Switch.displayName = 'Switch';

export const SwitchHandle: React.FC<ISwitchHandleComponentProps> = withMooskinContext((props) => {
	return <StyledSwitchHandle {...props} />;
});

SwitchHandle.defaultProps = {
	className: '',
	style: {},
};

SwitchHandle.displayName = 'SwitchHandle';
