import * as React from 'react';
import { render } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
	test('renders correctly', () => {
		const { container } = render(<Slider value={5} min={0} max={10} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
