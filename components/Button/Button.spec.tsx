import * as React from 'react';
import Button from './Button';

import { shallow } from 'enzyme';

describe('Button', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Button
                onClick={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                inverseStyle
                id={'button1'}
            >
                Mooskin
            </Button>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with color and label', () => {
        const func = jest.fn();

        const component = shallow(<Button onClick={func}>asd</Button>);

        expect(component.find('button').text()).toBe('asd');
        expect(component.find('button').prop('disabled')).not.toBe(true);
    });

    test('renders a disabled button if disabled prop is passed', () => {
        const func = jest.fn();

        const component = shallow(<Button  onClick={func} disabled>asd</Button>);

        expect(component.find('[disabled=true]').length).toBe(1);
    });

    test('onClick prop callback is called when clicked', () => {
        const func = jest.fn();

        const component = shallow(<Button  onClick={func}>asd</Button>);
        component.find('button').simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
