import * as React from 'react';

import SmallIconButton from '../SmallIconButton';
import SideBar, {SidebarItem} from './Sidebar';

import { mount, shallow } from 'enzyme';

describe('SideBar', () => {

    test('renders SideBar correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                button
            />
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
                label="Item"
                image="imagePath"
                imageOn="imageOnPath"
                onMouseEnter={func}
                onMouseLeave={func}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders SideBar with Items correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                button
            >
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
            </SideBar>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders SideBar with Items and secondary SideBar correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                button
            >
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                >
                    <SidebarItem
                        onClick={func}
                        className="myClass"
                        style={{color: 'blue'}}
                        active
                        label="Item"
                        image="imagePath"
                        onMouseEnter={func}
                        onMouseLeave={func}
                    />
                </SidebarItem>
            </SideBar>
        );
        expect(tree).toMatchSnapshot();
    });

    test('SideBar prop tests', () => {

        const component = shallow(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                button
            >
                <SidebarItem
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                />
                <SidebarItem
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                />
            </SideBar>
        );

        expect(component.find(SmallIconButton)).toBeTruthy;
        expect(component.find('.sidebar').prop('className')).toContain('myClass');
        expect(component.find('.sidebar').prop('style')).toEqual({color: 'blue'});

        expect(component.find(SidebarItem).length).toEqual(2);
        expect(component.find(SidebarItem).first().prop('className')).toEqual('myClass');
        expect(component.find(SidebarItem).first().prop('style')).toEqual({color: 'blue'});
        expect(component.find(SidebarItem).first().prop('image')).toEqual('imagePath');
    });

    test('renders different Item images based on active status', () => {

        const component = shallow(
            <SideBar
                button
            >
                <SidebarItem
                    label="Item"
                    image="imagePath"
                    imageOn="imageOnPath"
                />
                <SidebarItem
                    active
                    label="Item"
                    image="imagePath"
                    imageOn="imageOnPath"
                />
            </SideBar>
        );

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('SidebarItem').first().dive().find('img').prop('src')).toEqual('imagePath');
        expect(component.find('SidebarItem').last().dive().find('img').prop('src')).toEqual('imageOnPath');

        component.find('SidebarItem').first().simulate('click');

        expect(component.state('activeItem')).toBe(0);
        expect(component.find('SidebarItem').first().dive().find('img').prop('src')).toEqual('imageOnPath');
        expect(component.find('SidebarItem').last().dive().find('img').prop('src')).toEqual('imagePath');

        component.find('SidebarItem').last().simulate('click');

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('SidebarItem').first().dive().find('img').prop('src')).toEqual('imagePath');
        expect(component.find('SidebarItem').last().dive().find('img').prop('src')).toEqual('imageOnPath');

    });

    test('sidebar hides when hideClick prop is passed and an element is clicked', () => {
        const func = jest.fn();

        const component = mount(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                hideClick
                button
            >
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
                <SidebarItem
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                >
                    <SidebarItem
                        onClick={func}
                        className="myClass"
                        style={{color: 'blue'}}
                        active
                        label="Item"
                        image="imagePath"
                        onMouseEnter={func}
                        onMouseLeave={func}
                    />
                </SidebarItem>
            </SideBar>
        );

        expect(component.state('display')).toBe(false);
        expect(component.state('smallDisplay')).toBe(false);
        expect(component.state('subMenuDisplay')).toBe(false);

        expect(component.hasClass('sidebarOff')).toBeTruthy;
        expect(component.hasClass('smallOff')).toBeTruthy;

        expect(component.find('SubMenu').hasClass('subMenuOn')).toBeFalsy;
        expect(component.find('SubMenu').hasClass('sidebarOff')).toBeTruthy;

        component.find('SmallIconButton').simulate('click');

        expect(component.state('display')).toBe(true);
        expect(component.state('smallDisplay')).toBe(true);
        expect(component.state('subMenuDisplay')).toBe(false);

        expect(component.hasClass('sidebarOn')).toBeTruthy;
        expect(component.hasClass('smallOn')).toBeTruthy;

        component.find('SidebarItem').at(1).simulate('mouseenter');

        expect(component.state('display')).toBe(true);
        expect(component.state('smallDisplay')).toBe(true);
        expect(component.state('subMenuDisplay')).toBe(true);

        expect(component.hasClass('sidebarOn')).toBeTruthy;
        expect(component.hasClass('smallOn')).toBeTruthy;

        expect(component.find('SubMenu').hasClass('subMenuOn')).toBeTruthy;
        expect(component.find('SubMenu').hasClass('sidebarOff')).toBeFalsy;

        expect(component.find('SidebarItem').length).toEqual(3);

        component.find('SidebarItem').last().simulate('click');

        expect(component.state('display')).toBe(false);
        expect(component.state('smallDisplay')).toBe(false);
        expect(component.state('subMenuDisplay')).toBe(false);

        expect(component.hasClass('sidebarOff')).toBeTruthy;
        expect(component.hasClass('smallOff')).toBeTruthy;

        expect(component.find('SubMenu').hasClass('subMenuOn')).toBeFalsy;
        expect(component.find('SubMenu').hasClass('sidebarOff')).toBeTruthy;

    });

    test('it creates custom SidebarItem when children are passed', () => {
        const component = mount(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                hideClick
                button
            >
                <SidebarItem
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                >
                    <img src="imageSource"/>
                    <label>Some Label</label>
                </SidebarItem>
                <SidebarItem
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    label="Item"
                    image="imagePath"
                >
                    <SidebarItem
                        className="myClass"
                        style={{color: 'blue'}}
                        active
                    >
                        <label>Text here</label>
                    </SidebarItem>
                </SidebarItem>
            </SideBar>
        );

        expect(component.find('img').first().prop('src')).toEqual('imageSource');
        expect(component.find('label').first().text()).toEqual('Some Label');

        expect(component.find('label').last().text()).toEqual('Some Label');
    });

});
