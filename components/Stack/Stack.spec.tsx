import * as React from 'react';
import { render } from '@testing-library/react';
import { HStack, VStack } from './Stack';

const boxStyle = {
	height: 40,
	width: 40
};

describe('Stack', () => {
	test('renders Stack correctly', () => {
		const { container } = render(
			<VStack spacing={20} divider={<span style={{ width: 1 }} />}>
				<div key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
				<div key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
				<div key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
			</VStack>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders Stack with spacings correctly', () => {
		const children = [
			<span key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
			<span key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
			<span key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
		];

		const { container, rerender } = render(<VStack spacing={20}>{children}</VStack>);

		const columnSpans = container.querySelectorAll('span');
		expect(columnSpans[0]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'red' });
		expect(columnSpans[1]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'green', marginTop: '20px' });
		expect(columnSpans[2]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'blue', marginTop: '20px' });

		rerender(
			<VStack spacing={20} direction="column-reverse">
				{children}
			</VStack>
		);

		const reverseSpans = container.querySelectorAll('span');
		expect(reverseSpans[0]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'red' });
		expect(reverseSpans[1]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'green', marginBottom: '20px' });
		expect(reverseSpans[2]).toHaveStyle({ height: '40px', width: '40px', backgroundColor: 'blue', marginBottom: '20px' });
	});

	test('renders Stack with divider & spacings correctly', () => {
		const { container } = render(
			<HStack spacing={20} divider={<span style={{ width: 1 }} />}>
				<label key={0} style={{ ...boxStyle, backgroundColor: 'red' }} />,
				<label key={1} style={{ ...boxStyle, backgroundColor: 'green' }} />,
				<label key={2} style={{ ...boxStyle, backgroundColor: 'blue' }} />
			</HStack>
		);

		expect(container.querySelectorAll('span')).toHaveLength(2);
	});
});
