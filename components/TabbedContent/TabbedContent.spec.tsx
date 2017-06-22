import * as React from 'react';
import TabbedContent, {Header, Tab} from './TabbedContent';

import { mount, render, shallow } from 'enzyme';

describe('TabbedContent', () => {

    test('renders TabbedContent properly according to snapshot', () => {

        const component = shallow(
            <TabbedContent id="5" className="mySwitch" style={{color: 'black'}}>
                <Tab title="title1" iconClass="iconclass">asdasd1</Tab>
                <Tab title="title2" materialIcon="home" active>asdasd2</Tab>
                <Tab title="title3" className="classname">asdasd3</Tab>
            </TabbedContent>
        );

        expect(component.find('Header').length).toBe(3);
        expect(component.find('Tab').length).toBe(3);

        expect(component.find('Tab').first().prop('children')).toBe('asdasd1');

        expect(component).toMatchSnapshot();
    });

    test('renders Tab properly according to snapshot', () => {
        const component = shallow(
        <Tab title="title1" iconClass="iconclass" materialIcon="home" style={{color: 'blue'}} active>asdasd1</Tab>
        );

        expect(component).toMatchSnapshot();
    });

    test('renders Header properly according to snapshot', () => {
        const component = shallow(
            <Header
                title="title1"
                iconClass="iconclass"
                materialIcon="home"
                onClick={() => null}
                active
            />
        );

        expect(component).toMatchSnapshot();
    });

    test('renders TabbedContent properly with icon class and material icon', () => {

        const component = mount(
            <TabbedContent>
                <Tab title="title1" iconClass="iconclass">asdasd1</Tab>
                <Tab title="title2" materialIcon="home">asdasd2</Tab>
            </TabbedContent>
        );

        expect(component.find('.tab-header i.iconclass').length).toBe(1);
        expect(component.find('.tab-header i.material-icons').text()).toBe('home');

    });

    test('renders without any <i> elements when no iconClass or materialIcon is provided', () => {

        const component = mount(
            <TabbedContent>
                <Tab title="title1">asdasd1</Tab>
                <Tab title="title2">asdasd2</Tab>
            </TabbedContent>
        );

        expect(component.find('.tab-header i.iconclass').length).toBe(0);
        expect(component.find('.tab-header i.material-icons').length).toBe(0);

    });

    test('changes the state and displays appropriate tab when one of the headers is clicked and back', () => {

        const component = mount(
            <TabbedContent>
                <Tab title="title1">asdasd1</Tab>
                <Tab title="title2" active>asdasd2</Tab>
            </TabbedContent>
        );

        expect(component.state('activeTab')).toBe(1);
        expect(component.find('.tab-header').first().hasClass('inactiveHeader')).toBeTruthy();
        expect(component.find('.tab-header').last().hasClass('activeHeader')).toBeTruthy();
        expect(component.find('.tab-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.tab-content').last().hasClass('visible')).toBeTruthy();

        component.find('.tab-header').first().simulate('click');

        expect(component.state('activeTab')).toBe(0);
        expect(component.find('.tab-header').last().hasClass('inactiveHeader')).toBeTruthy();
        expect(component.find('.tab-header').first().hasClass('activeHeader')).toBeTruthy();
        expect(component.find('.tab-content').last().hasClass('invisible')).toBeTruthy();
        expect(component.find('.tab-content').first().hasClass('visible')).toBeTruthy();

        component.find('.tab-header').last().simulate('click');

        expect(component.state('activeTab')).toBe(1);
        expect(component.find('.tab-header').first().hasClass('inactiveHeader')).toBeTruthy();
        expect(component.find('.tab-header').last().hasClass('activeHeader')).toBeTruthy();
        expect(component.find('.tab-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.tab-content').last().hasClass('visible')).toBeTruthy();

    });
});
