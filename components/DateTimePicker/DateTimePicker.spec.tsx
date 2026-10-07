import * as React from 'react';
import { render } from '@testing-library/react';
import { DateTimePicker } from './DateTimePicker';

const fn = jest.fn();

describe('DateTimePicker', () => {
	test('renders correctly', () => {
		const { container } = render(<DateTimePicker value="01/02/2021" onChange={fn} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
