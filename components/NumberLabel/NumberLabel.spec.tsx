import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NumberLabel } from './NumberLabel';

describe('NumberLabel', () => {
	test('renders correctly', () => {
		const { container } = render(
			<NumberLabel className="myClass" style={{ color: 'blue' }} id={'label'} abbreviate>
				Mooskin
			</NumberLabel>
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders simple text with label styles', () => {
		render(<NumberLabel>Mooskin</NumberLabel>);
		expect(screen.getByText('Mooskin')).toBeInTheDocument();
	});

	test('renders simple numbers text', () => {
		render(<NumberLabel>12345</NumberLabel>);
		expect(screen.getByText('12345')).toBeInTheDocument();
	});

	test('abbreviates numerical value if abbreviate prop is passed (thousands)', () => {
		render(<NumberLabel abbreviate>13400</NumberLabel>);
		expect(screen.getByText('13.4K')).toBeInTheDocument();
	});

	test('abbreviates numerical value if abbreviate prop is passed (millions)', () => {
		render(<NumberLabel abbreviate>3235942</NumberLabel>);
		expect(screen.getByText('3.2M')).toBeInTheDocument();
	});

	test('abbreviates numerical value if abbreviate prop is passed (billions)', () => {
		render(<NumberLabel abbreviate>6345153975</NumberLabel>);
		expect(screen.getByText('6.3B')).toBeInTheDocument();
	});

	test('abbreviates numerical value if abbreviate prop is passed (trillion - enthusiast mode)', () => {
		render(<NumberLabel abbreviate>8675345876235</NumberLabel>);
		expect(screen.getByText('8.6T')).toBeInTheDocument();
	});

	test('rounds to the nearest thousand when roundNumber prop is passed (thousands)', () => {
		render(<NumberLabel roundNumber>13400</NumberLabel>);
		expect(screen.getByText('13400')).toBeInTheDocument();
	});

	test('rounds to the nearest million when roundNumber prop is passed (millions)', () => {
		render(<NumberLabel roundNumber>3235942</NumberLabel>);
		expect(screen.getByText('3200000')).toBeInTheDocument();
	});

	test('rounds to the nearest billion when roundNumber prop is passed (billions)', () => {
		render(<NumberLabel roundNumber>6345153975</NumberLabel>);
		expect(screen.getByText('6300000000')).toBeInTheDocument();
	});

	test('rounds to the nearest trillion when roundNumber prop is passed (trillion - enthusiast mode)', () => {
		render(<NumberLabel roundNumber>8675345876235</NumberLabel>);
		expect(screen.getByText('8700000000000')).toBeInTheDocument();
	});

	test('abbreviates and rounds numerical values if both props are passed (thousands)', () => {
		render(
			<NumberLabel abbreviate roundNumber>
				13400
			</NumberLabel>
		);
		expect(screen.getByText('13.4K')).toBeInTheDocument();
	});

	test('abbreviates and rounds numerical values if both props are passed (millions)', () => {
		render(
			<NumberLabel abbreviate roundNumber>
				3235942
			</NumberLabel>
		);
		expect(screen.getByText('3.2M')).toBeInTheDocument();
	});

	test('abbreviates and rounds numerical values if both props are passed (billions)', () => {
		render(
			<NumberLabel abbreviate roundNumber>
				6545153975
			</NumberLabel>
		);
		expect(screen.getByText('6.5B')).toBeInTheDocument();
	});

	test('abbreviates and rounds numerical values if both props are passed (trillion)', () => {
		render(
			<NumberLabel abbreviate roundNumber>
				8675345876235
			</NumberLabel>
		);
		expect(screen.getByText('8.7T')).toBeInTheDocument();
	});

	test('abbreviates with custom decimal accuracy', () => {
		render(
			<NumberLabel abbreviate abbrAccuracy={2}>
				1774215
			</NumberLabel>
		);
		expect(screen.getByText('1.77M')).toBeInTheDocument();
	});

	test('abbreviates upper value with custom decimal accuracy', () => {
		render(
			<NumberLabel abbreviate roundNumber roundAccuracy="high" abbrAccuracy={2}>
				1774215
			</NumberLabel>
		);
		expect(screen.getByText('1.80M')).toBeInTheDocument();
	});

	test('rounds with custom round accuracy (thousand)', () => {
		render(
			<NumberLabel roundNumber roundAccuracy="high">
				15432
			</NumberLabel>
		);
		expect(screen.getByText('15400')).toBeInTheDocument();
	});

	test('rounds with custom round accuracy (thousand) part 2', () => {
		render(
			<NumberLabel roundNumber roundAccuracy="low">
				15432
			</NumberLabel>
		);
		expect(screen.getByText('15000')).toBeInTheDocument();
	});

	test('rounds and abbreviates with custom accuracies (thousand)', () => {
		render(
			<NumberLabel roundNumber roundAccuracy="low" abbreviate abbrAccuracy={2}>
				15432
			</NumberLabel>
		);
		expect(screen.getByText('15K')).toBeInTheDocument();
	});

	test('abbreviates with custom accuracy (billions)', () => {
		render(
			<NumberLabel abbreviate abbrAccuracy={5}>
				6545153975
			</NumberLabel>
		);
		expect(screen.getByText('6.54515B')).toBeInTheDocument();
	});

	test('abbreviates and rounds with custom accuracy (billions)', () => {
		render(
			<NumberLabel abbreviate roundNumber roundAccuracy={'low'} abbrAccuracy={5}>
				6545153975
			</NumberLabel>
		);
		expect(screen.getByText('7B')).toBeInTheDocument();
	});
});
