import toJson from 'enzyme-to-json';
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

        expect(toJson(tree)).toMatchSnapshot();

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

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kaedwen');

    });

    test('check if toggle button column exists', () => {

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

        expect(component.find('Col').first().hasClass('buttonCol')).toBeTruthy;
        expect(component.find('SmallIconButton')).toBeTruthy;

    });

    test('check if if popovers exist and has hidden header', () => {

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

        const col1 = component.find('Col').at(1).find('span').last().text();
        const col2 = component.find('Popover').at(0).find('span').at(1).text();

        const header1 = component.find('Col').at(1).find('span').first().text();
        const header2 = component.find('Popover').at(1).find('span').first().text();

        expect(col1).toEqual(col2);
        expect(header1).toEqual(header2);

    });

    test('popover appears when button is clicked', () => {

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

        expect(component.state('activeRow')).toBe(-1);

        component.find('SmallIconButton').first().simulate('click');

        expect(component.state('activeRow')).toBe(0);
        expect(component.find('Popover').first().hasClass('active')).toBeTruthy;

        component.find('.cover').simulate('click');

        expect(component.state('activeRow')).toBe(-1);

        component.find('SmallIconButton').at(1).simulate('click');

        expect(component.state('activeRow')).toBe(1);
        expect(component.find('Popover').first().hasClass('inactive')).toBeTruthy;
        expect(component.find('Popover').at(1).hasClass('active')).toBeTruthy;

    });

    test('sort rows when specific header is clicked', () => {

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
                <TableHeader dataField="id" sortable>ID</TableHeader>
                <TableHeader dataField="name" >Name</TableHeader>
                <TableHeader dataField="lastname">Lastname</TableHeader>
                <TableHeader dataField="country" sortable>Country</TableHeader>
            </Table>
        );

        expect(component.state('data')).toEqual([
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
        ]);

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kosovo');

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kaedwen');

        component.find(TableHeader).at(1).simulate('click');

        expect(component.state('sortBy')).toEqual('id');

        expect(component.state('data')).toEqual([
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
        ]);

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kosovo');

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kaedwen');

        component.find(TableHeader).at(1).simulate('click');

        expect(component.state('data')).toEqual([
            {
                country: 'Kaedwen',
                id: 1,
                lastname: 'Rivia',
                name: 'Geralt'
            },
            {
                country: 'Kosovo',
                id: 5,
                lastname: 'Behrami',
                name: 'Doni'
            }
        ]);

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kaedwen');

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kosovo');

        component.find(TableHeader).at(4).simulate('click');

        expect(component.state('sortBy')).toEqual('country');

        expect(component.state('data')).toEqual([
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
        ]);

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kosovo');

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kaedwen');

        component.find(TableHeader).at(3).simulate('click');

        expect(component.state('sortBy')).toEqual('country');

        expect(component.state('data')).toEqual([
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
        ]);

        expect(component.find('Col').at(1).find('span').last().text()).toEqual('5');
        expect(component.find('Col').at(2).find('span').last().text()).toEqual('Doni');
        expect(component.find('Col').at(3).find('span').last().text()).toEqual('Behrami');
        expect(component.find('Col').at(4).find('span').last().text()).toEqual('Kosovo');

        expect(component.find('Col').at(6).find('span').last().text()).toEqual('1');
        expect(component.find('Col').at(7).find('span').last().text()).toEqual('Geralt');
        expect(component.find('Col').at(8).find('span').last().text()).toEqual('Rivia');
        expect(component.find('Col').at(9).find('span').last().text()).toEqual('Kaedwen');

    });

});
