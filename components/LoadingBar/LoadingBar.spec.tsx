import * as React from 'react';
import { render } from '@testing-library/react';
import { LoadingBar } from './LoadingBar';

describe('LoadingBar', () => {
	test('LoadingBar renders correctly', () => {
		const func1 = jest.fn();
		const func2 = jest.fn();

		const { container } = render(<LoadingBar progress={10} error={false} onLoaderError={func1} onLoaderDone={func2} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('calls done callback function on complete', () => {
		const func = jest.fn();

		const { rerender } = render(<LoadingBar progress={80} error={false} onLoaderDone={func} />);

		rerender(<LoadingBar progress={100} error={false} onLoaderDone={func} />);

		expect(func).toHaveBeenCalled();
	});

	test('onLoaderError callback is called when an error prop of true is passed', () => {
		const func = jest.fn();

		const { rerender } = render(<LoadingBar progress={10} onLoaderError={func} />);

		rerender(<LoadingBar progress={10} error onLoaderError={func} />);

		expect(func).toHaveBeenCalled();
	});
});
