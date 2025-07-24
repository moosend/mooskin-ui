import * as React from 'react';

// MUI v5
import { DatePicker as DatePickerUI } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';

// Models
import { IDatePickerComponentProps, IDatePickerKeyboardComponentProps } from './model';

// Custom
import { Input } from '../Input/Input';
import { withMooskinContext } from '../index';
import variables from '../_utils/globals/variables';
import { getOverridesForPicker } from '../_utils/helper';

export const DatePicker: React.FC<IDatePickerComponentProps | IDatePickerKeyboardComponentProps> = withMooskinContext((props) => {
	const { inputProps, format = 'dd/MM/yyyy', ...restProps } = props;
	const [isPickerOpen, setIsPickerOpen] = React.useState(false);

	const openPicker = () => setIsPickerOpen(true);
	const closePicker = () => setIsPickerOpen(false);
	const materialTheme = createTheme(getOverridesForPicker((props as any).palette, variables));

	const renderInput = (params: any) =>
		inputProps ? (
			<Input
				{...params}
				{...inputProps}
				onKeyDown={(e) => e.preventDefault()}
				onClick={openPicker}
				styles={{ paddingTop: '7px', paddingBottom: '7px' }}
			/>
		) : (
			<TextField
				styles={{ paddingTop: '7px', paddingBottom: '7px' }}
				{...params}
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
				<DatePickerUI
					open={isPickerOpen}
					onOpen={openPicker}
					onClose={closePicker}
					{...restProps}
					inputFormat={format}
					renderInput={renderInput}
					onChange={(value) => {
						// Call original onChange with just the value if it exists
						props.onChange?.(value);
					}}
				/>
			</ThemeProvider>
		</LocalizationProvider>
	);
});

DatePicker.displayName = 'DatePicker';
