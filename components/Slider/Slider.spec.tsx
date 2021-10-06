import * as React from 'react';
import { Slider } from './Slider';

import { mount } from 'enzyme';

describe('Slider', () => {
	test('renders correctly', () => {
		const tree = mount(<Slider value={5} min={0} max={10} />);
		expect(tree).toMatchSnapshot();
	});
});
