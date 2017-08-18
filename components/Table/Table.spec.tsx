import * as React from 'react';
import {Table, TableHeader} from '../index';

import { mount, shallow } from 'enzyme';

describe('Table', () => {

    test('renders correctly', () => {

        const func = jest.fn();

        const data = [
            {
                campaign: 'NewsLetters for everybody',
                click: '50 %',
                delivered: '13-06-2017 10:59 AM',
                mailingList: 'Mailing list for me',
                open: '75 %',
                status: 'Sent',
                subscribers: 2947,
            },
            {
                campaign: 'Another campaign',
                click: '25 %',
                delivered: '17-02-2017 10:51 AM',
                mailingList: 'Mailing list for me',
                open: '60 %',
                status: 'Sent',
                subscribers: 1628,
            },
            {
                campaign: 'Airship ready campaign',
                click: '80 %',
                delivered: '31-12-2016 04:39 PM',
                mailingList: 'Mailing list for me',
                open: '93 %',
                status: 'Draft',
                subscribers: 4244,
            }
        ];

        const tree = mount(
            <Table data={data} id={'5'} className={'myStyle'} style={{background: 'red'}}>
                <TableHeader
                    className={'myStyle'}
                    style={{background: 'red'}}
                    dataField="delivered"
                    sortable
                    sortfn={func}
                >
                    Delivered
                </TableHeader>
                <TableHeader dataField="campaign" sortable >Campaign</TableHeader>
                <TableHeader dataField="mailingList" hideSmall >Mailing List / Segment</TableHeader>
                <TableHeader dataField="status" sortable hideSmall >Status</TableHeader>
                <TableHeader dataField="open" sortable hideSmall>Open %</TableHeader>
                <TableHeader dataField="click" sortable hideSmall>Click</TableHeader>
                <TableHeader dataField="subscribers" sortable hideSmall >Subscribers</TableHeader>
            </Table>
        );

        tree.find(TableHeader).at(1).simulate('click');
        expect(func).toHaveBeenCalled();

        expect(tree).toMatchSnapshot();

    });

    test('assigns tds correctly', () => {

        const data = [
            {
                country: 'Kosovo',
                id: 5,
                lastname: 'Behrami',
                name: 'Doni'
            },
            {
                country: 'Kaedwen',
                id: 1,
                lastname: 'Rivia',
                name: 'Geralt'
            }
        ];

        const component = mount(
            <Table data={data}>
                <TableHeader dataField="id">ID</TableHeader>
                <TableHeader dataField="name">Name</TableHeader>
                <TableHeader dataField="lastname">Lastname</TableHeader>
                <TableHeader dataField="country">Country</TableHeader>
            </Table>
        );

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kosovo');

        expect(component.find('Col').at(11).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(12).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(13).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(14).find('span').last().text()).toEqual('Kaedwen');

    });

});
