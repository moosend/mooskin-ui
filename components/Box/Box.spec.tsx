import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox, CheckboxIcon, CheckboxLabel } from '../Checkbox/Checkbox';
import { Box } from './Box';

describe('Box', () => {
	test('renders Box correctly', () => {
		const { container } = render(
			<Box align="baseline" p={5} m={5}>
				Box
			</Box>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('forwards DOM events and drops component callbacks', () => {
		const onClick = jest.fn();
		const errors: string[] = [];
		const spy = jest.spyOn(console, 'error').mockImplementation((...args: unknown[]) => {
			errors.push(args.map(String).join(' '));
		});

		const { container } = render(
			<Box
				{...({
					onChangeInput: () => undefined,
					onChangeSelect: () => undefined,
					onClickCheckbox: () => undefined,
					onRemoveTag: () => undefined,
				} as React.HTMLAttributes<HTMLElement>)}
				onClick={onClick}
			>
				Box
			</Box>,
		);

		fireEvent.click(screen.getByText('Box'));

		expect(onClick).toHaveBeenCalledTimes(1);
		expect(container.querySelector('[onChangeInput], [onchangeinput], [onClickCheckbox]')).toBeNull();
		expect(errors.filter((message) => /onChangeInput|onClickCheckbox|onRemoveTag|onChangeSelect/.test(message))).toEqual([]);

		spy.mockRestore();
	});

	test('does not leak checkbox callbacks through Box', () => {
		const errors: string[] = [];
		const spy = jest.spyOn(console, 'error').mockImplementation((...args: unknown[]) => {
			errors.push(args.map(String).join(' '));
		});

		render(
			<Checkbox checked onClickCheckbox={() => undefined}>
				<CheckboxIcon />
				<CheckboxLabel>Normal Checkbox</CheckboxLabel>
			</Checkbox>,
		);

		expect(errors.filter((message) => message.includes('onClickCheckbox'))).toEqual([]);

		spy.mockRestore();
	});
});
