import * as React from 'react';

import Sidemenu, { SidemenuItem } from './Sidemenu';

import { mount } from 'enzyme';

describe('Sidemenu', () => {
    test('renders Sidemenu correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Sidemenu activeItem="/settings" onClickItem={func}>
                <SidemenuItem value="/settings">Settings</SidemenuItem>
                <SidemenuItem value="/template">Template</SidemenuItem>
                <SidemenuItem value="/preview">Preview</SidemenuItem>
            </Sidemenu>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders SidemenuItem correctly', () => {
        const func = jest.fn();

        const tree = mount(<SidemenuItem onClick={func} className="myClass" style={{ color: 'blue' }} active />);
        expect(tree).toMatchSnapshot();
    });

    test('calls click callbacks correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Sidemenu activeItem="/settings" onClickItem={func}>
                <SidemenuItem value="/settings">Settings</SidemenuItem>
                <SidemenuItem value="/template">Template</SidemenuItem>
                <SidemenuItem value="/preview">Preview</SidemenuItem>
            </Sidemenu>
        );

        tree.find('div').at(2).simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
