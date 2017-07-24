import * as React from 'react';
import Table from './Table';

import { shallow } from 'enzyme';

describe('Table', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Table>
                <thead>
                    <tr>
                        <th>th 1</th>
                        <th>th 2</th>
                        <th>th 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>td 1</td>
                        <td>td 2</td>
                        <td>td 3</td>
                    </tr>
                    <tr>
                        <td>td 1</td>
                        <td>td 2</td>
                        <td>td 3</td>
                    </tr>
                </tbody>
            </Table>
        );
        expect(tree).toMatchSnapshot();
    });
});
