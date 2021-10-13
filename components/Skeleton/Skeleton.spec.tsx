import * as React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText } from './Skeleton';

import { mount } from 'enzyme';

const boxStyle = {
	height: 40,
	width: 40
};

describe('Skeleton', () => {
	test('renders Skeleton correctly', () => {
		const tree = mount(
			<Skeleton>
				<div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
				<div key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
				<div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
			</Skeleton>
		);

		expect(tree).toMatchSnapshot();
	});

	test('renders SkeletonCircle correctly', () => {
		const tree = mount(<SkeletonCircle />);

		expect(tree).toMatchSnapshot();
	});

	test('renders SkeletonText correctly', () => {
		const tree = mount(<SkeletonText />);

		expect(tree).toMatchSnapshot();
	});

	test('renders SkeletonText with lines correctly', () => {
		const tree = mount(<SkeletonText lines={10} />);

		expect(tree.find('div').length).toEqual(10);
	});
});
