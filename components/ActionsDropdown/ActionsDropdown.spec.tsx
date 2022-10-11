import * as React from 'react';

import { ActionsDropdown, ActionsDropdownItem } from './ActionsDropdown';
import { StyledActionsDropdownButtonClose } from './styles';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ActionsDropdown', () => {
	test('renders ActionsDropdown correctly', () => {
		const func = jest.fn();

		const tree = mount(
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
		expect(tree).toMatchSnapshot();
	});

	test('renders ActionsDropdownItem correctly', () => {
		const func = jest.fn();

		const tree = mount(<ActionsDropdownItem onClick={func} className="myClass" style={{ color: 'blue' }} />);
		expect(tree).toMatchSnapshot();
	});

	test.skip('calls click callbacks correctly', () => {
		const func = jest.fn();

		const tree = mount(
			<ActionsDropdown onClickItem={func}>
				<ActionsDropdownItem value="/settings">Settings</ActionsDropdownItem>
				<ActionsDropdownItem value="/template">Template</ActionsDropdownItem>
				<ActionsDropdownItem value="/preview">Preview</ActionsDropdownItem>
			</ActionsDropdown>
		);

		tree.find(ActionsDropdown).at(2).simulate('click');
		expect(func).toHaveBeenCalled();		
	});

	test('calls click on ActionsDropdown Close Button', () => {	
		const func = jest.fn();		
		const tree = mount(<StyledActionsDropdownButtonClose onClick={func}/>	);

		tree.find(StyledActionsDropdownButtonClose).simulate('click');
		expect(func).toHaveBeenCalled();
	});
});
