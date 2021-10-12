import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { INumberLabelComponentProps } from './model';

// Components
import { Label } from '../Label/Label';

/**
 * NumberLabel
 */
export const NumberLabel: React.FC<INumberLabelComponentProps> = withMooskinContext((props) => {
	const getContent = () => {
		const { children, abbreviate, roundNumber } = props;
		if ((abbreviate || roundNumber) && !isNaN(children as any)) {
			return prettifyNumber(children as any);
		}
		return children;
	};

	const prettifyNumber = (value: number) => {
		const { abbreviate, roundNumber } = props;
		let newValue: string | number = value;

		const digits = {
			billion: 1000000000,
			million: 1000000,
			thousand: 1000,
			trillion: 1000000000000,
		};

		if (value < digits.thousand) {
			if (roundNumber && value >= 500) {
				newValue = Number(roundValue(newValue.toString(), props.roundAccuracy || 'high', digits));
			}
			if (abbreviate && newValue >= 1000) {
				newValue = newValue / digits.thousand + 'K';
			}
			return String(newValue);
		}

		if (value >= digits.thousand && value <= 999999) {
			if (roundNumber) {
				newValue = Number(roundValue(newValue.toString(), props.roundAccuracy || 'high', digits));
				// newValue = Math.round(newValue / thousand) * thousand;
			}
			if (abbreviate) {
				const decimal = getDecimalValue(newValue.toString(), 'thousand');
				newValue = Math.trunc(newValue / digits.thousand) + `.${decimal}K`;
				newValue = removeZeros(newValue);
			}
			return String(newValue);
		}

		if (value >= digits.million && value <= digits.billion) {
			if (roundNumber) {
				newValue = Number(roundValue(newValue.toString(), props.roundAccuracy || 'high', digits));
				// newValue = Math.round(newValue / million) * million;
			}
			if (abbreviate) {
				const decimal = getDecimalValue(newValue.toString(), 'million');
				newValue = Math.trunc(newValue / digits.million) + `.${decimal}M`;
				newValue = removeZeros(newValue);
			}
			return String(newValue);
		}

		if (value >= digits.billion && value <= digits.trillion) {
			if (roundNumber) {
				newValue = Number(roundValue(newValue.toString(), props.roundAccuracy || 'high', digits));
				// newValue = Math.round(newValue / billion) * billion;
			}
			if (abbreviate) {
				const decimal = getDecimalValue(newValue.toString(), 'billion');
				newValue = Math.trunc(newValue / digits.billion) + `.${decimal}B`;
				newValue = removeZeros(newValue);
			}
			return newValue;
		} else {
			if (roundNumber) {
				newValue = Number(roundValue(newValue.toString(), props.roundAccuracy || 'high', digits));
				// newValue = Math.round(newValue / trillion) * trillion;
			}
			if (abbreviate) {
				const decimal = getDecimalValue(newValue.toString(), 'trillion');
				newValue = Math.trunc(newValue / digits.trillion) + `.${decimal}T`;
				newValue = removeZeros(newValue);
			}
			return newValue;
		}
	};

	const roundValue = (value: string, acc: string, digits: { [key: string]: number }) => {
		const array = value.split('');
		if (value.length <= 4) {
			if (acc === 'high') {
				return Math.round(Number(value) / 10) * 10;
			} else if (acc === 'low') {
				return Math.round(Number(value) / 100) * 100;
			}
			return value;
		} else if (value.length < 7) {
			if (acc === 'high') {
				const rounded = Math.round(Number(array.slice(array.length - 3).join('')) / 100) * 100;
				array.splice(array.length - 3, 3);
				return array.join('') + rounded;
			} else if (acc === 'low') {
				return Math.round(Number(value) / digits.thousand) * digits.thousand;
			}
		} else if (value.length < 10) {
			if (acc === 'high') {
				const rounded = Math.round(Number(array.slice(array.length - 6, 4).join('')) / 100) * 100;
				array.splice(array.length - 6, 6);
				return array.join('') + rounded * digits.thousand;
			} else if (acc === 'low') {
				return Math.round(Number(value) / digits.million) * digits.million;
			}
		} else if (value.length < 13) {
			if (acc === 'high') {
				const rounded = Math.round(Number(array.slice(array.length - 9, 4).join('')) / 100) * 100;
				array.splice(array.length - 9, 9);
				return array.join('') + rounded * digits.million;
			} else if (acc === 'low') {
				return Math.round(Number(value) / digits.billion) * digits.billion;
			}
		} else if (value.length < 16) {
			if (acc === 'high') {
				const rounded = Math.round(Number(array.slice(array.length - 12, 4).join('')) / 100) * 100;
				array.splice(array.length - 12, 12);
				return array.join('') + rounded * digits.billion;
			} else if (acc === 'low') {
				return Math.round(Number(value) / digits.trillion) * digits.trillion;
			}
		}
		return value;
	};

	const getDecimalValue = (value: string, abbr: string) => {
		const accuracy = props.abbrAccuracy;
		const array = value.split('');
		if (abbr === 'thousand') {
			return accuracy ? array.splice(array.length - 3, accuracy).join('') : 0;
		} else if (abbr === 'million') {
			return accuracy ? array.splice(array.length - 6, accuracy).join('') : 0;
		} else if (abbr === 'billion') {
			return accuracy ? array.splice(array.length - 9, accuracy).join('') : 0;
		} else if (abbr === 'trillion') {
			return accuracy ? array.splice(array.length - 12, accuracy).join('') : 0;
		}
	};

	const removeZeros = (value: string) => {
		const zero = '0';
		const accuracy = props.abbrAccuracy;
		if (accuracy === 0) {
			return value.replace('.0', '');
		}
		if (accuracy && accuracy > 0) {
			return value.replace('.' + zero.repeat(accuracy), '');
		}
		return value;
	};

	return <Label {...props}>{getContent()}</Label>;
});

NumberLabel.defaultProps = {
	abbrAccuracy: 1,
	className: '',
	style: {},
};

NumberLabel.displayName = 'NumberLabel';
