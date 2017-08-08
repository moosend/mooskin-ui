// tslint:disable-next-line:no-reference
/// <reference path="../components/custom.d.ts"/>

import * as React from 'react';

import {Col, Grid, Row} from '../components/index';

import Bar from './examples/Bar.example';
import Breadcrumbs from './examples/Breadcrumbs.example';
import Button from './examples/Button.example';
import CheckBox from './examples/CheckBox.example';
import CheckListItem from './examples/CheckListItem.example';
import DatePicker from './examples/DatePicker.example';
import Doughnut from './examples/Doughnut.example';
import File from './examples/File.example';
import Form from './examples/Form.example';
import GridExample from './examples/Grid.example';
import Headings from './examples/Headings.example';
import HorizontalRangeBar from './examples/HorizontalRangeBar.example';
import Input from './examples/Input.example';
import Line from './examples/Line.example';
import Pagination from './examples/Pagination.example';
import Pie from './examples/Pie.example';
import Radio from './examples/Radio.example';
import RadioAccordion from './examples/RadioAccordion.example';
import Select from './examples/Select.example';
import SideBar from './examples/SideBar.example';
import SmallIconButton from './examples/SmallIconButton.example';
import Switch from './examples/Switch.example';
import TabbedContent from './examples/TabbedContent.example';
import Table from './examples/Table.example';
import TextArea from './examples/TextArea.example';
import TopNotification from './examples/TopNotification.example';

export default (props: any) => {
    return(
        <Grid>
            <Row>
                <Col>
                    <SideBar />
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12} />
                <Col lg={6} md={12}>
                    <Breadcrumbs />
                </Col>
                <Col lg={6} md={12}>
                    <Pagination />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12}>
                    <Select />
                </Col>
                <Col lg={4} md={6}>
                    <Button />
                </Col>
                <Col lg={4} md={6}>
                    <Switch />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6}>
                    <Input />
                </Col>
                <Col lg={6} md={6}>
                    <TextArea />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12}>
                    <TopNotification />
                </Col>
                <Col lg={4} md={6}>
                    <Radio />
                </Col>
                <Col lg={4} md={6}>
                    <CheckBox />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12}>
                    <SmallIconButton />
                </Col>
                <Col lg={4} md={6}>
                    <HorizontalRangeBar />
                </Col>
                <Col lg={4} md={6}>
                    <Headings />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6}>
                    <DatePicker />
                </Col>
                <Col lg={8} md={6}>
                    <RadioAccordion />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TabbedContent />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form />
                </Col>
            </Row>
            <Row>
                <Col xs="hidden">
                    <Table />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6}>
                    <CheckListItem />
                </Col>
                <Col lg={6} md={6}>
                    <File />
                </Col>
            </Row>
            <Row>
                <Col>
                    <GridExample />
                </Col>
            </Row>
            <Row>
                <Pie />
                <Doughnut />
            </Row>
            <Bar />
            <Line />
        </Grid>
    );
};
