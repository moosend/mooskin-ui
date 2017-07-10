import * as React from 'react';
import RadioTabs, {Content, Header} from './RadioTabs';

import { mount, render, shallow } from 'enzyme';

describe('RadioTabs', () => {

    test('renders RadioTabs properly according to snapshot', () => {

        Date.now = jest.fn(() => 1482363367071);

        const component = shallow(
            <RadioTabs id="5" className="mySwitch" style={{color: 'black'}} horizontal>
                <Content title="title1">Content1</Content>
                <Content title="title2" active>Content2</Content>
                <Content title="title3" className="classname">Content3</Content>
            </RadioTabs>
        );

        expect(component.find('Header').first().hasClass('columnTemplateInf')).toBeTruthy;
        expect(component.find('Header').length).toBe(3);
        expect(component.find('Content').length).toBe(3);

        expect(component.find('Content').first().prop('children')).toBe('Content1');

        expect(component).toMatchSnapshot();
    });

    test('renders Content properly according to snapshot', () => {

        const component = shallow(
            <Content
                title="title1"
                style={{color: 'blue'}}
                active
            >
                Some Content
            </Content>
        );

        expect(component).toMatchSnapshot();
    });

    test('renders Header properly according to snapshot', () => {

        Date.now = jest.fn(() => 1482363367071);

        const component = shallow(
            <Header
                title="title1"
                onClick={() => null}
                active
            />
        );

        expect(component).toMatchSnapshot();
    });

    test('changes the state and displays appropriate content when one of the headers is clicked and back', () => {

        const component = mount(
            <RadioTabs>
                <Content title="title1">Content1</Content>
                <Content title="title2" active>Content2</Content>
            </RadioTabs>
        );

        expect(component.state('activeRadio')).toBe(1);
        expect(component.find('.radio-header').first().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.radio-header').last().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.radio-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.radio-content').last().hasClass('visible')).toBeTruthy();

        component.find('.radio-header').first().simulate('click');

        expect(component.state('activeRadio')).toBe(0);
        expect(component.find('.radio-header').first().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.radio-header').last().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.radio-content').first().hasClass('visible')).toBeTruthy();
        expect(component.find('.radio-content').last().hasClass('invisible')).toBeTruthy();

        component.find('.radio-header').last().simulate('click');

        expect(component.state('activeRadio')).toBe(1);
        expect(component.find('.radio-header').first().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.radio-header').last().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.radio-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.radio-content').last().hasClass('visible')).toBeTruthy();

    });
});
