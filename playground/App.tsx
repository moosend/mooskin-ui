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
import Select from './examples/Select.example';
import SmallIconButton from './examples/SmallIconButton.example';
import Switch from './examples/Switch.example';
import TabbedContent from './examples/TabbedContent.example';
import TextArea from './examples/TextArea.example';
import TopNotification from './examples/TopNotification.example';

export default (props: any) => {
    return(
        <div>
            <Button />
            <br/><br/>
            <Input />
            <br/><br/>
            <TextArea />
            <br/><br/>
            <Select />
            <br/><br/>
            <Switch />
            <br/><br/>
            <HorizontalRangeBar />
            <br/><br/>
            <Headings />
            <br/><br/>
            <TopNotification />
            <br/><br/>
            <SmallIconButton />
            <br/><br/>
            <Radio />
            <br/><br/>
            <CheckBox />
            <br/><br/>
            <CheckListItem />
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
