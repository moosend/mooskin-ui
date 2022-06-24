import * as React from 'react';

// Date-FNS
import DateFnsUtils from '@date-io/date-fns';

// Models
import { IDateTimePickerComponentProps, IDateTimePickerKeyboardComponentProps, PickerType } from './model';

// Material-UI Date Time Picker
import { DateTimePicker as DateTimePickerUI, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

// Components
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import variables from '../_utils/globals/variables';
import { Input } from '../Input/Input';
import { withMooskinContext } from '../Styled/MooskinContextProvider';
import { getOverridesForPicker } from '../_utils/helper';

const ComponentByType = {
	'date-time': DateTimePickerUI,
	'date-time-keyboard': KeyboardDateTimePicker
};

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = withMooskinContext(
	(props) => {
		const materialTheme = createTheme(getOverridesForPicker((props as any).palette, variables));

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
	pickerType: 'date-time'
	// variant: 'inline',
};

DateTimePicker.displayName = 'DateTimePicker';
