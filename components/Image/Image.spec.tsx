import * as React from 'react';
import { Image } from './Image';

import { mount } from 'enzyme';

describe('Image', () => {
	test('renders correctly', () => {
		const tree = mount(<Image src="asd" />);
		expect(tree).toMatchSnapshot();
	});
});
