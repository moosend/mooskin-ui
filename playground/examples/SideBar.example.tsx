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
                    href="https://www.google.com"
                    label="Automations"
                    onClick={this.onItemClick}
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
                    label="SideBar 2"
                    onMouseEnter={this.sidebarTwoOn}
                    onMouseLeave={this.sidebarTwoOff}
                >
                    <SideBar width={this.state.sidebar2} style={{marginLeft: this.state.sidebar1}} >
                        <Item
                            image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                            href="https://www.google.com"
                            label="SideBar 3"
                            onMouseEnter={this.sidebarThreeOn}
                            onMouseLeave={this.sidebarThreeOff}
                        >
                            <SideBar
                                width={this.state.sidebar3}
                                style={{marginLeft: this.state.sidebar2 + this.state.sidebar1}}
                            >
                                <Item
                                    image="http://daynin.github.io/clojurescript-presentation/img/react-logo.png"
                                    href="https://www.google.com"
                                    label="SideBar 3"
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

    private onItemClick = () => {
        console.log('First Item Clicked');
    }

    private sidebarTwoOn = (e: React.MouseEvent<HTMLDivElement>) => {
        // console.log(name);
        this.setState({sidebar2: 200});
    }

    private sidebarTwoOff = (e: React.MouseEvent<HTMLDivElement>) => {
        this.setState({sidebar2: 0});
    }

    private sidebarThreeOn = (e: React.MouseEvent<HTMLDivElement>) => {
        // console.log(name);
        this.setState({sidebar3: 90});
    }

    private sidebarThreeOff = (e: React.MouseEvent<HTMLDivElement>) => {
        this.setState({sidebar3: 0});
    }
}
