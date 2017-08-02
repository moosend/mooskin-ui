import * as React from 'react';
import Pagination, {PaginationButton} from './Pagination';

import {render, shallow} from 'enzyme';

describe('Pagination', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination items={10} onClick={() => 'asd'}/>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with ellipsis, next, prev, first and last buttons', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={() => 'asd'}
                currentItem={10}
                firstBtn
                lastBtn
                nextBtn
                prevBtn
            />
        );

        expect(tree.find('.pagination-first-btn').length).toBe(1);
        expect(tree.find('.pagination-last-btn').length).toBe(1);
        expect(tree.find('.pagination-next-btn').length).toBe(1);
        expect(tree.find('.pagination-prev-btn').length).toBe(1);
        expect(tree.find('.pagination-ellipsis').length).toBe(2);

    });

    test('renders correctly without next, prev, first and last buttons', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={() => 'asd'}
                maxButtons={5}
                currentItem={5}
            />
        );

        expect(tree.find('.pagination-first-btn').length).toBe(0);
        expect(tree.find('.pagination-last-btn').length).toBe(0);
        expect(tree.find('.pagination-next-btn').length).toBe(0);
        expect(tree.find('.pagination-prev-btn').length).toBe(0);
        expect(tree.find('.pagination-ellipsis').length).toBe(2);

    });

    test('renders correctly without ellipsis(or just one) if current number is close enough to the edge', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={() => 'asd'}
                maxButtons={10}
                currentItem={5}
                firstBtn
                lastBtn
                nextBtn
                prevBtn
            />
        );

        expect(tree.find('.pagination-ellipsis').length).toBe(1);

    });

    test('renders with the correct number of buttons when maxButtons is specified', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={() => 'asd'}
                maxButtons={3}
                currentItem={5}
                firstBtn
                lastBtn
                nextBtn
                prevBtn
            />
        );

        expect(tree.find('.pagination-normal-btn').length).toBe(3);

    });

    test('renders without the far away buttons, and same on both sides if maxButtons is an odd number', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={func}
                maxButtons={5} // 2 one the left and 2 on the right, curentItem in middle
                currentItem={5}
            />
        );

        // 3 here because it less than half of maxButtons, meaning it is considered close
        const leftCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 3);

        // 4 here because it less than half of maxButtons, meaning it is considered close
        const leftOtherCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 4);

        // 6 here because it less than half of maxButtons, meaning it is considered close
        const rightCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 6);

        // 7 here because it less than half of maxButtons, meaning it is considered close
        const rightOtherCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 7);

        // 2 here because it more than half of maxButtons, meaning it is considered far
        const leftFarBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 2);

        // 8 here because it more than half of maxButtons, meaning it is considered far
        const rightFarBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 8);

        expect(leftCloseBtn.length).toBe(1);
        expect(rightCloseBtn.length).toBe(1);
        expect(leftOtherCloseBtn.length).toBe(1);
        expect(rightOtherCloseBtn.length).toBe(1);
        expect(leftFarBtn.length).toBe(0);
        expect(rightFarBtn.length).toBe(0);

    });

    test('renders without the far away buttons, with one more on left side if maxButtons is an even number', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={func}
                maxButtons={4} // 2 one the left and 1 on the right, curentItem in middle
                currentItem={5}
            />
        );

        // 3 here because it less than half of maxButtons, meaning it is considered close
        const leftCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 3);

        // 6 here because it less than half of maxButtons, meaning it is considered close
        const rightCloseBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 6);

        // 2 here because it more than half of maxButtons, meaning it is considered far
        const leftFarBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 2);

        // 7 here because it more than half of maxButtons, meaning it is considered far
        const rightFarBtn = tree.find(PaginationButton).filterWhere((comp) => comp.prop('item') === 7);

        expect(leftCloseBtn.length).toBe(1);
        expect(rightCloseBtn.length).toBe(1);
        expect(leftFarBtn.length).toBe(0);
        expect(rightFarBtn.length).toBe(0);

    });

    test('yields first item when firstBtn is clicked, and last item when lastBtn is clicked', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={func}
                maxButtons={3}
                currentItem={5}
                firstBtn
                lastBtn
            />
        );

        const firstBtn = tree.find('.pagination-first-btn').dive().find('.pagination-first-btn');
        const lastBtn = tree.find('.pagination-last-btn').dive().find('.pagination-last-btn');

        firstBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(1);

        lastBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(20);

    });

    test('yields next item when nextBtn is clicked, and previous item when prevBtn is clicked', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={func}
                maxButtons={3}
                currentItem={5}
                nextBtn
                prevBtn
            />
        );

        const prevBtn = tree.find('.pagination-prev-btn').dive().find('.pagination-prev-btn');
        const nextBtn = tree.find('.pagination-next-btn').dive().find('.pagination-next-btn');

        prevBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(4);

        nextBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(6);

    });

    test('yields the right item when it is clicked', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination
                items={20}
                onClick={func}
                maxButtons={20}
                currentItem={5}
            />
        );

        const threeBtn = tree.find(PaginationButton)
                            .filterWhere((comp) => comp.prop('item') === 3)
                            .dive()
                            .find('.pagination-normal-btn');

        const sixBtn = tree.find(PaginationButton)
                            .filterWhere((comp) => comp.prop('item') === 6)
                            .dive()
                            .find('.pagination-normal-btn');

        threeBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(3);

        sixBtn.simulate('click');
        expect(func).toHaveBeenCalledWith(6);

    });

});
