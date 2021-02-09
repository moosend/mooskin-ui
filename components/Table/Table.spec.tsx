import * as React from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import Table, { TableHeader, TableHeaderItem, TableRow, TableRowItem } from './Table';

import { mount } from 'enzyme';

describe('Table', () => {
    test('renders correctly', () => {
        const tree = mount(
            <Table>
                <TableHeader>
                    <TableHeaderItem flex={2} justify="center">
                        <Checkbox value="asd" checked={false} onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)} />
                    </TableHeaderItem>
                    <TableHeaderItem flex={8}>Mailing list name</TableHeaderItem>
                    <TableHeaderItem flex={3}>SEGMENTS</TableHeaderItem>
                    <TableHeaderItem flex={3}>Change (last day)</TableHeaderItem>
                    <TableHeaderItem flex={3}>Active recipients</TableHeaderItem>
                    <TableHeaderItem flex={3}>Tags</TableHeaderItem>
                    <TableHeaderItem flex={2} />
                </TableHeader>
                <TableRow>
                    <TableRowItem flex={2} justify="center">
                        <Checkbox
                            color="grey"
                            value="asd"
                            checked={false}
                            onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)}
                        />
                    </TableRowItem>
                    <TableRowItem flex={8}>Main mailing list #1</TableRowItem>
                    <TableRowItem flex={3}>2</TableRowItem>
                    <TableRowItem flex={3}>+12</TableRowItem>
                    <TableRowItem flex={3}>124,543</TableRowItem>
                    <TableRowItem flex={3}>Tags component!</TableRowItem>
                    <TableRowItem flex={2}>Actions</TableRowItem>
                </TableRow>
                <TableRow>
                    <TableRowItem flex={2} justify="center">
                        <Checkbox
                            color="grey"
                            value="asd"
                            checked={false}
                            onClickCheckbox={(e, data) => alert(`Clicked!: ${data.value}`)}
                        />
                    </TableRowItem>
                    <TableRowItem flex={8}>Main mailing list #2</TableRowItem>
                    <TableRowItem flex={3}>3</TableRowItem>
                    <TableRowItem flex={3}>+7</TableRowItem>
                    <TableRowItem flex={3}>80,000</TableRowItem>
                    <TableRowItem flex={3}>Tags component!</TableRowItem>
                    <TableRowItem flex={2}>Actions</TableRowItem>
                </TableRow>
            </Table>
        );

        expect(tree).toMatchSnapshot();
    });
});
