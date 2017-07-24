import * as React from 'react';

import {Col, Row} from '../../components/index/';

export default class RowExample extends React.Component{

    public render(){
        return(
            <div>
                <Row>
                    <Col col={12}>
                        Col 12
                    </Col>
                </Row>
                <Row>
                    <Col col={3}>
                        Col 3
                    </Col>
                    <Col col={3}>
                        Col 3
                    </Col>
                    <Col col={6}>
                        Col 6
                    </Col>
                </Row>
                <Row>
                    <Col col={6}>
                        Col 6
                    </Col>
                    <Col col={6}>
                        Col 6
                    </Col>
                </Row>
                <Row>
                    <Col col={4}>
                        Col 4
                    </Col>
                    <Col col={4}>
                        Col 4
                    </Col>
                    <Col col={4}>
                        Col 4
                    </Col>
                </Row>
                <Row>
                    <Col col={8}>
                        Col 8
                    </Col>
                    <Col col={4}>
                        Col 4
                    </Col>
                </Row>
                <Row>
                    <Col col={2}>
                        Col 2
                    </Col>
                    <Col col={1}>
                        Col 1
                    </Col>
                    <Col col={1}>
                        Col 1
                    </Col>
                    <Col col={2}>
                        Col 2
                    </Col>
                    <Col col={2}>
                        Col 2
                    </Col>
                    <Col col={1}>
                        Col 1
                    </Col>
                    <Col col={1}>
                        Col 1
                    </Col>
                    <Col col={2}>
                        Col 2
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                col
                            </Col>
                            <Col>
                                col
                            </Col>
                            <Col>
                                col
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                col
                            </Col>
                            <Col>
                                col
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                col
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        col
                    </Col>
                    <Col>
                        col
                    </Col>
                    <Col>
                        col
                    </Col>
                </Row>
            </div>
        );
    }

}
