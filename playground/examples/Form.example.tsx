import * as React from 'react';

import {IInputCallbackData} from '../../components/_utils/types/commonTypes';

import {
    Button,
    CheckBox,
    CheckboxGroup,
    Form,
    FormGroup,
    H2,
    Input,
    Radio,
    RadioGroup
} from '../../components/index/index';

export default class Forms extends React.Component<any, any>{

    constructor(props: any){
        super(props);

        this.state = { };
    }

    public render() {

        console.log(this.state);

        return(
            <fieldset style={{display: 'inline-block', width: '1000px'}}>
                <legend>Forms Element</legend>
                    <H2>Vertical Forms/FormGroups</H2>
                    <Form style={{border: '2px solid black'}} >
                        <FormGroup style={{border: '2px solid blue'}}>
                            <Input label="Your firstname:"/>
                            <Input label="Your lastname:"/>
                            <Input label="Country:"/>
                        </FormGroup>
                        <FormGroup style={{border: '2px solid red'}} horizontal>
                            <FormGroup style={{width: '130%', border: '2px solid cyan'}}>
                                <RadioGroup title="Some Radios">
                                    <Radio value="Radio 1"/>
                                    <Radio value="Radio 2"/>
                                    <Radio value="Radio 3"/>
                                    <Radio value="Radio 4"/>
                                    <Radio value="Radio 5"/>
                                </RadioGroup>
                            </FormGroup>
                            <FormGroup style={{border: '2px solid green'}}>
                                <CheckboxGroup>
                                    <CheckBox value="Checkbox 1" />
                                    <CheckBox value="Checkbox 2" />
                                    <CheckBox value="Checkbox 3" />
                                </CheckboxGroup>
                            </FormGroup>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    <H2>Horizontal Forms/FormGroups</H2>
                    <Form style={{border: '2px solid black'}}>
                        <FormGroup horizontal>
                            <FormGroup style={{border: '2px solid blue'}}>
                            <Input label="Firstname:" onChange={this.setValue} dataLabel="firstname"/>
                            <Input label="Lastname:" onChange={this.setValue} dataLabel="lastname"/>
                            <Input label="Country:" onChange={this.setValue} dataLabel="country"/>
                            <Input label="City:" onChange={this.setValue} dataLabel="city"/>
                            <Input label="Tel:" onChange={this.setValue} dataLabel="tel"/>
                            <Input label="Email:" onChange={this.setValue} dataLabel="email"/>
                        </FormGroup>
                        <FormGroup style={{border: '2px solid blue'}}>
                            <Input label="Firstname:"/>
                            <Input label="Lastname:"/>
                            <Input label="Country:"/>
                            <Input label="Firstname:"/>
                            <Input label="Lastname:"/>
                            <Input label="Country:"/>
                        </FormGroup>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
            </fieldset>
        );
    }

    private setValue = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        this.setState({[data.dataLabel]: data.value});
    }

}
