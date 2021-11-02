import * as React from 'react';

// Date-FNS
import DateFnsUtils from '@date-io/date-fns';

// Models
import { IDatePickerComponentProps, IDatePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Picker
import { DatePicker as DatePickerUI, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// Components
import { Input } from '../Input/Input';
import { withMooskinContext } from '../index';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import variables from '../_utils/globals/variables';

const ComponentByType = {
	date: DatePickerUI,
	'date-keyboard': KeyboardDatePicker,
};

/**
 * DatePicker
 */
export const DatePicker: React.FC<IDatePickerComponentProps | IDatePickerKeyboardComponentProps> = withMooskinContext((props) => {
	const materialTheme = createMuiTheme({
		overrides: {
			MuiButton: {
				textPrimary: {
					backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
				label: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiPaper: {
				root: {
					backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
				},
			},
			MuiPickersCalendarHeader: {
				switchHeader: {
					backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
				iconButton: {
					backgroundColor:
						(props as any).palette.backgroundColors.primary1 + '!important' || variables.backgroundColors.primary1 + '!important',
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
				dayLabel: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiPickersDay: {
				current: {
					color: (props as any).palette.fontColors.white || variables.fontColors.white,
				},
				day: {
					backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
				dayDisabled: {
					color: (props as any).palette.backgroundColors.medgray1 || variables.backgroundColors.medgray1,
				},
				daySelected: {
					backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1,
					color: (props as any).palette.fontColors.white || variables.fontColors.white,
				},
			},
			MuiTypography: {
				body2: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
				alignCenter: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiIconButton: {
				label: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiPickersModal: {
				dialogAction: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiPickersSlideTransition: {
				transitionContainer: {
					color: (props as any).palette.fontColors.text || variables.fontColors.text,
				},
			},
			MuiPickersToolbar: {
				toolbar: {
					backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1,
				},
			},
			MuiPickersToolbarButton: {
				toolbarBtn: {
					backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1,
				},
			},
		},
	} as any);
	const { inputProps } = props;

	const renderInput = (dateInputProps: any) => {
		return (
			<div ref={dateInputProps.inputRef}>
				<Input style={{ width: 500 }} {...dateInputProps} {...inputProps} />
			</div>
		);
	};

	const type: PickerType = props.pickerType ? props.pickerType : 'date';

	const PickerComponent = ComponentByType[type];

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={materialTheme}>
				<PickerComponent {...props} variant="inline" TextFieldComponent={renderInput} />
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
});

DatePicker.defaultProps = {
	format: 'dd/MM/yyyy',
	pickerType: 'date',
	// variant: 'inline',
};

DatePicker.displayName = 'DatePicker';
