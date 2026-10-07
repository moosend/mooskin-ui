import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select, SelectContainer, SelectFilter, SelectIcon, SelectOption, SelectOptionList, SelectOverlay, SelectPlaceholder } from './Select';

const selectChildren = (
	<>
		<SelectContainer>
			<SelectPlaceholder>Select an option</SelectPlaceholder>
			<SelectFilter />
			<SelectIcon />
		</SelectContainer>
		<SelectOptionList>
			<SelectOption value="1">Option 1</SelectOption>
			<SelectOption value="2">Option 2</SelectOption>
			<SelectOption value="3">Option 3</SelectOption>
			<SelectOption value="4">Option 4</SelectOption>
			<SelectOption value="5">Option 5</SelectOption>
		</SelectOptionList>
		<SelectOverlay />
	</>
);

describe('Select', () => {
	test('renders Select correctly', () => {
		const func = jest.fn();

		const { container } = render(<Select onChange={func}>{selectChildren}</Select>);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders Option correctly and calls callback on click', () => {
		const func = jest.fn();

		render(
			<SelectOption value="1" onClick={func}>
				Option1
			</SelectOption>
		);

		fireEvent.click(screen.getByText('Option1'));

		expect(func).toHaveBeenCalled();
	});

	test('renders Filter correctly and calls callback on change', () => {
		const func = jest.fn();

		render(<SelectFilter onChange={func} />);

		fireEvent.change(screen.getByRole('textbox'), { target: { value: 'filter' } });

		expect(func).toHaveBeenCalled();
	});

	test('should be rendered as a multi select if the selected prop is an array', () => {
		const options = ['2', '4'];

		const func = jest.fn();

		const { container } = render(
			<Select onChange={func} selectedValue={options} dataLabel="select">
				{selectChildren}
			</Select>
		);

		expect(container.firstChild).toMatchSnapshot();
	});
});
