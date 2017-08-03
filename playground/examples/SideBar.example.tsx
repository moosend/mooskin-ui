import * as React from 'react';

import SideBar, {Item} from '../../components/SideBar';

export default class SideBarExample extends React.Component{
    public render(){
        return(
            <SideBar button>
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    href="https://www.google.com"
                    label="Automations"
                />
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    label="Mailing List"
                />
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    label="Campaigns"
                />
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    label="Campaigns"
                >
                    <SideBar width={180} style={{marginLeft: 90}}>
                        <Item
                            image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                            href="https://www.google.com"
                            label="Automations"
                        />
                        <Item
                            image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                            label="Mailing List"
                        />
                        <Item
                            image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                            label="Campaigns"
                        />
                    </SideBar>
                </Item>
            </SideBar>
        );
    }
}
