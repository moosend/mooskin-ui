import toJson from 'enzyme-to-json';
import * as React from 'react';
import {Button, Form, FormGroup, Input} from '../index';

import {mount, render, shallow} from 'enzyme';

describe('Form', () => {

    test('renders Form correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Form className="myClass" dataLabel="SomeForm" onSubmit={func} style={{width: '50px'}}/>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders FormGroup correctly', () => {

        const tree = shallow(
            <FormGroup className="myClass" style={{width: '50px'}} horizontal/>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders Form with FormGroup correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Form className="myClass" dataLabel="SomeForm" onSubmit={func} style={{width: '50px'}}>
                <FormGroup className="myClass" style={{width: '50px'}} horizontal/>
            </Form>
        );

        expect(toJson(tree)).toMatchSnapshot();
    });

    test('renders properly with FormGroup and a child', () => {

        const component = mount(
            <Form className="myClass" dataLabel="plan">
                <FormGroup className="myClass" horizontal >
                    <Input />
                </FormGroup>
            </Form>
        );

        expect(component.find(Form).children.length).toBe(1);
        expect(component.find(FormGroup).children.length).toBe(1);
        expect(component.find(FormGroup).hasClass('myClass')).toBeTruthy;
    });

    test('renders properly with multiple children', () => {

        const component = shallow(
            <Form className="myClass" dataLabel="plan">
                <FormGroup className="myClass" horizontal >
                    <FormGroup>
                        <Input />
                        <Input />
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Input />
                        <Input />
                        <Input />
                    </FormGroup>
                </FormGroup>
            </Form>
        );

        expect(component.find(Form).children.length).toBe(1);
        expect(component.find(FormGroup).length).toBe(3);
        expect(component.find(Input).length).toBe(6);
    });

    test('onSubmit callback function called when button is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <Form onSubmit={func} style={{color: 'blue'}}>
                <FormGroup>
                    <Input />
                    <Input />
                </FormGroup>
                <Button type="submit"/>
            </Form>
        );

        component.find(Button).simulate('click', { preventDefault: () => undefined });
        expect(func).toHaveBeenCalled();
    });

    // test('onSubmit callback ignored when button type is not submit, the custom button callback is called', () => {
    //     const func = jest.fn();
    //     const func2 = jest.fn();

    //     const component = shallow(
    //         <Form onSubmit={func} style={{color: 'blue'}}>
    //             <FormGroup>
    //                 <Input />
    //                 <Input />
    //             </FormGroup>
    //             <Button type="reset" onClick={func2}/>
    //         </Form>
    //     );

    //     component.find(Button).simulate('click');
    //     expect(func2).toHaveBeenCalled();
    // });

});
