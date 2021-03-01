import * as React from 'react';
import { Step, StepContent, StepHeader, Steps } from './Steps';

import { mount } from 'enzyme';

describe('Pagination', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const tree = mount(
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

		expect(tree).toMatchSnapshot();
	});

	test('renders active Step content correctly', () => {
		const func = jest.fn();

		const tree = mount(
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

		expect(tree.find('StyledStepContent').length).toEqual(1);
		expect(tree.find('StyledStepContent').text()).toEqual('Content for item with index: 3');
	});

	test('renders active Step content correctly', () => {
		const func = jest.fn();

		const tree = mount(
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

		tree.find(StepHeader).first().simulate('click');
		expect(func).toHaveBeenCalled();
	});
});
