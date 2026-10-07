import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../Box/Box';
import { Carousel } from './Carousel';

describe('Carousel', () => {
	test('renders correctly', () => {
		const { container } = render(
			<Carousel>
				{[...Array(7)].map((item, i) => {
					return (
						<div style={{ padding: 10 }} key={i}>
							<Box boxShadow="md" round="md" m={30} p={30}>{`Box ${i}`}</Box>
						</div>
					);
				})}
			</Carousel>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
