import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('SmallIconButton', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(<IconButton onClick={func}>close</IconButton>);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('callback is called when clicked', () => {
		const func = jest.fn();

		render(<IconButton onClick={func}>close</IconButton>);

		fireEvent.click(screen.getByText('close'));
		expect(func).toHaveBeenCalled();
	});

	test('renders a disabled button', () => {
		const func = jest.fn();

		render(
			<IconButton onClick={func} disabled>
				close
			</IconButton>
		);

		fireEvent.click(screen.getByText('close'));
		expect(func).not.toHaveBeenCalled();
	});
});
