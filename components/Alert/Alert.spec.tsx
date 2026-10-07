import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Box } from '../Box/Box';
import { Alert, AlertCloseButton, AlertDescription, AlertIcon, AlertTitle } from './Alert';

describe('Alert', () => {
	test('renders correctly', () => {
		const fn = jest.fn();
		const { container } = render(
			<Alert variant="left-accent">
				<AlertIcon />
				<AlertTitle>Your browser is outdated!</AlertTitle>
				<AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
				<AlertCloseButton onClick={fn} position="absolute" right={8} top={8} />
			</Alert>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('Status and Variant are inherited by alert children', () => {
		const fn = jest.fn();
		render(
			<Alert variant="left-accent" status="success">
				<AlertIcon />
				<Box>
					<AlertTitle>Your browser is outdated!</AlertTitle>
					<AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
					<AlertCloseButton onClick={fn} position="absolute" right={8} top={8} />
				</Box>
			</Alert>
		);

		expect(screen.getByText('check_circle')).toBeInTheDocument();
		expect(screen.getByText('Your browser is outdated!')).toBeInTheDocument();
		expect(screen.getByText('Your Mooskin experience may be degraded.')).toBeInTheDocument();
		expect(screen.getByText('close')).toBeInTheDocument();
	});

	test('calls callback on close click', () => {
		const fn = jest.fn();
		render(
			<Alert variant="left-accent">
				<AlertIcon />
				<AlertTitle>Your browser is outdated!</AlertTitle>
				<AlertDescription>Your Mooskin experience may be degraded.</AlertDescription>
				<AlertCloseButton onClick={fn} position="absolute" right="8px" top="8px" />
			</Alert>
		);

		fireEvent.click(screen.getByText('close'));
		expect(fn).toHaveBeenCalled();
	});
});
