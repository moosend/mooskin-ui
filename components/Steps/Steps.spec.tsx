import * as React from 'react';
import Steps, {Step} from './Steps';

import { mount, render, shallow} from 'enzyme';

describe('Steps', () => {

    test('renders correctly', () => {
        const tree = shallow(
            <Steps>
                <Step id="1" title="Step 1" active>
                    Content 1
                </Step>
                <Step id="2" title="Step 2">
                    Content 2
                </Step>
                <Step id="3" title="Step 3">
                    Content 3
                </Step>
            </Steps>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with only the active one being visible', () => {
        const tree = render(
            <Steps>
                <Step id="1" title="Step 1" active>
                    Content 1
                </Step>
                <Step id="2" title="Step 2">
                    Content 2
                </Step>
                <Step id="3" title="Step 3">
                    Content 3
                </Step>
            </Steps>
        );

        expect(tree.find('.activeStep').length).toBe(1);
    });

    test('renders the body correctly with each content', () => {
        const tree = render(
            <Steps>
                <Step id="1" title="Step 1" active>
                    Content 1
                </Step>
                <Step id="2" title="Step 2">
                    Content 2
                </Step>
                <Step id="3" title="Step 3">
                    Content 3
                </Step>
            </Steps>
        );

        expect(tree.find('.stepBody').length).toBe(1);
    });

    test('onClick is called correctly when one of the Steps is clicked', () => {

        const fn = jest.fn();

        const tree = shallow(
            <Steps>
                <Step id="1" title="Step 1" active>
                    Content 1
                </Step>
                <Step id="2" title="Step 2" onClick={fn}>
                    Content 2
                </Step>
                <Step id="3" title="Step 3">
                    Content 3
                </Step>
            </Steps>
        );

        tree.find(Step)
            .findWhere((bc) => bc.prop('id') === '2')
            .dive()
            .simulate('click');

        expect(fn).toHaveBeenCalledWith('2');
    });
});
