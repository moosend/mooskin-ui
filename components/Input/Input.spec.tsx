import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input, InputContainer, InputEmoji, InputIcon, InputOption, InputOptionList, InputOptionListTitle } from './Input';

describe('Input', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<InputContainer onChangeInput={func}>
				<Input />
				<InputOptionList icon="check" pr={5}>
					<InputOptionListTitle>Personalization Tags</InputOptionListTitle>
					<InputOption value="tag1">Tag 1</InputOption>
					<InputOption value="tag2">Tag 2</InputOption>
					<InputOption value="tag3">Tag 3</InputOption>
				</InputOptionList>
				<InputEmoji pr={5} />
				<InputIcon>search</InputIcon>
			</InputContainer>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders properly into dom and has Placeholder prop', () => {
		render(<Input value="value" placeholder="username" />);

		expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
	});

	test('renders an input with a "required" prop and minlength', () => {
		render(<Input value="value" minLength={5} required />);

		const input = screen.getByRole('textbox');
		expect(input).toBeRequired();
		expect(input).toHaveAttribute('minLength', '5');
	});

	test('renders an input with a passed value and maxlength', () => {
		render(<Input value="random" maxLength={50} />);

		const input = screen.getByRole('textbox');
		expect(input).toHaveValue('random');
		expect(input).toHaveAttribute('maxLength', '50');
	});

	test('renders an input with id and type', () => {
		render(<Input value="value" type="text" id="1234" />);

		const input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('id', '1234');
		expect(input).toHaveAttribute('type', 'text');
	});

	test('renders an input with custom css class and style', () => {
		render(<Input value="value" style={{ color: 'blue' }} className="input-group" />);

		const input = screen.getByRole('textbox');
		expect(input).toHaveClass('input-group');
		expect(input).toHaveStyle({ color: 'blue' });
	});

	test('onChange prop callback is called when a key is pressed', () => {
		const func = jest.fn();

		render(<Input value="value" onChange={func} />);

		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'text' } });
		expect(func).toHaveBeenCalled();
	});

	test('onChange prop callback is called when a key is pressed with an input container', () => {
		const func = jest.fn();

		render(
			<InputContainer onChangeInput={func}>
				<Input />
				<InputIcon>search</InputIcon>
			</InputContainer>
		);

		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'text' } });
		expect(func).toHaveBeenCalled();
	});

	test('Icon is valid when icon child is passed', () => {
		render(
			<InputContainer>
				<Input />
				<InputIcon>search</InputIcon>
			</InputContainer>
		);
		expect(screen.getByText('search')).toBeInTheDocument();
	});

	test('dropdowns are available when relevant children are passed', () => {
		const func = jest.fn();

		render(
			<InputContainer onChangeInput={func}>
				<Input />
				<InputOptionList icon="check" pr={5}>
					<InputOptionListTitle>Personalization Tags</InputOptionListTitle>
					<InputOption value="tag1">Tag 1</InputOption>
					<InputOption value="tag2">Tag 2</InputOption>
					<InputOption value="tag3">Tag 3</InputOption>
				</InputOptionList>
			</InputContainer>
		);

		fireEvent.click(screen.getByText('check'));

		expect(screen.getByText('Personalization Tags')).toBeInTheDocument();
		expect(screen.getByText('Tag 1')).toBeInTheDocument();
	});
});
