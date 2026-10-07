import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../Box/Box';
import { Layout } from './Layout';

describe('Layout', () => {
	test('renders correctly', () => {
		const { container } = render(
			<Layout>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
				<Box p={30} round="sm" boxShadow="md">
					Box
				</Box>
			</Layout>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
