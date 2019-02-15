// tslint:disable-next-line:no-reference
/// <reference path="../components/custom.d.ts"/>

import * as React from 'react';

import { convertToRaw, EditorState } from 'draft-js';
import dayjs from 'dayjs';

import { renderEditableExample } from './tools/ReactLiveEditor/ReactLiveEditor';

import {
    ABSlider,
    Bar,
    Button,
    Carousel,
    Checkbox,
    CheckboxGroup,
    CheckListItem,
    Col,
    Content,
    DatePicker,
    DateSelect,
    Doughnut,
    ExpandedSection,
    // Fieldset,
    FileUpload,
    Form,
    FormGroup,
    Grid,
    H1, H2, H3, H4, H5, H6,
    Header,
    HorizontalRangeBar,
    Input,
    ItemContent,
    Label,
    Line,
    List,
    ListItem,
    Loader,
    LoadingBar,
    Modal,
    Option,
    Pagination,
    Pie,
    Radio,
    RadioAccordion,
    RadioAccordionContent,
    RadioGroup,
    Row,
    Select,
    SideBar,
    SidebarItem,
    Slider,
    SmallIconButton,
    StatsBox,
    StatsNumber,
    StatsResult,
    StatsTitle,
    Step,
    Steps,
    Switch,
    Tab,
    TabbedContent,
    Table,
    TableHeader,
    Tags,
    TextArea,
    TextEditor,
    Topbar,
    TopNotification
} from '../components/index';

// import {Option, Select} from '../components/index';
// import {H1, H2, H3, H4, H5, H6} from '../components/index';
// import {Radio, RadioGroup} from '../components/index';
// import {Checkbox, CheckboxGroup} from '../components/index';
// import {Bar, Doughnut, Line, Pie} from '../components/index';
// import {Col, Grid, Row} from '../components/index';
// import {Content, Header, Tab, TabbedContent} from '../components/index';
// import {RadioAccordion, RadioAccordionContent} from '../components/index';
// import {Form, FormGroup} from '../components/index';
// import {SideBar, SidebarItem} from '../components/index';
// import {List, ListItem} from '../components/index';
// import {Step, Steps} from '../components/index';
// import {StatsBox, StatsNumber, StatsResult, StatsTitle} from '../components/index';
// import {Table, TableHeader} from '../components/index';

