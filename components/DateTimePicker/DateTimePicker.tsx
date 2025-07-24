import * as React from 'react';

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps } from './model';

// Material-UI Date Time Picker
import { DateTimePicker as DateTimePickerUI } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextField } from '@mui/material';
// Components
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import variables from '../_utils/globals/variables';
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

		return (
			<LocalizationProvider
				dateAdapter={AdapterDateFns}
				adapterLocale={props.locale}
			>
				<ThemeProvider theme={materialTheme}>
					<DateTimePickerUI
						open={isPickerOpen}
						onOpen={openPicker}
						onClose={closePicker}
						{...restProps}
						inputFormat={format}
						dayOfWeekFormatter={(d) => d.slice(0, 2)}
						renderInput={renderInput}
						onChange={(value) => {
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
