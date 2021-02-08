import * as React from 'react';
import {HStack, VStack} from './Stack';

import {mount, shallow} from 'enzyme';

const boxStyle = {
    height: 40,
    width: 40
};

describe('Stack', () => {

    test('renders Stack correctly', () => {

        const tree = shallow(
            <VStack spacing={20} divider={<span style={{width: 1}} />}>
                <div key={0} style={{...boxStyle, backgroundColor: 'red'}} />,
                <div key={1} style={{...boxStyle, backgroundColor: 'green'}} />,
                <div key={2} style={{...boxStyle, backgroundColor: 'blue'}} />
            </VStack>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Stack with spacings correctly', () => {

        const tree = mount(
            <VStack spacing={20}>
                <span key={0} style={{...boxStyle, backgroundColor: 'red'}} />,
                <span key={1} style={{...boxStyle, backgroundColor: 'green'}} />,
                <span key={2} style={{...boxStyle, backgroundColor: 'blue'}} />
            </VStack>
        );

        expect(tree.find('span').at(0).prop('style')).toEqual({...boxStyle, backgroundColor: 'red'});
        expect(tree.find('span').at(1).prop('style')).toEqual({...boxStyle, backgroundColor: 'green', marginTop: 20});
        expect(tree.find('span').at(2).prop('style')).toEqual({...boxStyle, backgroundColor: 'blue', marginTop: 20});

        tree.setProps({direction: 'column-reverse'});

        expect(tree.find('span').at(0).prop('style')).toEqual({...boxStyle, backgroundColor: 'red'});
        expect(tree.find('span').at(1).prop('style')).toEqual({...boxStyle, backgroundColor: 'green', marginBottom: 20});
        expect(tree.find('span').at(2).prop('style')).toEqual({...boxStyle, backgroundColor: 'blue', marginBottom: 20});
    });

    test('renders Stack with divider & spacings correctly', () => {

        const tree = mount(
            <HStack spacing={20} divider={<span style={{width: 1}} />}>
                <label key={0} style={{...boxStyle, backgroundColor: 'red'}} />,
                <label key={1} style={{...boxStyle, backgroundColor: 'green'}} />,
                <label key={2} style={{...boxStyle, backgroundColor: 'blue'}} />
            </HStack>
        );

        expect(tree.find('span').length).toEqual(2);
        // expect(tree.find('Box').first().prop('style')).toEqual({margin: '0 20px', alignSelf: 'stretch'});
    });

});
