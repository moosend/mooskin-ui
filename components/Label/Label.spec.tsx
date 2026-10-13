import * as React from 'react';
import { render } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
	test('renders correctly', () => {
		const { container } = render(<Label>Label here!</Label>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
