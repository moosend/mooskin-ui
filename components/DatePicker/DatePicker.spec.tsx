import * as React from 'react';
import { render } from '@testing-library/react';
import { DatePicker } from './DatePicker';

const fn = jest.fn();

describe('DatePicker', () => {
	test('renders correctly', () => {
		const { container } = render(<DatePicker value={new Date(2021, 0, 2)} onChange={fn} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
