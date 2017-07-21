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
    Option,
    Radio,
    RadioGroup,
    Select,
    Switch,
    TextArea
} from '../../components/index/index';

export default class Forms extends React.Component<any, any>{

    constructor(props: any){
        super(props);

        this.state = {
            contact: [{}, {checked: true}, {}, {checked: true}, {}],
            country: '',
            email: '',
            firstname: 'Doni',
            lastname: 'Behrami',
            position: [{selected: false}, {selected: true}],
            salary: '',
            training: true
        };
    }

    public render() {

        return(
            <fieldset style={{display: 'inline-block', width: '1000px'}}>
                <legend>Forms Element</legend>
                    <H2>Forms/FormGroups</H2>
                    <Form style={{border: '2px solid black'}} onSubmit={this.onSubmit}>
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
                                <CheckboxGroup onChange={this.getValue} title="Contact" dataLabel="contact" horizontal>
                                    <CheckBox value="email" label="Email" checked={this.state.contact[0].checked}/>
                                    <CheckBox value="tel" label="Telephone" checked={this.state.contact[1].checked}/>
                                    <CheckBox value="skype" label="Skype" checked={this.state.contact[2].checked}/>
                                    <CheckBox value="raven" label="Raven" checked={this.state.contact[3].checked}/>
                                    <CheckBox value="palantr" label="Palantír" checked={this.state.contact[4].checked}/>
                                </CheckboxGroup>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup style={{border: '2px solid red'}}>
                            <Input
                                label="Desired Salary:"
                                onChange={this.setValue}
                                dataLabel="salary"
                                value={this.state.salary}
                                type="number"
                            />
                            <Select
                                dataLabel="start"
                                selected={this.state.start}
                                onChange={this.getValue}
                                label="Available to start:"
                            >
                                <Option value="asap">Asap</Option>
                                <Option value="1-4w">1-4 weeks</Option>
                                <Option value="1-3m">1-3 months</Option>
                                <Option value="3-6m">3-6 months</Option>
                            </Select>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                        <Button type="reset" onClick={this.reset}>Reset</Button>
                    </Form>
                    <H2>Forms/FormGroups</H2>
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
            </fieldset>
        );
    }

    private reset = () => {
        this.setState({
            contact: [{checked: false}, {checked: false}, {checked: false}, {checked: false}, {checked: false}],
            country: '',
            coverletter: '',
            email: '',
            firstname: '',
            lastname: '',
            position: [{selected: true}, {selected: false}],
            salary: '',
            start: '',
            training: false,
        });
    }

    private onSubmit = (e: React.FormEvent<HTMLElement>, data: IInputCallbackData) => {
        console.log(data.value);
    }

    private setValue = (e: React.ChangeEvent<HTMLElement>, data: IInputCallbackData) => {
        data.dataLabel && this.setState({[data.dataLabel]: data.value});
    }

    private getValue = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        data.dataLabel && this.setState({[data.dataLabel]: data.value});
    }

}
