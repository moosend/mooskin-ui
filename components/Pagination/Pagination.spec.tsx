import * as React from 'react';
import Pagination, { PaginationButton } from './Pagination';

import { mount } from 'enzyme';

describe('Pagination', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Pagination onClickButton={func} activePage={3}>
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
            </Pagination>
        );

        expect(tree).toMatchSnapshot();
    });

    test('calls callback correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Pagination onClickButton={func} activePage={3}>
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
            </Pagination>
        );

        tree.find(PaginationButton).first().simulate('click');
        expect(func).toHaveBeenCalled();
    });

    test('renders pagination button count correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Pagination onClickButton={func} activePage={3}>
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
                <PaginationButton />
            </Pagination>
        );

        expect(tree.find(PaginationButton).length).toEqual(5);

        tree.find('StyledPaginationShowAll').first().simulate('click');

        expect(tree.find(PaginationButton).length).toEqual(10);
    });
});
