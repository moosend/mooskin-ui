import * as React from 'react';

import {TabbedContent} from '../../../index/index';

export default (props: any) => {

    const style = {
        display: 'inline-block',
        fontSize: 24,
        height: 500,
        paddingTop: 200,
        textAlign: 'center',
        width: '100%',
    };

    return (
        <fieldset style={{display: 'inline-block', width: 1000}}>
            <legend>TabbedContent Element</legend>
            <TabbedContent>
                <TabbedContent.Tab title="Title 1" active>
                    <div style={{...style, backgroundColor: '#5CCDDF'}}>
                        Content 1
                    </div>
                </TabbedContent.Tab>
                <TabbedContent.Tab title="Title 2">
                    <div style={{...style, backgroundColor: '#F48770'}}>
                        Content 2
                    </div>
                </TabbedContent.Tab>
                <TabbedContent.Tab title="Title 3">
                    <div style={{...style, backgroundColor: '#F2C14A'}}>
                        Content 3
                    </div>
                </TabbedContent.Tab>
            </TabbedContent>
        </fieldset>
    );
};
