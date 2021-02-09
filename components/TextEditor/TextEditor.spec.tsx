import * as React from 'react';
import TextEditor from './TextEditor';

import { mount } from 'enzyme';

const fn = jest.fn();

describe.skip('TextEditor', () => {
    test('renders correctly', () => {
        const tree = mount(<TextEditor value="<p>TextEditor</p>" onEditorChange={fn} />);
        expect(tree).toMatchSnapshot();
    });

    test('renders inline correctly', () => {
        const tree = mount(<TextEditor inline value="<p>TextEditor</p>" onEditorChange={fn} />);
        expect(tree).toMatchSnapshot();
    });

    test('renders disabled correctly', () => {
        const tree = mount(<TextEditor disabled value="<p>TextEditor</p>" onEditorChange={fn} />);
        expect(tree).toMatchSnapshot();
    });

    test('renders with menubar correctly', () => {
        const tree = mount(<TextEditor menubar value="<p>TextEditor</p>" onEditorChange={fn} />);
        expect(tree).toMatchSnapshot();
    });
});
