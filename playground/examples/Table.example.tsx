import * as React from 'react';

import {Fieldset} from '../../components/index/index';
import {Table} from '../../components/index/index';

export default (props: any) => {

    return(
        <Fieldset legend="Table Element" style={{display: 'inline-block'}}>
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
                    <tr>
                        <td>td 1</td>
                        <td>td 2</td>
                        <td>td 3</td>
                    </tr>
                </tbody>
            </Table>
        </Fieldset>
    );
};
