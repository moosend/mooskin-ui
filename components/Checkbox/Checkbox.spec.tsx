import * as React from 'react';
import { Checkbox, CheckboxIcon, CheckboxLabel } from './Checkbox';

import { mount } from 'enzyme';

describe('CheckBox', () => {
	test('renders CheckBox correctly', () => {
		const func = jest.fn();

		const tree = mount(
			<Checkbox checked onClickCheckbox={func}>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		expect(tree).toMatchSnapshot();
	});

	test('callback func is called when checkbox is clicked', () => {
		const func = jest.fn();

		const tree = mount(
			<Checkbox checked onClickCheckbox={func}>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		expect(tree.find(CheckboxIcon).first().simulate('click'));

		expect(func).toHaveBeenCalled();
	});

	test('callback func is not called when a disabled checkbox is clicked', () => {
		const func = jest.fn();

		const tree = mount(
			<Checkbox checked onClickCheckbox={func} disabled>
				<CheckboxIcon fontColor="red" />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>
		);

		tree.find(CheckboxIcon).first().simulate('click');

		expect(func).not.toHaveBeenCalled();
	});
});
