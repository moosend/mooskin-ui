import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Selector, SelectorItem } from './Selector';

describe('Selector', () => {
	test('renders Selector correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Selector activeItem="/settings" onClickItem={func}>
				<SelectorItem value="/settings">Settings</SelectorItem>
				<SelectorItem value="/template">Template</SelectorItem>
				<SelectorItem value="/preview">Preview</SelectorItem>
			</Selector>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders SelectorItem correctly', () => {
		const func = jest.fn();

		const { container } = render(<SelectorItem onClick={func} className="myClass" style={{ color: 'blue' }} active />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('calls click callbacks correctly', () => {
		const func = jest.fn();

		render(
			<Selector activeItem="/settings" onClickItem={func}>
				<SelectorItem value="/settings">Settings</SelectorItem>
				<SelectorItem value="/template">Template</SelectorItem>
				<SelectorItem value="/preview">Preview</SelectorItem>
			</Selector>
		);

		fireEvent.click(screen.getByText('Template'));
		expect(func).toHaveBeenCalled();
	});
});
