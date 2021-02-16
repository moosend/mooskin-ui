import * as React from 'react';
import Button from './Button';

import { mount } from 'enzyme';

describe('Button', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Button
                onClick={func}
                disabled
                className="myClass"
                style={{ color: 'blue' }}
                inverseStyle
                id={'button1'}
                href={'www.moosend.com'}
                type={'submit'}
            >
                Mooskin
            </Button>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = mount(<Button onClick={func}>asd</Button>);

        expect(component.find('StyledButtonNormal').text()).toBe('asd');
        expect(component.find('StyledButtonNormal').prop('disabled')).not.toBe(true);
    });

    test('renders a disabled button if disabled prop is passed', () => {
        const func = jest.fn();

        const component = mount(
            <Button onClick={func} disabled>
                asd
            </Button>
        );

        expect(component.find('[disabled=true]').length).not.toEqual(0);
    });

    test('onClick prop callback is called when clicked', () => {
        const func = jest.fn();

        const component = mount(<Button onClick={func}>asd</Button>);
        component.find('StyledButtonNormal').simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
