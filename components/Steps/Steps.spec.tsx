import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Step, StepContent, StepHeader, Steps } from './Steps';

describe('Steps', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Steps activeItem={3} onClickStep={func}>
				<Step activeId={1}>
					<StepHeader>{`Item: 1`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 1`}</div>
					</StepContent>
				</Step>
				<Step activeId={2}>
					<StepHeader>{`Item: 2`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 2`}</div>
					</StepContent>
				</Step>
				<Step activeId={3}>
					<StepHeader>{`Item: 3`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 3`}</div>
					</StepContent>
				</Step>
				<Step activeId={4}>
					<StepHeader>{`Item: 4`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 4`}</div>
					</StepContent>
				</Step>
				<Step activeId={5}>
					<StepHeader>{`Item: 5`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 5`}</div>
					</StepContent>
				</Step>
				<Step activeId={6}>
					<StepHeader>{`Item: 6`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 6`}</div>
					</StepContent>
				</Step>
			</Steps>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders active Step content correctly', () => {
		const func = jest.fn();

		render(
			<Steps activeItem={3} onClickStep={func}>
				<Step activeId={1}>
					<StepHeader>{`Item: 1`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 1`}</div>
					</StepContent>
				</Step>
				<Step activeId={2}>
					<StepHeader>{`Item: 2`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 2`}</div>
					</StepContent>
				</Step>
				<Step activeId={3}>
					<StepHeader>{`Item: 3`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 3`}</div>
					</StepContent>
				</Step>
				<Step activeId={4}>
					<StepHeader>{`Item: 4`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 4`}</div>
					</StepContent>
				</Step>
				<Step activeId={5}>
					<StepHeader>{`Item: 5`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 5`}</div>
					</StepContent>
				</Step>
				<Step activeId={6}>
					<StepHeader>{`Item: 6`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 6`}</div>
					</StepContent>
				</Step>
			</Steps>
		);

		expect(screen.getByText('Content for item with index: 3')).toBeInTheDocument();
		expect(screen.queryByText('Content for item with index: 1')).not.toBeInTheDocument();
	});

	test('calls onClickStep when a step header is clicked', () => {
		const func = jest.fn();

		render(
			<Steps activeItem={3} onClickStep={func}>
				<Step activeId={1}>
					<StepHeader>{`Item: 1`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 1`}</div>
					</StepContent>
				</Step>
				<Step activeId={2}>
					<StepHeader>{`Item: 2`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 2`}</div>
					</StepContent>
				</Step>
				<Step activeId={3}>
					<StepHeader>{`Item: 3`}</StepHeader>
					<StepContent>
						<div>{`Content for item with index: 3`}</div>
					</StepContent>
				</Step>
			</Steps>
		);

		fireEvent.click(screen.getByText('Item: 1'));
		expect(func).toHaveBeenCalled();
	});
});
