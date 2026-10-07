import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Anchor } from './Anchor';

describe('Anchor', () => {
	test('renders correctly', () => {
		const func = jest.fn();
		const { container } = render(
			<Anchor onClick={func} disabled className="myClass" style={{ color: 'blue' }} id={'Anchor1'} href={'www.moosend.com'}>
				Mooskin
			</Anchor>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders text content into the dom', () => {
		render(
			<Anchor href="https://www.moosend.com">
				asd
			</Anchor>
		);
		expect(screen.getByText('asd')).toBeInTheDocument();
	});

	test('renders with the correct href', () => {
		render(
			<Anchor href={'https://www.moosend.com'}>
				asd
			</Anchor>
		);
		expect(screen.getByRole('link', { name: 'asd' })).toHaveAttribute('href', 'https://www.moosend.com');
	});

	test('onClick prop callback is called when clicked', () => {
		const func = jest.fn();
		render(
			<Anchor href="https://www.moosend.com" onClick={func}>asd</Anchor>
		);
		fireEvent.click(screen.getByRole('link'));
		expect(func).toHaveBeenCalled();
	});

	test('onClick is not called when disabled', () => {
		const func = jest.fn();
		render(
			<Anchor href="https://www.moosend.com" onClick={func} disabled>asd</Anchor>
		);
		fireEvent.click(screen.getByRole('link'));
		expect(func).not.toHaveBeenCalled();
	});
});
