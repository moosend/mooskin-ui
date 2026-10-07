import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Radio, RadioIcon, RadioLabel } from './Radio';

describe('Radio', () => {
	test('renders Radio correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Radio selected onClickRadio={func}>
				<RadioIcon fontColor="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('callback func is called when Radio is clicked', () => {
		const func = jest.fn();

		render(
			<Radio selected onClickRadio={func}>
				<RadioIcon fontColor="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		fireEvent.click(screen.getByText('radio_button_checked'));

		expect(func).toHaveBeenCalled();
	});

	test('callback func is not called when a disabled Radio is clicked', () => {
		const func = jest.fn();

		render(
			<Radio selected onClickRadio={func} disabled>
				<RadioIcon fontColor="red" />
				<RadioLabel>Normal Radio</RadioLabel>
			</Radio>
		);

		fireEvent.click(screen.getByText('radio_button_checked'));

		expect(func).not.toHaveBeenCalled();
	});
});
