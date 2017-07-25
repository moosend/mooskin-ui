import * as React from 'react';

import {Button, Col, Grid, Input, Row} from '../../components/index/';

export default class RowExample extends React.Component{

    public render(){
        return(
            <div>
                <Grid>
                    <Row>
                        <Col lg={12}>
                            Col lg-12
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={4} sm={6} xs={1}>
                            Col lg-3 md-4 sm-6 xs-1
                        </Col>
                        <Col lg={3} md={4} sm={3} xs={1}>
                            Col lg-3 md-4 sm-3 xs-1
                        </Col>
                        <Col lg={6} md={4} sm={3} xs={12}>
                            Col lg-6 md-4 sm-3 xs-12
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={8} xs={4}>
                            Col lg-6 md-12 sm-8 xs-4
                        </Col>
                        <Col lg={6} md={12} sm={4} xs={8}>
                            Col lg-6 md-12 sm-4 xs-8
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={10} sm={1} xs={1}>
                            Col lg-4 md-10 sm-1 xs-1
                        </Col>
                        <Col lg={4} md={1} sm={10} xs={1}>
                            Col lg-4 md-1 sm-10 xs-1
                        </Col>
                        <Col lg={4} md={1} sm={1} xs={10}>
                            Col lg-4 md-1 sm-1 xs-10
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={4} sm={6} xs={12}>
                            Col lg-8 md-4 sm-6 xs-12
                        </Col>
                        <Col lg={4} md={8} sm={6} xs={12}>
                            Col lg-4 md-8 sm-6 xs-12
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    Col
                                </Col>
                                <Col>
                                    Col
                                </Col>
                                <Col>
                                    Col
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Col
                                </Col>
                                <Col>
                                    Col
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Col
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            Col
                        </Col>
                        <Col>
                            Col
                        </Col>
                        <Col>
                            Col
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} md={6} sm={12} xs={12}>
                            <Input />
                        </Col>
                        <Col lg={2} md={6} sm={12} xs={'hidden'}>
                            <Button>Push it!</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}
