import * as React from 'react';
import Accordion, {Header, RadioAccordionContent} from './RadioAccordion';

import { mount, render, shallow } from 'enzyme';

describe('RadioAccordion', () => {

    test('renders RadioAccordion properly according to snapshot', () => {

        Date.now = jest.fn(() => 1482363367071);
        Math.random = jest.fn(() => 222333444555);

        const func = jest.fn();

        const component = shallow(
            <Accordion id="5" className="mySwitch" style={{color: 'black'}}>
                <RadioAccordionContent title="title1">Content1</RadioAccordionContent>
                <RadioAccordionContent onClick={func} title="title2" active>Content2</RadioAccordionContent>
                <RadioAccordionContent title="title3" className="classname">Content3</RadioAccordionContent>
            </Accordion>
        );

        expect(component.find('Header').length).toBe(3);
        expect(component.find(RadioAccordionContent).length).toBe(3);

        expect(component.find(RadioAccordionContent).first().prop('children')).toBe('Content1');

        expect(component).toMatchSnapshot();
    });

    test('renders Content properly according to snapshot', () => {

        Math.random = jest.fn(() => 222333444555);

        const component = shallow(
            <RadioAccordionContent
                title="title1"
                style={{color: 'blue'}}
                active
            >
                Some Content
            </RadioAccordionContent>
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
                <RadioAccordionContent title="title1">Content1</RadioAccordionContent>
                <RadioAccordionContent title="title2">Content2</RadioAccordionContent>
            </Accordion>
        );

        expect(component.state('active')).toBe(-1);
        expect(component.find('.accordion-header').first().find('input').prop('checked')).toBeFalsy();
        expect(component.find('.accordion-header').last().find('input').prop('checked')).toBeFalsy();
        expect(component.find('.accordion-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('invisible')).toBeTruthy();

        component.find('.radio').first().simulate('click');

        expect(component.state('active')).toBe(0);
        expect(component.find('.accordion-header').first().find('input').prop('checked')).toBeTruthy();
        expect(component.find('.accordion-header').last().find('input').prop('checked')).toBeFalsy();
        expect(component.find('.accordion-content').first().hasClass('visible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('invisible')).toBeTruthy();

        component.find('.radio').last().simulate('click');

        expect(component.state('active')).toBe(1);
        expect(component.find('.accordion-header').first().find('input').prop('checked')).toBeFalsy();
        expect(component.find('.accordion-header').last().find('input').prop('checked')).toBeTruthy();
        expect(component.find('.accordion-content').first().hasClass('invisible')).toBeTruthy();
        expect(component.find('.accordion-content').last().hasClass('visible')).toBeTruthy();

    });

    test('callback function is called when header is clicked', () => {

        const func = jest.fn();

        const component = mount(
            <Accordion>
                <RadioAccordionContent title="title1">Content1</RadioAccordionContent>
                <RadioAccordionContent onClick={func} title="title2">Content2</RadioAccordionContent>
            </Accordion>
        );

        component.find('.radio').first().simulate('click');
        expect(func).not.toHaveBeenCalled();

        component.find('.radio').last().simulate('click');
        expect(func).toHaveBeenCalled();

    });
});
