import * as React from 'react';
import Accordion, {Content, Header} from './Accordion';

import { mount, render, shallow } from 'enzyme';

describe('Accordion', () => {

    test('renders Accordion properly according to snapshot', () => {

        Date.now = jest.fn(() => 1482363367071);

        const component = shallow(
            <Accordion id="5" className="mySwitch" style={{color: 'black'}}>
                <Content title="title1">Content1</Content>
                <Content title="title2" active>Content2</Content>
                <Content title="title3" className="classname">Content3</Content>
            </Accordion>
        );

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
            <Accordion>
                <Content title="title1">Content1</Content>
                <Content title="title2" active>Content2</Content>
            </Accordion>
        );

        expect(component.state('active')).toBe(1);
        expect(component.find('.accordion-header').first().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.accordion-header').last().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.accordion-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('visible')).toBeTruthy();

        component.find('.radio').first().simulate('click');

        expect(component.state('active')).toBe(0);
        expect(component.find('.accordion-header').first().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.accordion-header').last().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.accordion-content').first().hasClass('visible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('invisible')).toBeTruthy();

        component.find('.radio').last().simulate('click');

        expect(component.state('active')).toBe(1);
        expect(component.find('.accordion-header').first().find('input').prop('defaultChecked')).toBeFalsy();
        expect(component.find('.accordion-header').last().find('input').prop('defaultChecked')).toBeTruthy();
        expect(component.find('.accordion-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('visible')).toBeTruthy();

    });
});
