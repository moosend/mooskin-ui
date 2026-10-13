import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { IStepCommonComponentProps, IStepComponentProps, IStepHeaderComponentProps, IStepsComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// Styled Components
import { StyledStep, StyledStepArrow, StyledStepContent, StyledStepHeader, StyledSteps } from './styles';

/**
 * Steps
 */
export const Steps: React.FC<IStepsComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	const batchClickHandler = (
		e: React.MouseEvent<HTMLElement>,
		activeId?: string | number,
		callback?: (e: React.MouseEvent<HTMLElement>) => void,
	) => {
		props.onClickStep?.(e, activeId);
		callback?.(e);
	};

	const getActiveItem = (activeId?: string | number) => {
		if (props.activeItem && Array.isArray(props.activeItem)) {
			return (props.activeItem as any).includes(activeId);
		}
		return props.activeItem === activeId;
	};

	const assignChildren = (tabIndex: number, tabsLength: number, children?: any, activeId?: string | number, active?: boolean) => {
		let header: React.ReactElement<IStepCommonComponentProps> | undefined;
		let content: React.ReactElement<IStepCommonComponentProps> | undefined;

		const hasArrow = tabIndex < tabsLength - 1;

		React.Children.forEach(children, (child: any) => {
			if (React.isValidElement<IStepHeaderComponentProps>(child) && child.type === StepHeader) {
				header = React.cloneElement(child, {
					active,
					children: (
						<>
							{child.props.children}
							{hasArrow && <StepArrow>keyboard_arrow_right</StepArrow>}
						</>
					),
					onClick: (e) => (!child.props.disabled ? batchClickHandler(e, activeId, child.props.onClick) : undefined),
				} as IStepHeaderComponentProps);
			}

			if (React.isValidElement<IStepCommonComponentProps>(child) && child.type === StepContent) {
				content = active ? React.cloneElement(child, { active } as IStepCommonComponentProps) : undefined;
			}
		});

		return { header, content };
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		const headers: Array<React.ReactElement<IStepCommonComponentProps> | null> = [];
		const contents: Array<React.ReactElement<IStepCommonComponentProps> | null> = [];

		React.Children.forEach(children, (child, i) => {
			if (React.isValidElement<IStepComponentProps>(child) && child.type === Step) {
				const active = child.props.active ? child.props.active : getActiveItem(child.props.activeId);
				const { content, header } = assignChildren(i, children.length, child.props.children, child.props.activeId, active);
				header && headers.push(React.cloneElement(header, { key: i }));
				content && contents.push(React.cloneElement(content, { key: i }));
			}
		});

		return (
			<>
				<Box d="flex">{headers}</Box>
				{contents}
			</>
		);
	};

	return <StyledSteps {...props}>{recurseChildren(props.children)}</StyledSteps>;
});

Steps.displayName = 'Steps';

/**
 * Step
 */
export const Step: React.FC<IStepComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledStep {...props} />
));

Step.displayName = 'Step';

/**
 * StepHeader
 */
export const StepHeader: React.FC<IStepHeaderComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledStepHeader {...props} />
));

StepHeader.displayName = 'StepHeader';

/**
 * StepContent
 */
export const StepContent: React.FC<IStepCommonComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledStepContent {...props} />
));

StepContent.displayName = 'StepContent';

/**
 * StepArrow
 */
const StepArrow: React.FC<IStepCommonComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledStepArrow {...props} />
));

StepArrow.displayName = 'StepArrow';
