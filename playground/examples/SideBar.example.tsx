import * as React from 'react';

import SideBar, {Item} from '../../components/SideBar';

export default class SideBarExample extends React.Component{
    public render(){
        return(
            <SideBar>
                <Item icon="face" label="Item 1" />
                <Item icon="face" label="Item 2" />
                <Item icon="face" label="Item 3" />
            </SideBar>
        );
    }
}
