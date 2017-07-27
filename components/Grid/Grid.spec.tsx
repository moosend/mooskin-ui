import * as React from 'react';
import {Button, Input} from '../index';
import Grid, {Col, Row} from './Grid';

import {render, shallow} from 'enzyme';

describe('Grid', () => {

    test('renders Grid correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Grid className="myClass" style={{width: '50px'}}/>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Row correctly', () => {

        const tree = shallow(
            <Row className="myClass" style={{width: '50px'}}/>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Col correctly', () => {

        const tree = shallow(
            <Col className="myClass" style={{width: '50px'}} lg={8} md={6} sm={4} xs={'hidden'}/>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Grid with Row & Col correctly', () => {
        const func = jest.fn();

        const tree = render(
            <Grid className="myClass" style={{width: '50px'}}>
                <Row className="myClass" style={{width: '50px'}}>
                    <Col className="myClass" style={{width: '50px'}} lg={8} md={6} sm={4} xs={'hidden'}>
                        Col
                    </Col>
                </Row>
            </Grid>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders properly with children', () => {

        const component = shallow(
            <Grid className="myClass">
                <Row className="myClass">
                    <Col lg={8} md={6} sm={4} xs={'hidden'}>
                        Col 1
                    </Col>
                    <Col lg={4} md={6} sm={8} xs={12}>
                        Col 2
                    </Col>
                </Row>
            </Grid>
        );

        expect(component.find(Grid).children.length).toBe(1);
        expect(component.find(Row).length).toBe(1);
        expect(component.find(Col).first().children.length).toBe(1);
        expect(component.find(Col).first().hasClass('hidden-xs')).toBeTruthy;
        expect(component.find(Col).first().prop('md')).toEqual(6);
        expect(component.find(Col).first().prop('xs')).toEqual('hidden');
        expect(component.hasClass('myClass')).toBeTruthy;
    });

    test('renders properly with multiple children', () => {

        const component = shallow(
            <Grid className="myClass">
                <Row className="myClass" >
                    <Col>
                        <Input />
                        <Input />
                        <Input />
                    </Col>
                    <Col>
                        <Input />
                        <Input />
                        <Input />
                    </Col>
                </Row>
            </Grid>
        );

        expect(component.find(Grid).children.length).toBe(1);
        expect(component.find(Row).length).toBe(1);
        expect(component.find(Col).length).toBe(2);
        expect(component.find(Col).first().hasClass('col')).toBeTruthy;
        expect(component.find(Input).length).toBe(6);
    });

    test('classes are automatically assigned if no prop for the relevant screen size has NOT been passed', () => {

        const component = shallow(
            <Grid className="myClass">
                <Row className="myClass" >
                    <Col lg={12}>
                        Col
                    </Col>
                </Row>
            </Grid>
        );

        expect(component.find(Grid).children.length).toBe(1);
        expect(component.find(Row).length).toBe(1);
        expect(component.find(Col).hasClass('col-md-12')).toBeTruthy;
        expect(component.find(Col).hasClass('col-sm-12')).toBeTruthy;
        expect(component.find(Col).hasClass('col-xs-12')).toBeTruthy;
    });

});
