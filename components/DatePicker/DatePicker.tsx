import * as React from 'react';

// Models
import { IDatePickerComponentProps, IDatePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Picker
import { DatePicker as DatePickerUI } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Components
// import { Input } from '../Input/Input';
import { withMooskinContext } from '../index';

// Theme & Styles
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import variables from '../_utils/globals/variables';
import { getOverridesForPicker } from '../_utils/helper';

// Define the available picker types
const ComponentByType: { [key in PickerType]: React.ComponentType<any> } = {
	date: DatePickerUI,
	'date-keyboard': DatePickerUI
};

/**
 * DatePicker Component
 */
export const DatePicker: React.FC<IDatePickerComponentProps | IDatePickerKeyboardComponentProps> = withMooskinContext(
	({ format: dateFormat = 'DD/MM/YYYY', pickerType = 'date', ...props }) => {
		const materialTheme = createTheme(getOverridesForPicker((props as any).palette, variables));
		const { inputProps } = props;

		const type: PickerType = pickerType || 'date';
		const PickerComponent = ComponentByType[type];

		return (
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={materialTheme}>
					<PickerComponent
						{...props}
						format={dateFormat}
						slotProps={{
							textField: {
								...inputProps,
								fullWidth: true
							}
						}}
					/>
				</ThemeProvider>
			</LocalizationProvider>
		);
	}
);

DatePicker.displayName = 'DatePicker';
