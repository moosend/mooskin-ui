import * as React from 'react';

import {File} from '../../components/index';

export default class FileExample extends React.Component{
    public render(){
        return(
            <fieldset>
                <legend>File Upload</legend>
                <File accept=".png"/>
                <File label="File Upload: " placeholder="Please select a File" buttonLabel="Select File!" />
                <File disabled />
            </fieldset>
        );
    }
}
