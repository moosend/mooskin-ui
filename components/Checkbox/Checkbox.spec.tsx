import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox, CheckboxIcon, CheckboxLabel } from './Checkbox';

describe('CheckBox', () => {
	test('renders CheckBox correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Checkbox checked onClickCheckbox={func}>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('callback func is called when checkbox is clicked', () => {
		const func = jest.fn();

		render(
			<Checkbox checked onClickCheckbox={func}>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		fireEvent.click(screen.getByText('check_box'));

		expect(func).toHaveBeenCalled();
	});

	test('callback func is not called when a disabled checkbox is clicked', () => {
		const func = jest.fn();

		render(
			<Checkbox checked onClickCheckbox={func} disabled>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		fireEvent.click(screen.getByText('check_box'));

		expect(func).not.toHaveBeenCalled();
	});
});
