import { boxComponentProps } from '../Box/model';
import { IStyledTheme } from '../Styled/model';

export const arrayHasDupes = (array: any[]): boolean => {
	const n = array.length;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (array[i] === array[j]) {
				return true;
			}
		}
	}

	return false;
};

export const debounce = (func: (...args: any[]) => any, wait: number, immediate: boolean) => {
	let timeout: any;

	return function () {
		const args = arguments;
		const later = () => {
			timeout = null;

			if (!immediate) {
				func.apply(this, args);
			}
		};

		const callNow = immediate && !timeout;

		timeout && clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(this, args);
		}
	};
};

export const getBoxProps = (componentProps: any) => {
	const boxProps: any = {};
	Object.keys(componentProps).map((key) => {
		if (boxComponentProps.includes(key)) {
			boxProps[key] = (componentProps as any)[key];
		}
	});
	return boxProps;
};

export const getOverridesForPicker = (theme: IStyledTheme, defaults: IStyledTheme) => ({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1
			}
		},
		MuiPickersCalendarHeader: {
			iconButton: {
				fill: theme.fontColors.text || defaults.fontColors.text
			}
		},
		MuiPickersDay: {
			current: {
				color: theme.fontColors.primary1 || defaults.fontColors.primary1
			},
			day: {
				backgroundColor: theme.backgroundColors.white || defaults.backgroundColors.white,
				color: theme.fontColors.text || defaults.fontColors.text
			},
			dayDisabled: {
				color: theme.backgroundColors.medgray1 || defaults.backgroundColors.medgray1
			},
			daySelected: {
				backgroundColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1,
				color: theme.fontColors.white || defaults.fontColors.white
			}
		},
		MuiPickersModal: {
			dialogAction: {
				color: theme.fontColors.text || defaults.fontColors.text
			}
		},
		MuiPickerDTTabs: {
			tabs: {
				backgroundColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1,
				fill: theme.fontColors.white || defaults.fontColors.white
			}
		},
		MuiSvgIcon: {
			root: {
				fill: 'inherit'
			}
		},
		MuiPickersClock: {
			pin: {
				backgroundColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1
			}
		},
		MuiPickersClockPointer: {
			pointer: {
				backgroundColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1
			},
			thumb: {
				borderColor: theme.backgroundColors.primary1 || defaults.backgroundColors.primary1
			}
		},
		MuiTabs: {
			indicator: {
				backgroundColor: theme.backgroundColors.primary3 || defaults.backgroundColors.primary3
			}
		},
		MuiIconButton: {
			label: {
				color: 'inherit'
			}
		}
	}
});
