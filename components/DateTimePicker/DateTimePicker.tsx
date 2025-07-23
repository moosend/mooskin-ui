import * as React from 'react';

// Date-FNS

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps } from './model';

// Material-UI Date Time Picker
//import { DateTimePicker as DateTimePickerUI, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@mui/x-date-pickers';
import { DateTimePicker as DateTimePickerUI } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextField } from '@mui/material';
// Components
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import variables from '../_utils/globals/variables';
// import { Input } from '../Input/Input';
import { withMooskinContext } from '../Styled/MooskinContextProvider';
import { getOverridesForPicker } from '../_utils/helper';

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = withMooskinContext(
	(props) => {
		const { ampm = false, format = 'dd/MM/yyyy hh:mm:ss', ...restProps } = props;
		const [isPickerOpen, setIsPickerOpen] = React.useState(false);

		const openPicker = () => setIsPickerOpen(true);
		const closePicker = () => setIsPickerOpen(false);
		const materialTheme = createTheme(getOverridesForPicker((props as any).palette, variables));

		const renderInput = (dateInputProps: FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps) => (
			<TextField
				{...dateInputProps}
				fullWidth
				onClick={openPicker}
				onKeyDown={(e) => e.preventDefault()}
				sx={{
					'& .MuiInputBase-input.MuiOutlinedInput-input': {
						backgroundColor: '#ffffff',
						paddingTop: '6px',
						paddingBottom: '6px',
						fontSize: '14px'
					}
				}}
			/>
		);

		//const type: PickerType = pickerType ? pickerType : 'date-time';

		//const PickerComponent = ComponentByType[type];

		return (
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<ThemeProvider theme={materialTheme}>
					<DateTimePickerUI
						open={isPickerOpen}
						onOpen={openPicker}
						onClose={closePicker}
						{...restProps}
						inputFormat={format}
						renderInput={renderInput}
						onChange={(value, keyboardInputValue) => {
							// Call original onChange with just the value if it exists
							props.onChange?.(value);
						}}
						ampm={ampm}
					/>
				</ThemeProvider>
			</LocalizationProvider>
		);
	}
);

DateTimePicker.displayName = 'DateTimePicker';
