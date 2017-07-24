import * as React from 'react';

import {Col, Input, Row} from '../../components/index/';

export default class RowExample extends React.Component{

    public render(){
        return(
            <div>
                <Row>
                    <Col>
                        <Input />
                    </Col>
                    <Col>
                        <Input />
                    </Col>
                    <Col>
                        <Input />
                    </Col>
                    <Col>
                        <Input />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                hello
                            </Col>
                            <Col>
                                hello
                            </Col>
                            <Col>
                                hello
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                hello
                            </Col>
                            <Col>
                                hello
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                hello
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        hello
                    </Col>
                    <Col>
                        hello
                    </Col>
                    <Col>
                        hello
                    </Col>
                </Row>
            </div>
        );
    }

}
