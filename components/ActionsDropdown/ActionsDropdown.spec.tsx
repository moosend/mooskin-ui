import * as React from 'react';

import ActionsDropdown, {ActionsDropdownItem} from './ActionsDropdown';

import { mount, shallow } from 'enzyme';

describe('ActionsDropdown', () => {

    test('renders ActionsDropdown correctly', () => {
        const func = jest.fn();

        const tree = shallow(
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

        const tree = shallow(
            <ActionsDropdownItem
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('calls click callbacks correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <ActionsDropdown onClickItem={func}>
                <ActionsDropdownItem value="/settings">
                    Settings
                </ActionsDropdownItem>
                <ActionsDropdownItem value="/template">
                    Template
                </ActionsDropdownItem>
                <ActionsDropdownItem value="/preview">
                    Preview
                </ActionsDropdownItem>
            </ActionsDropdown>
        );

        tree.find('div').at(2).simulate('click');
        expect(func).toHaveBeenCalled();
    });

});
