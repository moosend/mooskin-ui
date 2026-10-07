import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ActionsDropdown, ActionsDropdownItem } from './ActionsDropdown';
import { StyledActionsDropdownButtonClose } from './styles';

describe('ActionsDropdown', () => {
	test('renders correctly', () => {
		const func = jest.fn();
		const { container } = render(
			<ActionsDropdown onClickItem={func}>
				<ActionsDropdownItem dataLabel="settings" value="/settings">
					Settings
				</ActionsDropdownItem>
				<ActionsDropdownItem dataLabel="template" value="/template">
					Template
				</ActionsDropdownItem>
				<ActionsDropdownItem dataLabel="preview" value="/preview">
					Preview
				</ActionsDropdownItem>
			</ActionsDropdown>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders ActionsDropdownItem correctly', () => {
		const func = jest.fn();
		const { container } = render(<ActionsDropdownItem onClick={func} className="myClass" style={{ color: 'blue' }} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('calls click callbacks correctly', () => {
		const func = jest.fn();

		render(
			<ActionsDropdown isOpen onClickItem={func}>
				<ActionsDropdownItem value="/settings">Settings</ActionsDropdownItem>
				<ActionsDropdownItem value="/template">Template</ActionsDropdownItem>
				<ActionsDropdownItem value="/preview">Preview</ActionsDropdownItem>
			</ActionsDropdown>
		);

		fireEvent.click(screen.getByText('Preview'));
		expect(func).toHaveBeenCalled();
	});

	test('calls click on ActionsDropdown Close Button', () => {
		const func = jest.fn();
		const { container } = render(<StyledActionsDropdownButtonClose onClick={func} />);

		fireEvent.click(container.firstChild as HTMLElement);
		expect(func).toHaveBeenCalled();
	});
});
