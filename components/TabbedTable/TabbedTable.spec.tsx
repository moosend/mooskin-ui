import * as React from 'react';
import TabbedTable, {TabTable} from './TabbedTable';

import {  mount, shallow } from 'enzyme';

describe('TabbedTable', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <TabbedTable className="myClass" style={{color: 'red'}}>
                <TabTable title={'Table title'} href="/reports" info="some info">
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
                </TabTable>
                <TabTable title={'Table title 2'} href="/maillist" info="some info">
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
                </TabTable>
            </TabbedTable>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders 2 TabTables with children', () => {
        const func = jest.fn();

        const component = shallow(
            <TabbedTable className="myClass" style={{color: 'red'}}>
                <TabTable title={'Table title'} href="/reports" info="some info">
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
                </TabTable>
                <TabTable title={'Table title 2'} href="/maillist" info="some info">
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
                </TabTable>
            </TabbedTable>
        );

        expect(component.find(TabTable).length).toEqual(2);
        expect(component.find('td').length).toEqual(12);

        expect(component.find(TabTable).first().prop('title')).toEqual('Table title');
        expect(component.find(TabTable).first().prop('href')).toEqual('/reports');
        expect(component.find(TabTable).first().prop('info')).toEqual('some info');
    });

});
