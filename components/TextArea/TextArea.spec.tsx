import * as React from 'react';
import TextArea from './TextArea';

import { mount, shallow } from 'enzyme';

describe('TextArea', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <TextArea
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                id={'textarea'}
                value="textarea value"
                placeholder="textarea placeholder"
                maxlength={50}
                minlength={10}
                description="just some textarea"
                label="with a label ofc"
                labelWidth={30}
                cols={40}
                rows={10}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom and has correct props', () => {
        const func = jest.fn();
        const component = mount(
            <TextArea
                onChange={func}
                value="random"
                placeholder="username"
                rows={30}
                cols={50}
                minlength={5}
                maxlength={50}
                id="1234"
            />
        );

        expect(component.find('textarea').prop('placeholder')).toContain('username');
        expect(component.find('textarea').prop('rows')).toEqual(30);
        expect(component.find('textarea').prop('cols')).toEqual(50);
        expect(component.find('textarea').prop('minLength')).toEqual(5);
        expect(component.find('textarea').prop('value')).toEqual('random');
        expect(component.find('textarea').prop('maxLength')).toEqual(50);
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = mount(<TextArea value="asd" onChange={func}/>);

        component.find('textarea').simulate('change', { target: { value: 'text' }});
        expect(func).toHaveBeenCalled();
    });
});
