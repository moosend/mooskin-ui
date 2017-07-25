import * as React from 'react';

import {Col, Grid, Row} from '../../components/index/';

export default class RowExample extends React.Component{

    public render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            Col 12
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm ={6}>
                            Col 3
                        </Col>
                        <Col lg={3} md={4} sm ={3}>
                            Col 3
                        </Col>
                        <Col lg={6} md={4} sm ={3}>
                            Col 6
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            Col 6
                        </Col>
                        <Col lg={6}>
                            Col 6
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            Col 4
                        </Col>
                        <Col lg={4}>
                            Col 4
                        </Col>
                        <Col lg={4}>
                            Col 4
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            Col 8
                        </Col>
                        <Col lg={4}>
                            Col 4
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            Col 2
                        </Col>
                        <Col lg={1}>
                            Col 1
                        </Col>
                        <Col lg={1}>
                            Col 1
                        </Col>
                        <Col lg={2}>
                            Col 2
                        </Col>
                        <Col lg={2}>
                            Col 2
                        </Col>
                        <Col lg={1}>
                            Col 1
                        </Col>
                        <Col lg={1}>
                            Col 1
                        </Col>
                        <Col lg={2}>
                            Col 2
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Row>
                                <Col lg={4}>
                                    Col
                                </Col>
                                <Col lg={4}>
                                    Col
                                </Col>
                                <Col lg={4}>
                                    Col
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    Col
                                </Col>
                                <Col lg={6}>
                                    Col
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    Col
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            Col
                        </Col>
                        <Col lg={3}>
                            Col
                        </Col>
                        <Col lg={3}>
                            Col
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}
