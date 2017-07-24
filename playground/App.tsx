// tslint:disable-next-line:no-reference
/// <reference path="../components/custom.d.ts"/>

import * as React from 'react';

import Button from './examples/Button.example';
import Charts from './examples/Charts.example';
import CheckBox from './examples/CheckBox.example';
import CheckListItem from './examples/CheckListItem.example';
import Form from './examples/Form.example';
import Headings from './examples/Headings.example';
import HorizontalRangeBar from './examples/HorizontalRangeBar.example';
import Input from './examples/Input.example';
import Radio from './examples/Radio.example';
import RadioAccordion from './examples/RadioAccordion.example';
import RadioTabs from './examples/RadioTabs.example';
import Row from './examples/Row.example';
import Select from './examples/Select.example';
import SmallIconButton from './examples/SmallIconButton.example';
import Switch from './examples/Switch.example';
import TabbedContent from './examples/TabbedContent.example';
import TextArea from './examples/TextArea.example';
import TopNotification from './examples/TopNotification.example';

export default (props: any) => {
    return(
        <div>
            <Row />
            <div style={{display: 'flex', alignContent: 'stretch'}}>
                <Button />
                <Switch />
            </div>
            <br/><br/>
            <div style={{display: 'flex'}}>
                <Input />
                <TextArea />
            </div>
            <br/><br/>
            <div style={{display: 'flex'}}>
                <Select />
                <TopNotification />
            </div>
            <br/><br/>
            <div style={{display: 'flex'}}>
                <Radio />
                <CheckBox />
            </div>
            <br/><br/>
            <div style={{display: 'flex'}}>
                <HorizontalRangeBar />
                <Headings />
                <CheckListItem />
            </div>
            <SmallIconButton />
            <br/><br/>
            <Charts />
            <br/><br/>
            <TabbedContent />
            <br/><br/>
            <RadioTabs />
            <br/><br/>
            <RadioAccordion />
            <br/><br/>
            <Form />
        </div>
    );
};
