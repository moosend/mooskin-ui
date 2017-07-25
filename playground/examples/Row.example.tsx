import * as React from 'react';

import {Button, Col, Grid, H2, Input, RadioTabContent, RadioTabs, Row} from '../../components/index/';

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
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <RadioTabs horizontal>
                                <RadioTabContent title="Click here!" style={{color: '#5CCDDF', fontStyle: 'italic'}}>
                                    <div style={{height: '100px'}}>
                                        Nice Content eh?
                                    </div>
                                </RadioTabContent>
                                <RadioTabContent title="I'm a radio too" style={{fontWeight: 700}}>
                                    <div style={{height: '100px'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                        It has survived not only five centuries,
                                        but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </div>
                                </RadioTabContent>
                                <RadioTabContent title="Let's try a heading">
                                    <div style={{height: '100px'}}>
                                        <H2 style={{margin: '0px 0px 10px 0px'}}>
                                            H2 heading incoming!
                                        </H2>
                                        ...and some text of course!
                                    </div>
                                </RadioTabContent>
                            </RadioTabs>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={'hidden'}>
                            <RadioTabs>
                                <RadioTabContent title="Click here!" style={{color: '#5CCDDF', fontStyle: 'italic'}}>
                                    <div style={{height: '100px'}}>
                                        Nice Content eh?
                                    </div>
                                </RadioTabContent>
                                <RadioTabContent title="I'm a radio too" style={{fontWeight: 700}}>
                                    <div style={{height: '100px'}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                        It has survived not only five centuries,
                                        but also the leap into electronic typesetting,
                                        remaining essentially unchanged.
                                    </div>
                                </RadioTabContent>
                                <RadioTabContent title="Let's try a heading">
                                    <div style={{height: '100px'}}>
                                        <H2 style={{margin: '0px 0px 10px 0px'}}>
                                            H2 heading incoming!
                                        </H2>
                                        ...and some text of course!
                                    </div>
                                </RadioTabContent>
                            </RadioTabs>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}
