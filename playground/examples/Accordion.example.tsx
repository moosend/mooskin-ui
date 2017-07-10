import * as React from 'react';

import {Accordion, Button, Content, H2, Input} from '../../components/index/index';

export default (props: any) => {

    return(
        <fieldset style={{display: 'inline-block', width: '800px'}}>
            <legend>Accordion Element</legend>
            <Accordion>
                <Content title="Click here!">Nice Content eh?</Content>
                <Content title="I'm a radio too" style={{color: '#5CCDDF', fontStyle: 'italic'}}>
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
                <Content title="Mix of elements">
                    <H2 style={{margin: '0px 0px 10px 10px'}}>
                        H2 heading incoming!
                    </H2>
                    <Input placeholder="Yoohoo tabs!"/>
                    <Button>Ah..Tabs...</Button>
                </Content>
            </Accordion>
        </fieldset>
    );
};
