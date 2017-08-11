import * as React from 'react';
import FileUpload from './FileUpload';

import { shallow } from 'enzyme';

describe('FileUpload', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <FileUpload
                onChange={func}
                disabled
                className="myClass"
                style={{color: 'blue'}}
                placeholder="input placeholder"
                label="with a label ofc"
                required
                buttonLabel="Upload"
                accept=".png"
                multiple
                id="5"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders properly into dom with props', () => {

        const component = shallow(
            <FileUpload accept=".png" multiple required placeholder="file" buttonLabel="upload"/>
        );

        expect(component.find('span').first().text()).toBe('file');
        expect(component.find('span').last().text()).toBe('upload');
        expect(component.find('input').prop('required')).toBeTruthy;
        expect(component.find('input').prop('miltiple')).toBeTruthy;
        expect(component.find('input').prop('disabled')).toBeFalsy;
        expect(component.find('input').prop('accept')).toEqual('.png');
    });

    test('onChange prop callback is called when a file is selected', () => {
        const func = jest.fn();

        const component = shallow(<FileUpload style={{color: 'blue'}} onChange={func}/>);

        component.find('input').simulate('change', { target: { files: [{name: 'File1'}] }});

        expect(func).toHaveBeenCalled();
        expect(component.find('div').prop('style')).toEqual({color: 'blue'});
        expect(component.find('span').first().text()).toBe('File1');
    });

    test('onChange prop callback is called when multiple files are selected', () => {
        const func = jest.fn();

        const component = shallow(<FileUpload className="myClass" multiple onChange={func}/>);

        component.find('input').simulate('change', { target: { files: [{name: 'File1'}, {name: 'File2'}] }});

        expect(func).toHaveBeenCalled();
        expect(component.find('div').hasClass('myClass')).toBeTruthy;
        expect(component.find('span').first().text()).toBe('File1, File2');
    });

    test('onChange prop callback is not called when disabled prop has been passed', () => {
        const func = jest.fn();

        const component = shallow(<FileUpload disabled onChange={func}/>);

        component.find('input').simulate('change', { target: { files: [{name: 'File1'}] }});

        expect(func).not.toHaveBeenCalled();
        expect(component.find('span').first().text()).toBe('No File Selected...');
    });

});
