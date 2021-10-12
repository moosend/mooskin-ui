import * as React from 'react';

import { Selector, SelectorItem } from './Selector';

import { mount } from 'enzyme';

describe('Selector', () => {
	test('renders Selector correctly', () => {
		const func = jest.fn();

		const tree = mount(
			<Selector activeItem="/settings" onClickItem={func}>
				<SelectorItem value="/settings">Settings</SelectorItem>
				<SelectorItem value="/template">Template</SelectorItem>
				<SelectorItem value="/preview">Preview</SelectorItem>
			</Selector>
		);
		expect(tree).toMatchSnapshot();
	});

	test('renders SelectorItem correctly', () => {
		const func = jest.fn();

		const tree = mount(<SelectorItem onClick={func} className="myClass" style={{ color: 'blue' }} active />);
		expect(tree).toMatchSnapshot();
	});

	test('calls click callbacks correctly', () => {
		const func = jest.fn();

		const tree = mount(
			<Selector activeItem="/settings" onClickItem={func}>
				<SelectorItem value="/settings">Settings</SelectorItem>
				<SelectorItem value="/template">Template</SelectorItem>
				<SelectorItem value="/preview">Preview</SelectorItem>
			</Selector>
		);

		tree.find('div').at(2).simulate('click');
		expect(func).toHaveBeenCalled();
	});
});
