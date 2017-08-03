import * as React from 'react';

import SideBar, {Item} from '../../components/SideBar';

export default class SideBarExample extends React.Component{
    public render(){
        return(
            <SideBar button>
                <Item image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" label="Item 1" />
                <Item image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" label="Item 2" />
                <Item image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" label="Item 3" />
            </SideBar>
        );
    }
}
