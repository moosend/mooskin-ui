import * as React from 'react';

import {TabbedTable, TabTable} from '../../components/index';

export default class TabbedTableExample extends React.Component{
    public render(){
        return(
            <TabbedTable>
                <TabTable title="haha" href="/reports" headerValue={2} info="just some info">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Campaign Name</th>
                            <th>Mailing List / Segment</th>
                            <th>Status</th>
                            <th>Open %</th>
                            <th>Click %</th>
                            <th>Subscribers</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                            <td>td 5</td>
                            <td>td 6</td>
                            <td>td 7</td>
                            <td>td 8</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                            <td>td 5</td>
                            <td>td 6</td>
                            <td>td 7</td>
                            <td>td 8</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                            <td>td 5</td>
                            <td>td 6</td>
                            <td>td 7</td>
                            <td>td 8</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                            <td>td 5</td>
                            <td>td 6</td>
                            <td>td 7</td>
                            <td>td 8</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                            <td>td 5</td>
                            <td>td 6</td>
                            <td>td 7</td>
                            <td>td 8</td>
                        </tr>
                    </tbody>
                </TabTable>
                <TabTable title="hihi">
                    <thead>
                        <tr>
                            <th>Date & Time</th>
                            <th>Campaign Name</th>
                            <th>Mailing List / Segment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                        </tr>
                        <tr>
                            <td>td 1</td>
                            <td>td 2</td>
                            <td>td 3</td>
                            <td>td 4</td>
                        </tr>
                    </tbody>
                </TabTable>
            </TabbedTable>
        );
    }
}
