import * as React from 'react';

// Date-FNS

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Time Picker
//import { DateTimePicker as DateTimePickerUI, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@mui/x-date-pickers';
import { DateTimePicker as DateTimePickerUI } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Components
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import variables from '../_utils/globals/variables';
import { Input } from '../Input/Input';
import { withMooskinContext } from '../Styled/MooskinContextProvider';
import { getOverridesForPicker } from '../_utils/helper';

const ComponentByType = {
	'date-time': DateTimePickerUI,
	'date-time-keyboard': DateTimePickerUI
};

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = withMooskinContext(
	({
		format: dateFormat = 'dd/MM/yyyy HH:ss',
		pickerType = 'date-time',
		ampm = false,
		// variant= 'inline',
		...props
	}) => {
		const materialTheme = createTheme(getOverridesForPicker((props as any).palette, variables));

		const renderInput = (dateInputProps: any) => <Input style={{ width: '100%' }} {...dateInputProps} {...props.inputComponentProps} />;

		const type: PickerType = pickerType ? pickerType : 'date-time';

		const PickerComponent = ComponentByType[type];

		return (
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
				<ThemeProvider theme={materialTheme}>
					<PickerComponent {...props} renderInput={renderInput} />
				</ThemeProvider>
			</LocalizationProvider>
		);
	}
);

DateTimePicker.displayName = 'DateTimePicker';
