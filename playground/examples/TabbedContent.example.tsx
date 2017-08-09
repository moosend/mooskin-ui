import * as React from 'react';

// import Readme from '../../components/TabbedContent/README.md';

import {Col, Content, Grid, H2, Header, Row, Tab, TabbedContent} from '../../components/index/';
// import TabbedContentExampleCode from './component-strings/TabbedContent.example.txt';

// import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

// export default class TabbedContentExample extends React.Component<any, any> {
//     public render(){

//         return(
//             <ReactLiveEditor
//                 scope={{React, TabbedContent, Tab, Col, Grid, Row, Button, H2, Input, Table}}
//                 code={TabbedContentExampleCode}
//                 title="TabbedContent Example"
//                 doc={Readme}
//             />
//         );
//     }
// }

export default class TabbedContentExample extends React.Component {

    constructor(){
        super();

        this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    public render(){

        const style = {
            display: 'inline-block',
            fontSize: 24,
            height: 500,
            paddingTop: 200,
            textAlign: 'center',
            width: '100%',
        };

        return (
            <Grid>
                <Row>
                    <Col lg={12}>
                        <H2>Normal Tabs</H2>
                        <TabbedContent>
                            <Tab>
                                <Header>Title 1</Header>
                                <Content>
                                    <div style={{...style, backgroundColor: '#5CCDDF'}}>
                                        Content 1
                                    </div>
                                </Content>
                            </Tab>
                            <Tab>
                                <Header>Title 2</Header>
                                <Content>
                                    <div style={{...style, backgroundColor: '#F48770'}}>
                                        Content 2
                                    </div>
                                </Content>
                            </Tab>
                            <Tab>
                                <Header>Title 3</Header>
                                <Content>
                                    <div style={{...style, backgroundColor: '#F2C14A'}}>
                                        Content 3
                                    </div>
                                </Content>
                            </Tab>
                        </TabbedContent>
                    </Col>
                </Row>
            </Grid>
        );
    }

    private onHeaderClick = () => {
        console.log('Header Clicked!');
    }
}
