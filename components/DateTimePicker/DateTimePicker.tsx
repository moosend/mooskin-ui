import * as React from 'react';

// Date-FNS
import DateFnsUtils from '@date-io/date-fns';

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Time Picker
import { DateTimePicker as DateTimePickerUI, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// Components
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import variables from '../_utils/globals/variables';
import { Input } from '../Input/Input';
import { withMooskinContext } from '../Styled/MooskinContextProvider';

const ComponentByType = {
	'date-time': DateTimePickerUI,
	'date-time-keyboard': KeyboardDateTimePicker,
};

const materialTheme = createMuiTheme({
	overrides: {
		MuiButtonBase: {
			root: {
				backgroundColor: variables.backgroundColors.background,
				color: variables.fontColors.text,
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: variables.backgroundColors.background,
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				backgroundColor: variables.backgroundColors.background,
				color: variables.fontColors.text,
			},
		},
		MuiPickersDay: {
			current: {
				color: variables.fontColors.white,
			},
			day: {
				backgroundColor: variables.backgroundColors.background,
				color: variables.fontColors.text,
			},
			dayDisabled: {
				color: variables.backgroundColors.medgray1,
			},
			daySelected: {
				backgroundColor: variables.backgroundColors.primary1,
				color: variables.fontColors.white,
			},
		},
		MuiPickersModal: {
			dialogAction: {
				color: variables.fontColors.text,
			},
		},
		MuiPickersSlideTransition: {
			transitionContainer: {
				color: variables.fontColors.text,
			},
		},
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: variables.backgroundColors.primary1,
			},
		},
		MuiPickersToolbarButton: {
			toolbarBtn: {
				backgroundColor: variables.backgroundColors.primary1,
			},
		},
	},
} as any);

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = withMooskinContext(
	(props) => {
		const renderInput = (dateInputProps: any) => <Input style={{ width: '100%' }} {...dateInputProps} {...props.inputComponentProps} />;

		const type: PickerType = props.pickerType ? props.pickerType : 'date-time';

		const PickerComponent = ComponentByType[type];

		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<ThemeProvider theme={materialTheme}>
					<PickerComponent {...props} TextFieldComponent={renderInput} />
				</ThemeProvider>
			</MuiPickersUtilsProvider>
		);
	}
);

DateTimePicker.defaultProps = {
	ampm: false,
	format: 'dd/MM/yyyy HH:ss',
	pickerType: 'date-time',
	// variant: 'inline',
};

DateTimePicker.displayName = 'DateTimePicker';
