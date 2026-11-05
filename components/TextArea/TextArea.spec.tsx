import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(<TextArea value="asd" onChange={func} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders properly into dom and has Placeholder prop', () => {
		render(<TextArea value="value" placeholder="username" />);

		expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
	});

	test('renders an input with a "required" prop and minlength', () => {
		render(<TextArea value="value" minLength={5} required />);

		const textArea = screen.getByRole('textbox');
		expect(textArea).toBeRequired();
		expect(textArea).toHaveAttribute('minLength', '5');
	});

	test('renders an input with a passed value and maxlength', () => {
		render(<TextArea value="random" maxLength={50} />);

		const textArea = screen.getByRole('textbox');
		expect(textArea).toHaveValue('random');
		expect(textArea).toHaveAttribute('maxLength', '50');
	});

	test('renders an input with custom css class and style', () => {
		render(<TextArea value="value" style={{ color: 'blue' }} className="input-group" />);

		const textArea = screen.getByRole('textbox');
		expect(textArea).toHaveClass('input-group');
		expect(textArea).toHaveStyle({ color: 'blue' });
	});

	test('onChange prop callback is called when a key is pressed', () => {
		const func = jest.fn();

		render(<TextArea value="value" onChange={func} />);

		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'text' } });
		expect(func).toHaveBeenCalled();
	});
});
