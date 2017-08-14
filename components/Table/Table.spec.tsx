import * as React from 'react';
import Table, {TBody, TD, TH, THead, TR} from './Table';

import { shallow } from 'enzyme';

describe('Table', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Table>
                <THead>
                    <TR>
                        <TH>th 1</TH>
                        <TH>th 2</TH>
                        <TH>th 3</TH>
                    </TR>
                </THead>
                <TBody>
                    <TR>
                        <TD>td 1</TD>
                        <TD>td 2</TD>
                        <TD>td 3</TD>
                    </TR>
                    <TR>
                        <TD>td 1</TD>
                        <TD>td 2</TD>
                        <TD>td 3</TD>
                    </TR>
                </TBody>
            </Table>
        );
        expect(tree).toMatchSnapshot();
    });

});
