import * as React from 'react';

import Accordion from './examples/Accordion.example';
import Button from './examples/Button.example';
import Charts from './examples/Charts.example';
import CheckListItem from './examples/CheckListItem.example';
import Headings from './examples/Headings.example';
import HorizontalRangeBar from './examples/HorizontalRangeBar.example';
import Input from './examples/Input.example';
import Radio from './examples/Radio.example';
import Select from './examples/Select.example';
import SmallIconButton from './examples/SmallIconButton.example';
import Switch from './examples/Switch.example';
import TabbedContent from './examples/TabbedContent.example';
import TopNotification from './examples/TopNotification.example';

export default (props: any) => {
    return(
        <div>
            <Button />
            <br/><br/>
            <Input />
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
            <CheckListItem />
            <br/><br/>
            <Charts />
            <br/><br/>
            <TabbedContent />
            <br/><br/>
            <Accordion />
        </div>
    );
};
