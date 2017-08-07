import * as React from 'react';
import TabbedTable, {TabTable} from './TabbedTable';

import {  mount, shallow } from 'enzyme';

describe('TabbedTable', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <TabbedTable className="myClass" style={{color: 'red'}}>
                <TabTable title={'Table title'} info="some info">
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
                <TabTable title={'Table title 2'}info="some info">
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
                <TabTable title={'Table title'} info="some info">
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
                <TabTable title={'Table title 2'} info="some info">
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
        expect(component.find(TabTable).first().prop('info')).toEqual('some info');
    });

    test('onclick callback is called when header is clicked', () => {

        const func = jest.fn();

        const component = shallow(
            <TabbedTable>
                <TabTable title={'Table title'} info="some info" onClick={func}>
                    <thead>
                        <tr>
                            <th>th 1</th>
                            <th>th 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                        </tr>
                    </tbody>
                </TabTable>
            </TabbedTable>
        );

        component.find('Header').simulate('click');

        expect(func).toHaveBeenCalled();
    });

    // test('changes the state and displays appropriate tab when one of the headers is clicked and back', () => {

    //     const component = mount(
    //         <TabbedTable>
    //             <TabTable title={'Table title'} info="some info">
    //                 <thead>
    //                     <tr>
    //                         <th>th 1</th>
    //                         <th>th 2</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td>td 1</td>
    //                         <td>td 2</td>
    //                     </tr>
    //                     <tr>
    //                         <td>td 1</td>
    //                         <td>td 2</td>
    //                     </tr>
    //                 </tbody>
    //             </TabTable>
    //             <TabTable title={'Table title 2'} info="some info">
    //                 <thead>
    //                     <tr>
    //                         <th>th 1</th>
    //                         <th>th 2</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td>td 1</td>
    //                         <td>td 2</td>
    //                     </tr>
    //                     <tr>
    //                         <td>td 1</td>
    //                         <td>td 2</td>
    //                     </tr>
    //                 </tbody>
    //             </TabTable>
    //         </TabbedTable>
    //     );

    //     expect(component.state('activeTab')).toBe(1);
    //     // expect(component.find('.tab-header').first().hasClass('inactiveHeader')).toBeTruthy();
    //     // expect(component.find('.tab-header').last().hasClass('activeHeader')).toBeTruthy();
    //     // expect(component.find('table').first().hasClass('invisible')).toBeTruthy();
    //     // expect(component.find('table').last().hasClass('visible')).toBeTruthy();

    //     // component.find('.tab-header').first().simulate('click');

    //     // expect(component.state('activeTab')).toBe(0);
    //     // expect(component.find('.tab-header').last().hasClass('inactiveHeader')).toBeTruthy();
    //     // expect(component.find('.tab-header').first().hasClass('activeHeader')).toBeTruthy();
    //     // expect(component.find('table').last().hasClass('invisible')).toBeTruthy();
    //     // expect(component.find('table').first().hasClass('visible')).toBeTruthy();

    //     // component.find('.tab-header').last().simulate('click');

    //     // expect(component.state('activeTab')).toBe(1);
    //     // expect(component.find('.tab-header').first().hasClass('inactiveHeader')).toBeTruthy();
    //     // expect(component.find('.tab-header').last().hasClass('activeHeader')).toBeTruthy();
    //     // expect(component.find('table').first().hasClass('invisible')).toBeTruthy();
    //     // expect(component.find('table').last().hasClass('visible')).toBeTruthy();

    // });
});
