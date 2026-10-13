import * as React from 'react';
import { render } from '@testing-library/react';
import { DateTimePicker } from './DateTimePicker';

const fn = jest.fn();

describe('DateTimePicker', () => {
	test('renders correctly', () => {
		const { container } = render(<DateTimePicker value={new Date(2021, 0, 2)} onChange={fn} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
