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
                <Col id="sidebar">
                    <SideBar />
                </Col>
                <Col id="breadcrumbs">
                    <Breadcrumbs />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} id="switch">
                    <Switch />
                </Col>
                <Col lg={6} md={6} id="pagination">
                    <Pagination />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} id="smalliconbutton">
                    <SmallIconButton />
                </Col>
                <Col lg={6} md={6} id="button">
                    <Button />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} id="input">
                    <Input />
                </Col>
                <Col lg={6} md={6} id="textarea">
                    <TextArea />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12} id="topnotification">
                    <TopNotification />
                </Col>
                <Col lg={4} md={6} id="radio">
                    <Radio />
                </Col>
                <Col lg={4} md={6} id="checkbox">
                    <CheckBox />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={12} id="select">
                    <Select />
                </Col>
                <Col lg={4} md={6} id="rangebar">
                    <HorizontalRangeBar />
                </Col>
                <Col lg={4} md={6} id="headings">
                    <Headings />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} id="datepicker">
                    <DatePicker />
                </Col>
                <Col lg={8} md={6} id="radioaccordion">
                    <RadioAccordion />
                </Col>
            </Row>
            <Row>
                <Col id="tabbedcontent">
                    <TabbedContent/>
                </Col>
            </Row>
            <Row>
                <Col id="form">
                    <Form />
                </Col>
            </Row>
            <Row>
                <Col xs="hidden" id="table">
                    <Table />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} id="checklistitem">
                    <CheckListItem />
                </Col>
                <Col lg={6} md={6} id="file">
                    <File />
                </Col>
            </Row>
            <Row>
                <Col id="grid">
                    <GridExample/>
                </Col>
            </Row>
            <Row id="charts">
                <Pie />
                <Doughnut />
            </Row>
            <Bar />
            <Line />
        </Grid>
    );
};
