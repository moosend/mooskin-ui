import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Button onClick={func} disabled className="myClass" style={{ color: 'blue' }} id={'button1'} href={'www.moosend.com'} type={'submit'}>
				Mooskin
			</Button>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders properly into dom with color and label', () => {
		const func = jest.fn();

		render(<Button onClick={func}>btn label</Button>);

		const button = screen.getByRole('button', { name: 'btn label' });
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
	});

	test('renders a disabled button if disabled prop is passed', () => {
		const func = jest.fn();

		render(
			<Button onClick={func} disabled>
				btn label
			</Button>
		);

		expect(screen.getByRole('button', { name: 'btn label' })).toBeDisabled();
	});

	test('onClick prop callback is called when clicked', () => {
		const func = jest.fn();

		render(<Button onClick={func}>btn label</Button>);
		fireEvent.click(screen.getByRole('button', { name: 'btn label' }));
		expect(func).toHaveBeenCalled();
	});
});
