import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
	test('renders Box correctly', () => {
		const { container } = render(
			<Box align="baseline" p={5} m={5}>
				Box
			</Box>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
