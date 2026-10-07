import * as React from 'react';
import { Description } from './Description';

import { render } from '@testing-library/react';

describe('Description', () => {
	test('renders correctly', () => {
		const { container } = render(<Description>Description here!</Description>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
