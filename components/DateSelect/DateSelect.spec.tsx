import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { DateSelect } from './DateSelect';

const openList = () => {
	fireEvent.click(screen.getByText('Select an option'));
};

describe('DateSelect', () => {
	test('renders other type of the component correctly', () => {
		const func = jest.fn();

		const { container } = render(<DateSelect onChangeSelect={func} format="12-Hour" type="hour" />);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('creates select component for date related hours', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} format="24-Hour" type="hour" />);
		openList();

		expect(screen.getByText('00')).toBeInTheDocument();
		expect(screen.getByText('23')).toBeInTheDocument();
		expect(screen.getAllByText(/^\d{2}$/)).toHaveLength(24);

		fireEvent.click(screen.getByText('00'));
		expect(func).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 0 }));
	});

	test('creates select component for date related hours (12-Hours)', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} format="12-Hour" type="hour" />);
		openList();

		expect(screen.getByText('00 AM')).toBeInTheDocument();
		expect(screen.getByText('11 PM')).toBeInTheDocument();
		expect(screen.getAllByText(/AM|PM/)).toHaveLength(24);

		fireEvent.click(screen.getByText('11 PM'));
		expect(func).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 23 }));
	});

	test('creates select component for minute selection', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} type="minute" />);
		openList();

		expect(screen.getByText('00')).toBeInTheDocument();
		expect(screen.getByText('59')).toBeInTheDocument();
		expect(screen.getAllByText(/^\d{2}$/)).toHaveLength(60);
	});

	test('creates select component for day of the month selection', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} format="1" type="month" />);
		openList();

		expect(screen.getByText('1st')).toBeInTheDocument();
		expect(screen.getByText('31st')).toBeInTheDocument();
		expect(screen.getAllByText(/\d+(st|nd|rd|th)/)).toHaveLength(31);
	});

	test.skip('creates select component for day of the month (february) selection', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} format="2" type="month" />);
		openList();

		expect(screen.getByText('1st')).toBeInTheDocument();
		expect(screen.getByText('28th')).toBeInTheDocument();
		expect(screen.queryByText('31st')).not.toBeInTheDocument();
	});

	test('creates select component for day of the week selection', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} type="week" />);
		openList();

		expect(screen.getByText('Sunday')).toBeInTheDocument();
		expect(screen.getByText('Saturday')).toBeInTheDocument();
		expect(screen.getAllByText(/day$/)).toHaveLength(7);

		fireEvent.click(screen.getByText('Saturday'));
		expect(func).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: 7 }));
	});

	test('creates select component for ordinal selection of days of the month', () => {
		const func = jest.fn();

		render(<DateSelect onChangeSelect={func} type="ordinal" />);
		openList();

		expect(screen.getByText('First')).toBeInTheDocument();
		expect(screen.getByText('Last')).toBeInTheDocument();
		expect(screen.getAllByText(/First|Second|Third|Fourth|Fifth|Last/)).toHaveLength(6);

		fireEvent.click(screen.getByText('Last'));
		expect(func).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ value: -1 }));
	});
});
