import * as React from 'react';
import {Item, SideBar, SmallIconButton} from '../index';

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

    test('renders Item correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Item
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                active
                href="www.moosend.com"
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
                <Item
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
                <Item
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
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
                <Item
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                />
                <Item
                    onClick={func}
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
                    label="Item"
                    image="imagePath"
                    onMouseEnter={func}
                    onMouseLeave={func}
                >
                    <Item
                        onClick={func}
                        className="myClass"
                        style={{color: 'blue'}}
                        active
                        href="www.moosend.com"
                        label="Item"
                        image="imagePath"
                        onMouseEnter={func}
                        onMouseLeave={func}
                    />
                </Item>
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
                <Item
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
                    label="Item"
                    image="imagePath"
                />
                <Item
                    className="myClass"
                    style={{color: 'blue'}}
                    active
                    href="www.moosend.com"
                    label="Item"
                    image="imagePath"
                />
            </SideBar>
        );

        expect(component.find(SmallIconButton)).toBeTruthy;
        expect(component.find('.sidebar').prop('className')).toContain('myClass');
        expect(component.find('.sidebar').prop('style')).toEqual({color: 'blue'});

        expect(component.find(Item).length).toEqual(2);
        expect(component.find(Item).first().prop('className')).toEqual('myClass');
        expect(component.find(Item).first().prop('style')).toEqual({color: 'blue'});
        expect(component.find(Item).first().prop('href')).toEqual('www.moosend.com');
        expect(component.find(Item).first().prop('image')).toEqual('imagePath');
    });

    test('renders different Item images based on active status', () => {

        const component = shallow(
            <SideBar
                button
            >
                <Item
                    label="Item"
                    image="imagePath"
                    imageOn="imageOnPath"
                />
                <Item
                    active
                    label="Item"
                    image="imagePath"
                    imageOn="imageOnPath"
                />
            </SideBar>
        );

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('Item').first().dive().find('img').prop('src')).toEqual('imagePath');
        expect(component.find('Item').last().dive().find('img').prop('src')).toEqual('imageOnPath');

        component.find('Item').first().simulate('click');

        expect(component.state('activeItem')).toBe(0);
        expect(component.find('Item').first().dive().find('img').prop('src')).toEqual('imageOnPath');
        expect(component.find('Item').last().dive().find('img').prop('src')).toEqual('imagePath');

        component.find('Item').last().simulate('click');

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('Item').first().dive().find('img').prop('src')).toEqual('imagePath');
        expect(component.find('Item').last().dive().find('img').prop('src')).toEqual('imageOnPath');

    });

    test('SideBar button classes and styles', () => {

                const component = shallow(
                    <SideBar
                        buttonClass="myClass"
                        buttonStyle={{color: 'blue'}}
                        button
                    >
                        <Item
                            className="myClass"
                            style={{color: 'blue'}}
                            active
                            href="www.moosend.com"
                            label="Item"
                            image="imagePath"
                        />
                        <Item
                            className="myClass"
                            style={{color: 'blue'}}
                            active
                            href="www.moosend.com"
                            label="Item"
                            image="imagePath"
                        />
                    </SideBar>
                );

                expect(component.find(SmallIconButton).hasClass('myClass')).toBeTruthy;
                expect(component.find(SmallIconButton).prop('style')).toEqual({color: 'blue'});
            });
});
