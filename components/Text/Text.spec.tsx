import * as React from 'react';
import { Text } from './Text';

import { mount } from 'enzyme';

describe('Text', () => {
	test('renders correctly', () => {
		const tree = mount(<Text>Text here!</Text>);
		expect(tree).toMatchSnapshot();
	});
});
