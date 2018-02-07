import * as React from 'react';
import TextEditor from './TextEditor';

import { Editor } from 'react-draft-wysiwyg';

import { mount, shallow } from 'enzyme';

describe('TextEditor', () => {

    // test('renders correctly', () => {
    //     const func = jest.fn();

    //     const tree = shallow(
    //         <TextEditor
    //             label="label"
    //             editorClassName="myClass"
    //             editorStyle={{color: 'blue'}}
    //             onChange={func}
    //             toolbarClassName="toolbarClass"
    //             wrapperClassName="wrapperClass"
    //             draggable
    //             toolbarOnFocus
    //             wrapperStyle={{color: 'red'}}
    //             toolbarStyle={{background: 'green'}}
    //         />
    //     );
    //     expect(tree).toMatchSnapshot();
    // });

    test('renders correctly with custom editor props', () => {
        const func = jest.fn();

        const component = shallow(
            <TextEditor
                label="label"
                editorClassName="myClass"
                editorStyle={{color: 'blue'}}
                onChange={func}
                toolbarClassName="toolbarClass"
                wrapperClassName="wrapperClass"
            />
        );

        expect(component.find(Editor).prop('editorClassName')).toEqual('myClass');
        expect(component.find(Editor).prop('editorStyle')).toEqual({color: 'blue'});
        expect(component.find(Editor).prop('toolbarClassName')).toEqual('toolbarClass');

        component.find(Editor).simulate('change');

        expect(func).toHaveBeenCalled();
    });

    test('callback function is called on editor change', () => {
        const func = jest.fn();

        const component = shallow(
            <TextEditor
                onChange={func}
            />
        );

        component.find(Editor).simulate('change');

        expect(func).toHaveBeenCalled();
    });

    // test('position changes when editor is draggable and style classes are passed down', () => {
    //     const func = jest.fn();

    //     const component = mount(
    //         <TextEditor
    //             draggable
    //             toolbarClassName="customToolbar"
    //             wrapperClassName="customWrapper"
    //         />
    //     );

    //     expect(component.state('pos')).toEqual({left: 0, top: -70});

    //     expect(component.find('div').first().prop('className')).toContain('customWrapper');
    //     expect(component.find('div').at(2).prop('className')).toContain('customToolbar');

    //     component.find('div').at(2).simulate('mousedown');

    //     component.find('div').at(2).simulate('mousemove', {
    //         pageX: 42,
    //         pageY: 44
    //     });

    //     expect(component.state('pos')).toEqual({left: 0, top: -70});

    // });

});
