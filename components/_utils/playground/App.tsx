import * as React from 'react';

import Button from './examples/Button.example';
import Chart from './examples/Chart.example';
import Headings from './examples/Headings.example';
import HorizontalRangeBar from './examples/HorizontalRangeBar.example';
import Input from './examples/Input.example';
import Select from './examples/Select.example';
import SmallIconButton from './examples/SmallIconButton.example';
import Switch from './examples/Switch.example';
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
            <Chart />
        </div>
    );
};
