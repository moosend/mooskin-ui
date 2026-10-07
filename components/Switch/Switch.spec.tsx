import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(<Switch style={{ color: 'blue' }} onClickSwitch={func} active text="Switch" />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders a disabled Switch with custom css class and id', () => {
		render(<Switch text="INCOMPLETE" disabled />);

		expect(screen.getByText('INCOMPLETE')).toBeInTheDocument();
	});

	test('onClick is not called when a disabled Switch is clicked', () => {
		const func = jest.fn();

		render(<Switch text="INCOMPLETE" disabled onClickSwitch={func} />);

		fireEvent.click(screen.getByText('INCOMPLETE'));
		expect(func).not.toHaveBeenCalled();
	});

	test('onClick prop callback is called when the Switch is clicked', () => {
		const func = jest.fn();

		render(<Switch text="Inactive" onClickSwitch={func} />);

		fireEvent.click(screen.getByText('Inactive'));
		expect(func).toHaveBeenCalled();
	});
});
