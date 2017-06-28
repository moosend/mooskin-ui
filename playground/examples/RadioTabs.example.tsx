import * as React from 'react';

import {Content, RadioTabs} from '../../components/index/index';
import {H2} from '../../components/index/index';

export default (props: any) => {

    return (
        <fieldset style={{display: 'inline-block', width: 800}}>
            <legend>RadioTabs Element</legend>
            <H2>Vertical view</H2>
            <RadioTabs>
                <Content title="Click here!">Nice Content eh?</Content>
                <Content title="I'm a radio too">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                </Content>
                <Content title="Let's try a heading">
                    <H2 style={{margin: '0px 0px 10px 0px'}}>
                        H2 heading incoming!
                    </H2>
                    ...and some text of course!
                </Content>
            </RadioTabs>
            <H2>Horizontal view</H2>
            <RadioTabs horizontal>
                <Content title="Click here!">
                    <div style={{height: '100px'}}>
                        Nice Content eh?
                    </div>
                </Content>
                <Content title="I'm a radio too">
                    <div style={{height: '100px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                </Content>
                <Content title="Let's try a heading">
                    <div style={{height: '100px'}}>
                        <H2 style={{margin: '0px 0px 10px 0px'}}>
                            H2 heading incoming!
                        </H2>
                        ...and some text of course!
                    </div>
                </Content>
            </RadioTabs>
        </fieldset>
    );
};
