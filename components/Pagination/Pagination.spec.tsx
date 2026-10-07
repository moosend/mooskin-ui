import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination, PaginationButton } from './Pagination';

const pageButtons = Array.from({ length: 10 }, (_, index) => <PaginationButton key={index} />);

describe('Pagination', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Pagination onClickButton={func} activePage={3}>
				{pageButtons}
			</Pagination>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('calls callback correctly', () => {
		const func = jest.fn();

		render(
			<Pagination onClickButton={func} activePage={3}>
				{pageButtons}
			</Pagination>
		);

		fireEvent.click(screen.getByText('1'));
		expect(func).toHaveBeenCalled();
	});

	test('renders pagination button count correctly', () => {
		const func = jest.fn();

		render(
			<Pagination onClickButton={func} activePage={3}>
				{pageButtons}
			</Pagination>
		);

		expect(screen.getByText('5')).toBeInTheDocument();
		expect(screen.queryByText('6')).not.toBeInTheDocument();

		fireEvent.click(screen.getByText('Show all'));

		expect(screen.getByText('10')).toBeInTheDocument();
	});
});
