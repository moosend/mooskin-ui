import * as React from 'react';
import RadioGroup, {Radio} from './Radio';

import {mount, shallow} from 'enzyme';

describe('Radio', () => {

    test('renders Radio correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Radio
                value="radio1"
                onClick={func}
                className="myClass"
                style={{color: 'blue'}}
                disabled
                label="This is radio 1"
                id={'radio1'}
                selected
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test.skip('callback func is called when Radio is clicked', () => {
        const func = jest.fn();

        const component = shallow(
            <Radio onClick={func} selected label="radio1" value="radio1" />
        );

        expect(component.find(Radio).simulate('click'));

        expect(func).toHaveBeenCalled();
    });

    test.skip('callback func is not called when a disabled Radio is clicked', () => {
        const func = jest.fn();

        const component = shallow(
                <Radio onClick={func} selected label="radio1" value="radio1" disabled />
        );

        expect(component.find(Radio).prop('disabled')).toBeTruthy;
        expect(component.find(Radio).dive().find('input').simulate('click'));

        expect(func).not.toHaveBeenCalled();
    });

});
