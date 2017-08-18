// tslint:disable-next-line:no-reference
/// <reference path="../components/custom.d.ts"/>

import * as React from 'react';

import {renderEditableExample} from './tools/ReactLiveEditor/ReactLiveEditor';

import {Col, Grid, H1, Row} from '../components/index';
import Bar from './examples/Bar.example';
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
import StatsBox from './examples/StatsBox.example';
import Steps from './examples/Steps.example';

import TabbedContent from './examples/TabbedContent.example';
import Table from './examples/Table.example';
import TextArea from './examples/TextArea.example';
import TopNotification from './examples/TopNotification.example';

import {Switch} from '../components/index';

// import {
//     Button,
//     CheckListItem,
//     DatePicker,
//     Fieldset,
//     FileUpload,
//     HorizontalRangeBar,
//     Input,
//     Pagination,
//     SmallIconButton,
//     Switch,
//     Table,
//     TextArea,
//     TopNotification
// } from '../components/index';

// import {Option, Select} from '../components/index';
// import {H1, H2, H3, H4, H5, H6} from '../components/index';
// import {Radio, RadioGroup} from '../components/index';
// import {CheckBox, CheckboxGroup} from '../components/index';
// import {Bar, Doughnut, Line, Pie} from '../components/index';
// import {Col, Grid, Row} from '../components/index';
// import {Content, Header, Tab, TabbedContent} from '../components/index';
// import {RadioAccordion, RadioAccordionContent} from '../components/index';
// import {Form, FormGroup} from '../components/index';
// import {Item, Secondary, SideBar} from '../components/index';
// import {Step, Steps} from '../components/index';
// import {StatsBox, StatsNumber, StatsResult, StatsTitle} from '../components/index';

export const App = (props: any) => {
    return(
        <Grid>
            <Row id="sidebar">
                <Col lg={12}>
                    <H1>SideBar</H1>
                </Col>
                <Col lg={12}>
                    <SideBar />
                </Col>
            </Row>
            <Row id="buttons">
                <Col lg={12}>
                    <H1>Buttons</H1>
                </Col>
                <Col lg={6} md={6}>
                    <Button />
                </Col>
                <Col lg={6} md={6}>
                    <SmallIconButton />
                </Col>
            </Row>
            <Row id="formElements">
                <Col lg={12}>
                    <H1>Form Elements</H1>
                </Col>
                <Col lg={6} md={6}>
                    <Input />
                </Col>
                <Col lg={6} md={6}>
                    <TextArea />
                </Col>
                <Col lg={6} md={6}>
                    <Radio />
                </Col>
                <Col lg={6} md={6}>
                    <CheckBox />
                </Col>
                <Col lg={6} md={6}>
                    <Select />
                </Col>
                <Col lg={6} md={6}>
                    <DatePicker />
                </Col>
                <Col lg={12}>
                    <File />
                </Col>
            </Row>
            <Row id="forms">
                <Col lg={12}>
                    <H1>Forms & FormGroups</H1>
                </Col>
                <Col>
                    <Form />
                </Col>
            </Row>
            <Row id="toggables">
                <Col lg={12}>
                    <H1>Toggables</H1>
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Switch', {Switch})}
                </Col>
                <Col lg={6} md={6}>
                    <Pagination />
                </Col>
                <Col lg={12}>
                    <CheckListItem />
                </Col>
            </Row>
            <Row id="tabs">
                <Col>
                    <H1>Tabs</H1>
                </Col>
                <Col lg={12}>
                    <RadioAccordion />
                </Col>
                <Col lg={12}>
                    <TabbedContent/>
                </Col>
            </Row>
            <Row id="tables">
                <Col lg={12}>
                    <H1>Tables</H1>
                </Col>
                <Col lg={12}>
                    <Table />
                </Col>
            </Row>
            <Row id="misc">
                <Col lg={12}>
                    <H1>Miscellaneous</H1>
                </Col>
                <Col lg={6} md={8}>
                    <TopNotification />
                </Col>
                <Col lg={6} md={4}>
                    <Headings />
                </Col>
                <Col lg ={5} md={7}>
                    <Steps />
                </Col>
                <Col lg={4} md={5}>
                    <HorizontalRangeBar />
                </Col>
                <Col lg={3}>
                    <StatsBox/>
                </Col>
            </Row>
            <Row id="grid">
                <Col lg={12}>
                    <H1>Grid System</H1>
                </Col>
                <Col lg={12}>
                    <GridExample/>
                </Col>
            </Row>
            <Row id="charts">
                <Col lg={12}>
                    <H1>Charts</H1>
                </Col>
                <Pie />
                <Doughnut />
            </Row>
            <Bar />
            <Line />
        </Grid>
    );
};

export default App;
