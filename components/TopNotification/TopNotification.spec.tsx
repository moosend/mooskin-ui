// tslint:disable-next-line:no-reference
/// <reference path="../custom.d.ts"/>

import * as React from 'react';

import { mount, shallow } from 'enzyme';

import Button from '../Button/Button';
import TopNotification from './TopNotification';

import styles from './TopNotification.css';

describe('TopNotification', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <TopNotification
                className="myClass"
                style={{color: 'blue'}}
                id={'notification1'}
                okButton
                okButtonLabel="click ok"
                onClickOk={func}
                visible
                type="success"
                text="notification for you"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with text and no buttons by default', () => {

        const component = shallow(<TopNotification text="Hello"/>);

        expect(component.find('.top-notification-component').length).toBe(1);
        expect(component.find('.close-notification').length).toBe(1);

        expect(component.find(Button).length).toBe(0);
        expect(component.find('.top-notification-component').text()).toBe('Hello');

    });

    test('renders properly with buttons and button labels', () => {

        const component = shallow(
            <TopNotification text="Hello" okButton cancelButton okButtonLabel="alright" cancelButtonLabel="nono"/>
        );

        expect(component.find(Button).length).toBe(2);
        expect(component.find(Button)
            .findWhere((btn) => (btn.props().children === 'alright')).length)
            .toBe(1);
        expect(component.find(Button)
            .findWhere((btn) => (btn.props().children === 'nono')).length)
            .toBe(1);
    });

    test('renders properly with 1 button and button label', () => {

        const component = shallow(
            <TopNotification text="Hello" okButton okButtonLabel="alright" />
        );

        expect(component.find(Button).length).toBe(1);
        expect(component.find(Button)
            .findWhere((btn) => (btn.props().children === 'alright')).length)
            .toBe(1);
        expect(component.find(Button)
            .findWhere((btn) => (btn.props().children === 'nono')).length)
            .toBe(0);
    });

    test('the proper callback is called when the Ok button is clicked', () => {

        const func = jest.fn();

        const component = mount(
            <TopNotification text="Hello" okButton okButtonLabel="alright" onClickOk={func} />
        );

        const btn = component.find(Button);

        btn.find('button').simulate('click');

        expect(func).toHaveBeenCalled();

    });

    test('renders with proper background and no buttons when type is suces', () => {
        const component = shallow(
            <TopNotification text="Hello" type="success"/>
        );

        expect(component.find('.top-notification-component').hasClass(styles.successNotification)).toBe(true);
    });

    test('renders with proper background and no buttons when type is error', () => {
        const component = shallow(
            <TopNotification text="Hello" type="error"/>
        );

        expect(component.find('.top-notification-component').hasClass(styles.errorNotification)).toBe(true);
    });

    test('renders with proper background and no buttons when type is custom', () => {
        const component = shallow(
            <TopNotification text="Hello" type="custom"/>
        );

        expect(component.find('.top-notification-component').hasClass(styles.customNotification)).toBe(true);
    });

    test('renders with proper background when type is warning', () => {
        const component = shallow(
            <TopNotification text="Hello" type="warning"/>
        );

        expect(component.find('.top-notification-component').hasClass(styles.customNotification)).toBe(true);
        expect(component.find('.text').prop('style')).toEqual({fontSize:  16, marginTop: 2});
        expect(component.find('img').length).toEqual(2);
    });
});
