import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidemenu, SidemenuItem } from './Sidemenu';

describe('Sidemenu', () => {
	test('renders Sidemenu correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Sidemenu activeItem="/settings" onClickItem={func}>
				<SidemenuItem value="/settings">Settings</SidemenuItem>
				<SidemenuItem value="/template">Template</SidemenuItem>
				<SidemenuItem value="/preview">Preview</SidemenuItem>
			</Sidemenu>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders SidemenuItem correctly', () => {
		const func = jest.fn();

		const { container } = render(<SidemenuItem onClick={func} className="myClass" style={{ color: 'blue' }} active />);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('calls click callbacks correctly', () => {
		const func = jest.fn();

		render(
			<Sidemenu activeItem="/settings" onClickItem={func}>
				<SidemenuItem value="/settings">Settings</SidemenuItem>
				<SidemenuItem value="/template">Template</SidemenuItem>
				<SidemenuItem value="/preview">Preview</SidemenuItem>
			</Sidemenu>
		);

		fireEvent.click(screen.getByText('Template'));
		expect(func).toHaveBeenCalled();
	});
});
