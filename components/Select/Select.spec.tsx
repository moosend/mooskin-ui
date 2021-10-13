import * as React from 'react';
import {
	Select,
	SelectContainer,
	SelectFilter,
	SelectIcon,
	SelectOption,
	SelectOptionList,
	SelectOverlay,
	SelectPlaceholder
} from './Select';

import { mount, shallow } from 'enzyme';

describe('Select', () => {
	test('renders Select correctly', () => {
		const func = jest.fn();

		const tree = shallow(
			<Select onChange={func}>
				<SelectContainer>
					<SelectPlaceholder>Select an option</SelectPlaceholder>
					<SelectFilter />
					<SelectIcon />
				</SelectContainer>
				<SelectOptionList>
					<SelectOption value="1">Option 1</SelectOption>
					<SelectOption value="2">Option 2</SelectOption>
					<SelectOption value="3">Option 3</SelectOption>
					<SelectOption value="4">Option 4</SelectOption>
					<SelectOption value="5">Option 5</SelectOption>
				</SelectOptionList>
				<SelectOverlay />
			</Select>
		);
		expect(tree).toMatchSnapshot();
	});

	test('renders Option correctly and calls callback on click', () => {
		const func = jest.fn();

		const tree = mount(
			<SelectOption value="1" onClick={func}>
				Option1
			</SelectOption>
		);

		tree.find('StyledSelectOption').simulate('click');

		expect(func).toHaveBeenCalled();
	});

	test('renders Filter correctly and calls callback on change', () => {
		const func = jest.fn();

		const tree = mount(<SelectFilter onChange={func} />);

		tree
			.find('StyledSelectFilter')
			.first()
			.simulate('change', { target: { value: 'filter' } });

		expect(func).toHaveBeenCalled();
	});

	test('should be rendered as a multi select if the selected prop is an array', () => {
		const options = ['2', '4'];

		const func = jest.fn();

		const component = shallow(
			<Select onChange={func} showList selectedValue={options} dataLabel="select">
				<SelectContainer>
					<SelectPlaceholder>Select an option</SelectPlaceholder>
					<SelectFilter />
					<SelectIcon />
				</SelectContainer>
				<SelectOptionList>
					<SelectOption value="1">Option 1</SelectOption>
					<SelectOption value="2">Option 2</SelectOption>
					<SelectOption value="3">Option 3</SelectOption>
					<SelectOption value="4">Option 4</SelectOption>
					<SelectOption value="5">Option 5</SelectOption>
				</SelectOptionList>
				<SelectOverlay />
			</Select>
		);

		// component.find('StyledSelectOption').first().simulate('click');
		// expect(func).toHaveBeenCalledWith({dataLabel: 'select', value: ['2', '4', '1']});
		expect(component).toMatchSnapshot();
	});
});
