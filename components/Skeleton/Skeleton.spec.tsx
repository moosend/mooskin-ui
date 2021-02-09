import * as React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText } from './Skeleton';

import { mount, shallow } from 'enzyme';

const boxStyle = {
    height: 40,
    width: 40
};

describe('Skeleton', () => {
    test('renders Skeleton correctly', () => {
        const tree = shallow(
            <Skeleton>
                <div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
                <div key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
                <div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
            </Skeleton>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders SkeletonCircle correctly', () => {
        const tree = shallow(<SkeletonCircle />);

        expect(tree).toMatchSnapshot();
    });

    test('renders SkeletonText correctly', () => {
        const tree = shallow(<SkeletonText />);

        expect(tree).toMatchSnapshot();
    });

    test('renders SkeletonText with lines correctly', () => {
        const tree = mount(<SkeletonText lines={10} />);

        expect(tree.find('div').length).toEqual(10);
    });
});
