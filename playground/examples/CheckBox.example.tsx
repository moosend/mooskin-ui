import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {CheckBox, CheckboxGroup, Fieldset} from '../../components/index';

export interface ICheckBoxState{
    checked: boolean;
}

export default class CheckBoxClass extends React.Component<{}, ICheckBoxState> {

    constructor(props: any){
        super(props);

        this.state = {
            checked: false
        };
    }

    public render() {

        return (
            <Fieldset legend="CheckBox Element" style={{display: 'inline-block'}}>
                <CheckboxGroup
                    onChange={this.onChange}
                    title="Vertical checkboxes"
                    dataLabel="horizontal"
                >
                    <CheckBox value={'Checkbox1'} checked/>
                    <CheckBox value={'Checkbox2'} label="This one has a label" description="Check it"/>
                    <CheckBox value={'Checkbox3'} label="Disabled" disabled description="It's disabled" checked/>
                </CheckboxGroup>
                <CheckboxGroup
                    onChange={this.onChange}
                    title="Horizontal checkboxes"
                    dataLabel="horizontal"
                    spacing={15}
                    horizontal
                >
                    <CheckBox value={'Checkbox1'}/>
                    <CheckBox value={'Checkbox2'} label="This one has a label" checked/>
                    <CheckBox value={'Checkbox3'} label="This one is disabled" disabled description="It's disabled"/>
                </CheckboxGroup>
                <br/>
                <CheckBox value="doni" label="Lone Checkbox" onClick={this.onClick} checked={this.state.checked}/>
            </Fieldset>
        );

    }

    private onChange = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(data.value);
    }

    private onClick = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        this.setState({checked: !this.state.checked});
        console.log(data.value);
    }

}
