import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton, SkeletonCircle, SkeletonText } from './Skeleton';

const boxStyle = {
	height: 40,
	width: 40
};

describe('Skeleton', () => {
	test('renders Skeleton correctly', () => {
		const { container } = render(
			<Skeleton>
				<div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
				<div key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
				<div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
			</Skeleton>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders SkeletonCircle correctly', () => {
		const { container } = render(<SkeletonCircle />);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders SkeletonText correctly', () => {
		const { container } = render(<SkeletonText />);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders SkeletonText with lines correctly', () => {
		const { container } = render(<SkeletonText lines={10} />);

		expect(container.querySelectorAll('div')).toHaveLength(10);
	});
});
