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
    RadioGroup,
    Switch,
    TextArea
} from '../../components/index/index';

export default class Forms extends React.Component<any, any>{

    constructor(props: any){
        super(props);

        this.state = {
            contact: [{}, {checked: true}, {}, {checked: true}, {}],
            firstname: 'Doni',
            lastname: 'Behrami',
            position: [{selected: false}, {selected: true}],
            training: true
        };
    }

    public render() {

        return(
            <fieldset style={{display: 'inline-block', width: '1000px'}}>
                <legend>Forms Element</legend>
                    <H2>Vertical Forms/FormGroups</H2>
                    <Form style={{border: '2px solid black'}} >
                        <FormGroup style={{border: '2px solid blue'}}>
                            <Input label="Your firstname:" dataLabel="firstname"/>
                            <Input label="Your lastname:" dataLabel="lastname"/>
                            <Input label="Country:" dataLabel="country"/>
                        </FormGroup>
                        <FormGroup style={{border: '2px solid red'}} horizontal>
                            <FormGroup style={{width: '130%', border: '2px solid cyan'}}>
                                <RadioGroup title="Some Radios" dataLabel="radios" onChange={this.getValue}>
                                    <Radio value="Radio 1"/>
                                    <Radio value="Radio 2"/>
                                    <Radio value="Radio 3"/>
                                    <Radio value="Radio 4"/>
                                    <Radio value="Radio 5"/>
                                </RadioGroup>
                            </FormGroup>
                            <FormGroup style={{border: '2px solid green'}}>
                                <CheckboxGroup onChange={this.getValue} dataLabel="checkboxes">
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
                            <Input
                                label="Firstname:"
                                onChange={this.setValue}
                                dataLabel="firstname"
                                value={this.state.firstname}
                            />
                            <Input
                                label="Lastname:"
                                onChange={this.setValue}
                                dataLabel="lastname"
                                value={this.state.lastname}
                            />
                            <Input
                                label="Country:"
                                onChange={this.setValue}
                                dataLabel="country"
                                value={this.state.country}
                            />
                            <Input
                                label="Email:"
                                type="email"
                                onChange={this.setValue}
                                dataLabel="email"
                                value={this.state.email}
                            />
                            <RadioGroup title="Position: " dataLabel="position" onChange={this.getValue}>
                                <Radio
                                    value="fontend"
                                    label="Frontend Developer"
                                    selected={this.state.position[0].selected}
                                />
                                <Radio
                                    value="backend"
                                    label="Backend Developer"
                                    selected={this.state.position[1].selected}
                                />
                            </RadioGroup>
                        </FormGroup>
                        <FormGroup style={{border: '2px solid blue'}}>
                            <Switch
                                label="Training:"
                                onLabel="Done"
                                offLabel="Ongoing"
                                on={this.state.training}
                                onClick={this.getValue}
                                dataLabel="training"
                            />
                            <TextArea
                                rows={11}
                                label="Cover Letter:"
                                onChange={this.setValue}
                                dataLabel="coverletter"
                                value={this.state.coverletter}
                            />
                            <CheckboxGroup onChange={this.getValue} title="Contact: " dataLabel="contact" horizontal>
                                <CheckBox value="email" label="Email" checked={this.state.contact[0].checked}/>
                                <CheckBox value="tel" label="Telephone" checked={this.state.contact[1].checked}/>
                                <CheckBox value="skype" label="Skype" checked={this.state.contact[2].checked}/>
                                <CheckBox value="raven" label="Raven" checked={this.state.contact[3].checked}/>
                                <CheckBox value="palantir" label="Palantír" checked={this.state.contact[4].checked}/>
                            </CheckboxGroup>
                        </FormGroup>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
            </fieldset>
        );
    }

    private setValue = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        data.dataLabel && this.setState({[data.dataLabel]: data.value});
    }

    private getValue = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        data.dataLabel && this.setState({[data.dataLabel]: data.value});
    }

}
