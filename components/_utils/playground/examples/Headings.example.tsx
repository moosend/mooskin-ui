import * as React from 'react';

import {H1, H2, H3, H4, H5, H6} from '../../../index/index';

export default (props: any) => {

    return (
        <fieldset style={{display: 'inline-block'}}>
            <legend>Headings</legend>
            <H1 id="5">Your Campaigns</H1>
            <H2>Moooo!</H2>
            <H3 style={{color: 'blue'}}>Moooo!</H3>
            <H4>Moooo!</H4>
            <H5>Moooo!</H5>
            <H6>Moooo!</H6>
        </fieldset>
    );
};
