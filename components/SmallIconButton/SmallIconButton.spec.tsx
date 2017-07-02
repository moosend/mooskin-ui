import * as React from 'react';
import SmallIconButton from './SmallIconButton';

import { shallow } from 'enzyme';

describe('SmallIconButton', () => {

    it('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <SmallIconButton
                onClick={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                transparent
                id={'button1'}
                icon="check"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with custom style & callback is called when clicked', () => {
        const func = jest.fn();

        const component = shallow(<SmallIconButton onClick={func} style={{color: 'grey'}} icon="face"/>);

        expect(component.find('button').prop('disabled')).not.toBe(true);
        expect(component.find('button').prop('style')).toEqual({color: 'grey'});
        expect(component.find('i').text()).toBe('face');
        component.find('button').simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('renders a disabled button with custom style, inverse prop and class', () => {
        const func = jest.fn();

        const component = shallow(<SmallIconButton  onClick={func} disabled className="myStyle"/>);

        expect(component.find('button').prop('disabled')).toEqual(true);
        component.find('button').simulate('click');
        expect(func).not.toHaveBeenCalled();
        expect(component.find('button').hasClass('myStyle')).toEqual(true);
    });

    test('class is added when icon attribute is given', () => {

        const component = shallow(<SmallIconButton icon={'add'} />);
        expect(component.find('i').prop('className')).toContain('icon');
    });
});
