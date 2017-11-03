import * as React from 'react';
import Label from './Label';

import { shallow } from 'enzyme';

describe('Button', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Label
                className="myClass"
                style={{color: 'blue'}}
                id={'label'}
                abbreviate
            >
                Mooskin
            </Label>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders simple text with label styles', () => {

        const component = shallow(<Label>Mooskin</Label>);

        expect(component.find('div').text()).toBe('Mooskin');
    });

    test('renders simple numbers text', () => {

        const component = shallow(<Label>12345</Label>);

        expect(component.find('div').text()).toBe('12345');
    });

    test('abbreviates number values if abbreviate prop is passed (thousands)', () => {

        const component = shallow(<Label abbreviate>13400</Label>);

        expect(component.find('div').text()).toBe('13.4K');
    });

    test('abbreviates number values if abbreviate prop is passed (millions)', () => {

        const component = shallow(<Label abbreviate>3235942</Label>);

        expect(component.find('div').text()).toBe('3.2M');
    });

    test('abbreviates number values if abbreviate prop is passed (billions)', () => {

        const component = shallow(<Label abbreviate>6345153975</Label>);

        expect(component.find('div').text()).toBe('6.3B');
    });

    test('abbreviates number values if abbreviate prop is passed (trillion - enthusiast mode)', () => {

        const component = shallow(<Label abbreviate>8675345876235</Label>);

        expect(component.find('div').text()).toBe('8.6T');
    });

    // test('renders a disabled button if disabled prop is passed', () => {
    //     const func = jest.fn();

    //     const component = shallow(<Button  onClick={func} disabled>asd</Button>);

    //     expect(component.find('[disabled=true]').length).toBe(1);
    // });

    // test('onClick prop callback is called when clicked', () => {
    //     const func = jest.fn();

    //     const component = shallow(<Button  onClick={func}>asd</Button>);
    //     component.find('button').simulate('click');
    //     expect(func).toHaveBeenCalled();
    // });
});
