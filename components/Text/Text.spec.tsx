import * as React from 'react';
import { render } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
	test('renders correctly', () => {
		const { container } = render(<Text>Text here!</Text>);
		expect(container.firstChild).toMatchSnapshot();
	});
});
