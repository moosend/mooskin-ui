import * as React from 'react';
import {Item, SideBar, SmallIconButton} from '../index';

import { mount, shallow } from 'enzyme';

describe('SideBar', () => {

    test('renders SideBar correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SideBar
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                display
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
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                display
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
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                display
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
                    <SideBar display>
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
                </Item>
            </SideBar>
        );
        expect(tree).toMatchSnapshot();
    });

    test('onClick callback function is called when sidebar button is clicked', () => {

        const func = jest.fn();

        const component = shallow(
            <SideBar display button onClick={func} />
        );

        component.find(SmallIconButton).simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('onMouseEnter callback function is called when mouse enters Item', () => {

        const func = jest.fn();
        const func2 = jest.fn();

        const component = shallow(
            <SideBar display>
                <Item onMouseEnter={func} onMouseLeave={func2}/>
            </SideBar>
        );

        expect(component.find(SmallIconButton)).toBeFalsy;

        component.find(Item).simulate('mouseenter');
        expect(func).toHaveBeenCalled();

        component.find(Item).simulate('mouseleave');
        expect(func2).toHaveBeenCalled();
    });

    test('SideBar prop tests', () => {

        const component = shallow(
            <SideBar
                className="myClass"
                style={{color: 'blue'}}
                display
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
});
