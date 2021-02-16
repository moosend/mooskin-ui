import * as React from 'react';
import { Input, InputContainer, InputEmoji, InputIcon, InputOption, InputOptionList, InputOptionListTitle, InputOverlay } from './Input';

import { mount } from 'enzyme';

describe('Input', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <InputContainer onChangeInput={func}>
                <Input />
                <InputOptionList icon="check" pr={5}>
                    <InputOptionListTitle>Personalization Tags</InputOptionListTitle>
                    <InputOption value="tag1">Tag 1</InputOption>
                    <InputOption value="tag2">Tag 2</InputOption>
                    <InputOption value="tag3">Tag 3</InputOption>
                </InputOptionList>
                <InputEmoji pr={5} />
                <InputIcon>search</InputIcon>
            </InputContainer>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom and has Placeholder prop', () => {
        const component = mount(<Input value="value" placeholder="username" />);

        expect(component.find('StyledInputSolo').prop('placeholder')).toContain('username');
    });

    test('renders an input with a "required" prop and minlength', () => {
        const component = mount(<Input value="value" minLength={5} required />);

        expect(component.find('StyledInputSolo').prop('required')).toEqual(true);
        expect(component.find('StyledInputSolo').prop('minLength')).toEqual(5);
    });

    test('renders an input with a passed value and maxlength', () => {
        const component = mount(<Input value="random" maxLength={50} />);

        expect(component.find('StyledInputSolo').prop('value')).toEqual('random');
        expect(component.find('StyledInputSolo').prop('maxLength')).toEqual(50);
    });

    test('renders an input with id and type', () => {
        const component = mount(<Input value="value" type="text" id="1234" />);

        expect(component.find('StyledInputSolo').prop('id')).toEqual('1234');
        expect(component.find('StyledInputSolo').prop('type')).toEqual('text');
    });

    test('renders an input with custom css class and style', () => {
        const component = mount(<Input value="value" style={{ color: 'blue' }} className="input-group" />);

        expect(component.find('StyledInputSolo').hasClass('input-group')).toBe(true);
        expect(component.find('StyledInputSolo').prop('style')).toEqual({ color: 'blue' });
    });

    test('onChange prop callback is called when a key is pressed', () => {
        const func = jest.fn();

        const component = mount(<Input value="value" onChange={func} />);

        component.find('StyledInputSolo').simulate('change', { target: { value: 'text' } });
        expect(func).toHaveBeenCalled();
    });

    test('onChange prop callback is called when a key is pressed with an input container', () => {
        const func = jest.fn();

        const component = mount(
            <InputContainer onChangeInput={func}>
                <Input />
                <InputIcon>search</InputIcon>
            </InputContainer>
        );

        component.find(Input).simulate('change', { target: { value: 'text' } });
        expect(func).toHaveBeenCalled();
    });

    test('Icon is valid when icon child is passed', () => {
        const component = mount(
            <InputContainer>
                <Input />
                <InputIcon>search</InputIcon>
            </InputContainer>
        );
        expect(component.find(InputIcon).length).toBe(1);
    });

    test('dropdowns are available when relevant children are passed', () => {
        const func = jest.fn();

        const component = mount(
            <InputContainer onChangeInput={func}>
                <Input />
                <InputOptionList icon="check" pr={5}>
                    <InputOptionListTitle>Personalization Tags</InputOptionListTitle>
                    <InputOption value="tag1">Tag 1</InputOption>
                    <InputOption value="tag2">Tag 2</InputOption>
                    <InputOption value="tag3">Tag 3</InputOption>
                </InputOptionList>
            </InputContainer>
        );

        expect(component.find(InputOptionList).length).toBe(1);
    });
});
