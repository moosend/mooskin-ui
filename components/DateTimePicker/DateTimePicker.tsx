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
	'date-time-keyboard': KeyboardDateTimePicker
};

/**
 * DateTimePicker
 */
export const DateTimePicker: React.FC<IDateTimePickerComponentProps | IDateTimePickerKeyboardComponentProps> = withMooskinContext(
	(props) => {
		const materialTheme = createMuiTheme({
			overrides: {
				MuiButton: {
					textPrimary: {
						backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					},
					label: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPaper: {
					root: {
						backgroundColor: (props as any).palette.backgroundColors.white || variables.backgroundColors.white
					}
				},
				MuiPickersCalendarHeader: {
					switchHeader: {
						backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					},
					iconButton: {
						backgroundColor:
							(props as any).palette.backgroundColors.primary1 + '!important' || variables.backgroundColors.primary1 + '!important',
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					},
					dayLabel: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPickersDay: {
					current: {
						color: (props as any).palette.fontColors.white || variables.fontColors.white
					},
					day: {
						backgroundColor: (props as any).palette.backgroundColors.background || variables.backgroundColors.background,
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					},
					dayDisabled: {
						color: (props as any).palette.backgroundColors.medgray1 || variables.backgroundColors.medgray1
					},
					daySelected: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1,
						color: (props as any).palette.fontColors.white || variables.fontColors.white
					}
				},
				MuiTypography: {
					body2: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					},
					alignCenter: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiIconButton: {
					label: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPickersModal: {
					dialogAction: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPickersSlideTransition: {
					transitionContainer: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPickersToolbar: {
					toolbar: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					}
				},
				MuiPickersToolbarButton: {
					toolbarBtn: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					}
				},
				MuiPickersClock: {
					pin: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					}
				},
				MuiPickersClockNumber: {
					clockNumber: {
						color: (props as any).palette.fontColors.text || variables.fontColors.text
					}
				},
				MuiPickersClockPointer: {
					pointer: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					},
					thumb: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1,
						borderColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					},
					noPoint: {
						backgroundColor: (props as any).palette.backgroundColors.primary1 || variables.backgroundColors.primary1
					}
				}
			}
		} as any);

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
