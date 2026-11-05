import * as React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('Image', () => {
	test('renders correctly', () => {
		const { container } = render(<Image src="asd" />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
