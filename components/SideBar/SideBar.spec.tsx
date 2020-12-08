import * as React from 'react';

import SideBar, {SidebarItem} from './SideBar';

import { mount, shallow } from 'enzyme';

describe('SideBar', () => {

    test('renders SideBar correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SideBar activeItem="/settings" onClickItem={func}>
                <SidebarItem dataLabel="settings" value="/settings">
                    Settings
                </SidebarItem>
                <SidebarItem dataLabel="template" value="/template">
                    Template
                </SidebarItem>
                <SidebarItem dataLabel="preview" value="/preview">
                    Preview
                </SidebarItem>
            </SideBar>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders SidebarItem correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SidebarItem
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                active
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('calls click callbacks correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <SideBar activeItem="/settings" onClickItem={func}>
                <SidebarItem dataLabel="settings" value="/settings">
                    Settings
                </SidebarItem>
                <SidebarItem dataLabel="template" value="/template">
                    Template
                </SidebarItem>
                <SidebarItem dataLabel="preview" value="/preview">
                    Preview
                </SidebarItem>
            </SideBar>
        );

        tree.find('div').at(2).simulate('click');
        expect(func).toHaveBeenCalled();
    });

});
