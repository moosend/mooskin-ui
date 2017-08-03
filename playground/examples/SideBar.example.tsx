import * as React from 'react';

import SideBar, {Item} from '../../components/SideBar';

export interface ISideBarState{
    sidebar1: number;
    sidebar2: number;
    sidebar3: number;
}

export default class SideBarExample extends React.Component<{}, ISideBarState>{

    constructor(props: any){
        super(props);

        this.state = {
            sidebar1: 90,
            sidebar2: 0.1,
            sidebar3: 0.1
        };
    }

    public render(){
        return(
            <SideBar width={this.state.sidebar1} button >
                <Item
                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                    label="Automations"
                    onClick={this.onItemClick}
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
                    onMouseEnter={this.sidebarTwoOn}
                    onMouseLeave={this.sidebarTwoOff}
                >
                    <SideBar
                        width={this.state.sidebar2}
                        style={{marginLeft: this.state.sidebar1, background: '#efefef', color: '#000'}}
                    >
                        <Item
                            label="SideBar 3"
                            onMouseEnter={this.sidebarThreeOn}
                            onMouseLeave={this.sidebarThreeOff}
                        >
                            <SideBar
                                width={this.state.sidebar3}
                                style={{marginLeft: this.state.sidebar2 + this.state.sidebar1}}
                            >
                                <Item
                                    image="https://www.easyprogramming.net/logo/js.png"
                                    href="https://www.google.com"
                                    label="Automations"
                                />
                                <Item
                                    image="http://hguochen.com/static/img/tech/css3.png"
                                    label="Mailing List"
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

    private onItemClick = () => {
        console.log('First Item Clicked');
    }

    private sidebarTwoOn = () => {
        // console.log(name);
        this.setState({sidebar2: 200});
    }

    private sidebarTwoOff = () => {
        this.setState({sidebar2: 0});
    }

    private sidebarThreeOn = () => {
        // console.log(name);
        this.setState({sidebar3: 90});
    }

    private sidebarThreeOff = () => {
        this.setState({sidebar3: 0});
    }
}
