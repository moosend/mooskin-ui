import * as React from 'react';
import { render } from '@testing-library/react';
import { DateRange } from './DateRange';

const fn = jest.fn();

describe('DateRange', () => {
	test('renders correctly', () => {
		const mockDate = new Date(1466424490000);
		const { container } = render(
			<DateRange
				onChange={fn}
				ranges={[
					{
						endDate: mockDate,
						key: 'selection',
						startDate: mockDate
					}
				]}
			/>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
