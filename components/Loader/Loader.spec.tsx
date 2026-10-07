import * as React from 'react';
import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
	test('renders correctly', () => {
		const { container } = render(<Loader />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
