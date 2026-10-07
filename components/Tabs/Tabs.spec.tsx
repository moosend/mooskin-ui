import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tab, TabContent, TabHeader, Tabs } from './Tabs';

describe('Tabs', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Tabs activeItem={3} onClickTab={func}>
				<Tab activeId={1}>
					<TabHeader>{`Item: 1`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 1`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={2}>
					<TabHeader>{`Item: 2`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 2`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={3}>
					<TabHeader>{`Item: 3`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 3`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={4}>
					<TabHeader>{`Item: 4`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 4`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={5}>
					<TabHeader>{`Item: 5`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 5`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={6}>
					<TabHeader>{`Item: 6`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 6`}</div>
					</TabContent>
				</Tab>
			</Tabs>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders active tab content correctly', () => {
		const func = jest.fn();

		render(
			<Tabs activeItem={3} onClickTab={func}>
				<Tab activeId={1}>
					<TabHeader>{`Item: 1`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 1`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={2}>
					<TabHeader>{`Item: 2`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 2`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={3}>
					<TabHeader>{`Item: 3`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 3`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={4}>
					<TabHeader>{`Item: 4`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 4`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={5}>
					<TabHeader>{`Item: 5`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 5`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={6}>
					<TabHeader>{`Item: 6`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 6`}</div>
					</TabContent>
				</Tab>
			</Tabs>
		);

		expect(screen.getByText('Content for item with index: 3')).toBeInTheDocument();
		expect(screen.queryByText('Content for item with index: 1')).not.toBeInTheDocument();
	});

	test('calls onClickTab when a tab header is clicked', () => {
		const func = jest.fn();

		render(
			<Tabs activeItem={3} onClickTab={func}>
				<Tab activeId={1}>
					<TabHeader>{`Item: 1`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 1`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={2}>
					<TabHeader>{`Item: 2`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 2`}</div>
					</TabContent>
				</Tab>
				<Tab activeId={3}>
					<TabHeader>{`Item: 3`}</TabHeader>
					<TabContent>
						<div>{`Content for item with index: 3`}</div>
					</TabContent>
				</Tab>
			</Tabs>
		);

		fireEvent.click(screen.getByText('Item: 1'));
		expect(func).toHaveBeenCalled();
	});
});
