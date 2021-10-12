import * as React from 'react';

import { LoadingBar } from './LoadingBar';

import { mount } from 'enzyme';

describe('LoadingBar', () => {
	test(`LoadingBar renders correctly`, () => {
		const func1 = jest.fn();
		const func2 = jest.fn();

		const tree = mount(<LoadingBar progress={10} error={false} onLoaderError={func1} onLoaderDone={func2} />);

		expect(tree).toMatchSnapshot();
	});

	test(`calls done callback function on complete`, () => {
		const func = jest.fn();

		const component = mount(<LoadingBar progress={80} error={false} onLoaderDone={func} />);

		component.setProps({ progress: 100 });

		setTimeout(() => {
			expect(func).toHaveBeenCalled();
		}, 10);
	});

	test(`onLoaderError callback is called when an error prop of true is passed`, () => {
		const func = jest.fn();

		const component = mount(<LoadingBar progress={10} onLoaderError={func} />);

		component.setProps({ error: true });

		setTimeout(() => {
			expect(func).toHaveBeenCalled();
		}, 10);
	});
});
