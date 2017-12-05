import * as React from 'react';

import Button from '../Button';
import LoadingBar from './LoadingBar';

import {mount, render, shallow} from 'enzyme';

describe('LoadingBar', () => {

    test(`LoadingBar renders correctly`, () => {
        const func1 = jest.fn();
        const func2 = jest.fn();

        const tree = shallow(
            <LoadingBar
                progress={10}
                className={'myClass'}
                style={{color: 'red'}}
                id={'5'}
                direction="left"
                error={false}
                onError={func1}
                onProgressDone={func2}
            />
        );

        expect(tree).toMatchSnapshot();

    });

    test(`LoadingBar state changes reflecting received props`, () => {
        const func = jest.fn();

        let progress = 80;

        const addProgress = () => {
            progress = progress + 10;
        };

        const component = shallow(
            <LoadingBar
                progress={progress}
                className={'myClass'}
                style={{color: 'red'}}
                id={'5'}
                direction="left"
                error={false}
                onProgressDone={func}
            />
        );

        const button = shallow(
            <Button onClick={addProgress}>Add</Button>
        );

        button.simulate('click');

        component.setProps({progress});

        expect(component.state('width')).toEqual(90);

        button.simulate('click');

        component.setProps({progress});

        expect(component.state('width')).toEqual(100);

    });

    test(`onError callback is called when an error prop of true is passed`, () => {
        const func = jest.fn();

        let error = false;

        const simulateError = () => {
            error = true;
        };

        const component = shallow(
            <LoadingBar
                progress={10}
                className={'myClass'}
                style={{color: 'red'}}
                id={'5'}
                direction="left"
                error={error}
                onError={func}
            />
        );

        const button = shallow(
            <Button onClick={simulateError}>simulateError</Button>
        );

        expect(component.state('error')).toEqual(false);

        button.simulate('click');

        component.setProps({error});

        expect(component.state('error')).toEqual(true);
        expect(func).toHaveBeenCalled();

    });

});
