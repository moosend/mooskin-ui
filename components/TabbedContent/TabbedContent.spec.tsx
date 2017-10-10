import toJson from 'enzyme-to-json';
import * as React from 'react';
import TabbedContent, {Content, Header, Tab} from './TabbedContent';

import { mount, render, shallow } from 'enzyme';

describe('TabbedContent', () => {

    test('renders TabbedContent properly according to snapshot', () => {

        const component = mount(
            <TabbedContent
                id="5"
                className="mySwitch"
                style={{color: 'black'}}
                type="normal"
                vertical
                alignHeaders="right"
            >
                <Tab>
                    <Header className="mySwitch" style={{color: 'black'}}>Moosend</Header>
                    <Content>Table</Content>
                </Tab>
                <Tab active>
                    <Header className="mySwitch" style={{color: 'black'}}>Home</Header>
                    <Content>Some Content</Content>
                </Tab>
                <Tab>
                    <Header className="mySwitch" style={{color: 'black'}}>About</Header>
                    <Content>Blla blla</Content>
                </Tab>
            </TabbedContent>
        );

        expect(component.find('Header').length).toBe(3);
        expect(component.find('Content').length).toBe(3);

        expect(component.find('Header').first().prop('children')).toBe('Moosend');

        expect(toJson(component)).toMatchSnapshot();
    });

    test('renders TabbedContent vertically with radio styles', () => {

        Math.random = jest.fn(() => 222333444555);

        const component = shallow(
            <TabbedContent vertical type="radio">
                <Tab>
                    <Header className="mySwitch" style={{color: 'black'}}>Moosend</Header>
                    <Content>Table</Content>
                </Tab>
                <Tab active>
                    <Header className="mySwitch" style={{color: 'black'}}>Home</Header>
                    <Content>Some Content</Content>
                </Tab>
                <Tab>
                    <Header className="mySwitch" style={{color: 'black'}}>About</Header>
                    <Content>Blla blla</Content>
                </Tab>
            </TabbedContent>
        );

        expect(component.prop('type')).toBeTruthy;
        expect(component.prop('vertical')).toBeTruthy;

        expect(toJson(component)).toMatchSnapshot();
    });

    test('renders Tab properly according to snapshot', () => {
        const component = shallow(
            <Tab style={{color: 'blue'}} active/>
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    test('renders Header properly according to snapshot', () => {
        const component = shallow(
            <Header
                onClick={() => null}
                active
            >
                just some Header
            </Header>
        );

        expect(toJson(component)).toMatchSnapshot();
    });

    test('renders input and callback function is called when header is clicked', () => {

        const func = jest.fn();
        Math.random = jest.fn(() => 222333444555);

        const component = shallow(
            <TabbedContent type="radio">
                <Tab>
                    <Header onClick={func} className="mySwitch" style={{color: 'black'}}>Moosend</Header>
                    <Content>Table</Content>
                </Tab>
            </TabbedContent>
        );

        component.find(Header).simulate('click');

        expect(component.find('input')).toBeTruthy;
        expect(func).toHaveBeenCalled();

    });

    test('changes the state and displays appropriate tab when one of the headers is clicked and back', () => {

        const component = mount(
            <TabbedContent>
                <Tab>
                    <Header>Moosend</Header>
                    <Content>Table</Content>
                </Tab>
                <Tab active>
                    <Header>Home</Header>
                    <Content>Some Content</Content>
                </Tab>
            </TabbedContent>
        );

        expect(component.state('activeTab')).toBe(1);
        // expect(component.find('Header').first().hasClass('inactiveHeader')).toBeTruthy();
        // expect(component.find('Header').last().hasClass('activeHeader')).toBeTruthy();
        // expect(component.find('Content').first().hasClass('invisible')).toBeTruthy();
        // expect(component.find('Content').last().hasClass('visible')).toBeTruthy();

        component.find('Header').first().simulate('click');

        expect(component.state('activeTab')).toBe(0);
        // expect(component.find('Header').last().hasClass('inactiveHeader')).toBeTruthy();
        // expect(component.find('Header').first().hasClass('activeHeader')).toBeTruthy();
        // expect(component.find('Content').last().hasClass('invisible')).toBeTruthy();
        // expect(component.find('Content').first().hasClass('visible')).toBeTruthy();

        component.find('Header').last().simulate('click');

        expect(component.state('activeTab')).toBe(1);
        // expect(component.find('Header').first().hasClass('inactiveHeader')).toBeTruthy();
        // expect(component.find('Header').last().hasClass('activeHeader')).toBeTruthy();
        // expect(component.find('Content').first().hasClass('invisible')).toBeTruthy();
        // expect(component.find('Content').last().hasClass('visible')).toBeTruthy();

    });

});
