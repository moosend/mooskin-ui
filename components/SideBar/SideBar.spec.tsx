import * as React from 'react';
import {Item, SideBar} from '../index';

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
});