export const App = (props: any) => {

    const formComponents = {
        Button,
        Checkbox,
        CheckboxGroup,
        DatePicker,
        EditorState,
        FileUpload,
        Form,
        FormGroup,
        H2,
        Input,
        Option,
        Radio,
        RadioGroup,
        Select,
        Switch,
        Tags,
        TextArea,
        dayjs
    };

    const tabbedContentComponents = {
        Button, Col, Content, Grid, H2, Header, Input, Row, Tab, TabbedContent, Table, TableHeader
    };
    const radioAccordionComponents = {
        Button, H2, Input, RadioAccordion, RadioAccordionContent
    };

    const modalComponents = {
        Button, Content, Header, Modal, SmallIconButton, Tab, TabbedContent
    };

    return (
        <Grid style={{paddingTop: 80}}>
            <Row id="sidebar">
                <Col lg={12}>
                    <H1>SideBar & Topbar</H1>
                    {renderEditableExample('Topbar', { H1, Topbar })}
                </Col>
                <Col lg={12}>
                    {renderEditableExample('SideBar', { Button, SideBar, SidebarItem })}
                </Col>
            </Row>
            <Row id="loaders">
                <Col lg={12}>
                    <H1>Loaders</H1>
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('LoadingBar', { LoadingBar, Button })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Loader', { Grid, Row, Col, Button, Pie, Loader, H3 })}
                </Col>
            </Row>
            <Row id="buttons">
                <Col lg={12}>
                    <H1>Buttons</H1>
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Button', { Button })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('SmallIconButton', { SmallIconButton })}
                </Col>
            </Row>
            <Row id="formElements">
                <Col lg={12}>
                    <H1>Form Elements</H1>
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Input', { Input })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('TextArea', { TextArea })}
                </Col>
                <Col lg={12}>
                {renderEditableExample('TextEditor', { TextEditor, EditorState, convertToRaw })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Radio', { Radio, RadioGroup })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Checkbox', { Checkbox, CheckboxGroup })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Select', { Select, Option })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('DatePicker', { DatePicker, DateSelect, dayjs, Button })}
                </Col>
                <Col lg={12}>
                    {renderEditableExample('File', { FileUpload })}
                </Col>
            </Row>
            <Row id="forms">
                <Col lg={12}>
                    <H1>Forms & FormGroups</H1>
                </Col>
                <Col>
                    {renderEditableExample('Form', formComponents)}
                </Col>
            </Row>
            <Row id="list">
                <Col lg={12}>
                    <H1>List & ListItem</H1>
                </Col>
                <Col>
                    {renderEditableExample('List', { List, ListItem, Select, Option, ExpandedSection, ItemContent })}
                </Col>
            </Row>
            <Row id="toggables">
                <Col lg={12}>
                    <H1>Toggables</H1>
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Switch', { Switch })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Pagination', { Pagination })}
                </Col>
                <Col lg={9} md={9}>
                    {renderEditableExample('CheckListItem', { CheckListItem })}
                </Col>
                <Col lg={3} md={3}>
                    {renderEditableExample('Modal', modalComponents)}
                </Col>
            </Row>
            <Row id="tabs">
                <Col>
                    <H1>Tabs</H1>
                </Col>
                <Col lg={12}>
                    {renderEditableExample('RadioAccordion', radioAccordionComponents)}
                </Col>
                <Col lg={12}>
                    {renderEditableExample('TabbedContent', tabbedContentComponents)}
                </Col>
            </Row>
            <Row id="tables">
                <Col lg={12}>
                    <H1>Tables</H1>
                </Col>
                <Col lg={12}>
                    {renderEditableExample('Table', { SmallIconButton, Table, TableHeader, Input })}
                </Col>
            </Row>
            <Row id="misc">
                <Col lg={12}>
                    <H1>Miscellaneous</H1>
                </Col>
                <Col lg={12}>
                    {renderEditableExample('Tags', { Tags, Promise })}
                </Col>
                <Col lg={6} md={8}>
                    {renderEditableExample('TopNotification', { TopNotification, Button })}
                </Col>
                <Col lg={3} md={4}>
                    {renderEditableExample('Headings', { H1, H2, H3, H4, H5, H6 })}
                </Col>
                <Col lg={3}>
                    {renderEditableExample('Label', { Label, H3 })}
                </Col>
                <Col lg={5} md={7}>
                    {renderEditableExample('Steps', { Steps, Step, Button })}
                </Col>
                <Col lg={4} md={5}>
                    {renderEditableExample('HorizontalRangeBar', { HorizontalRangeBar, Button })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('StatsBox', { StatsBox, StatsNumber, StatsResult, StatsTitle })}
                </Col>
                <Col lg={6} md={6}>
                    {renderEditableExample('Slider', { H3, Slider, ABSlider })}
                </Col>
                <Col lg={12} md={12}>
                    {renderEditableExample('Carousel', { Carousel })}
                </Col>
            </Row>
            <Row id="grid">
                <Col lg={12}>
                    <H1>Grid System</H1>
                </Col>
                <Col lg={12}>
                    {renderEditableExample('Grid', { Col, Grid, Row })}
                </Col>
            </Row>
            <Row id="charts">
                <Col lg={12}>
                    <H1>Charts</H1>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    {renderEditableExample('Charts/Pie', { Pie, Col, Grid, Row })}
                </Col>
                <Col lg={6} md={6} sm={6}>
                    {renderEditableExample('Charts/Doughnut', { Doughnut, Col, Grid, Row })}
                </Col>
            </Row>
            {renderEditableExample('Charts/Bar', { Bar, Col, Grid, Row })}
            {renderEditableExample('Charts/Line', { Line, Col, Grid, Row })}
        </Grid>
    );
};

export default App;
