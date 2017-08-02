import * as React from 'react';
import Pagination from './Pagination';

import {render, shallow} from 'enzyme';

describe('Pagination', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Pagination items={10} onClick={() => 'asd'}/>
        );

        expect(tree).toMatchSnapshot();
    });
});
