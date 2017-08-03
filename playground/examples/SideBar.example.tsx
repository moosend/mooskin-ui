import * as React from 'react';

import SideBar, {Item} from '../../components/SideBar';

export interface ISideBarState{
    sidebar1: boolean;
    sidebar2: boolean;
    sidebar3: boolean;
}

export default class SideBarExample extends React.Component<{}, ISideBarState>{

    constructor(props: any){
        super(props);

        this.state = {
            sidebar1: false,
            sidebar2: false,
            sidebar3: false
        };
    }

    public render(){
        return(
            <SideBar display={this.state.sidebar1} onClick={this.onButtonClick} button >
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    label="Automations"
                    href="automations"
                />
                <Item
                    image="http://hguochen.com/static/img/tech/css3.png"
                    label="Mailing List"
                    href="mailing/list"
                />
                <Item
                    image="https://www.easyprogramming.net/logo/js.png"
                    label="SideBar 2"
                    onMouseEnter={this.sidebarTwo}
                    onMouseLeave={this.sidebarTwo}
                >
                    <SideBar
                        display={this.state.sidebar2}
                        style={{marginLeft: 100, background: '#efefef', color: '#000'}}
                    >
                        <Item
                            label="SideBar 3"
                            onMouseEnter={this.sidebarThree}
                            onMouseLeave={this.sidebarThree}
                        >
                            <SideBar
                                display={this.state.sidebar3}
                                style={{marginLeft: 200}}
                            >
                                <Item
                                    image="https://www.easyprogramming.net/logo/js.png"
                                    href="https://www.google.com"
                                    label="Automations"
                                />
                                <Item
                                    image="http://hguochen.com/static/img/tech/css3.png"
                                    label="Mailing List"
                                    href="mailing/list"
                                />
                                <Item
                                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                                    label="Campaigns"
                                />
                            </SideBar>
                        </Item>
                        <Item
                            label="Mailing List"
                        />
                        <Item
                            label="Campaigns"
                        />
                    </SideBar>
                </Item>
            </SideBar>
        );
    }

    private onButtonClick = () => {
        this.setState({sidebar1: true});
    }

    private sidebarTwo = () => {
        // console.log(name);
        this.setState({sidebar2: !this.state.sidebar2});
    }

    private sidebarThree = () => {
        // console.log(name);
        this.setState({sidebar3: !this.state.sidebar3});
    }

}


