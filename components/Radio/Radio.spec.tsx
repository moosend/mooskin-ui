import * as React from 'react';
import { Radio, RadioIcon, RadioLabel } from './Radio';

import { mount } from 'enzyme';

describe('Radio', () => {
	test('renders Radio correctly', () => {
		const func = jest.fn();

		const tree = mount(
			<Radio selected onClickRadio={func}>
				<RadioIcon color="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		expect(tree).toMatchSnapshot();
	});

	test('callback func is called when Radio is clicked', () => {
		const func = jest.fn();

		const tree = mount(
			<Radio selected onClickRadio={func}>
				<RadioIcon color="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		expect(tree.find(RadioIcon).first().simulate('click'));

		expect(func).toHaveBeenCalled();
	});

	test('callback func is not called when a disabled Radio is clicked', () => {
		const func = jest.fn();

		const tree = mount(
			<Radio selected onClickRadio={func} disabled>
				<RadioIcon color="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		tree.find(RadioIcon).first().simulate('click');

		expect(func).not.toHaveBeenCalled();
	});
});
