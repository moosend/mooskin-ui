import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Date Range Component
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// Helpers
import format from 'date-fns/format';

// Models
import { IBoxComponentProps } from '../Box/model';
import { IDateRangePickerComponentProps } from './model';

// Components
import { Box } from '../Box/Box';
import { Input, InputContainer } from '../Input/Input';

import { StyledDateRange } from './styles';

const defaultFormat = 'dd MMM yyyy';

/**
 * DateRange
 */
export const DateRange: React.FC<IDateRangePickerComponentProps> = withMooskinContext(
	({ className = '', direction = 'horizontal', format: dateFormat = defaultFormat, ...props }) => {
		const [showPicker, setShowPicker] = React.useState(false);

		const getInputValue = () => {
			let inputValue = '';

			props.ranges &&
				props.ranges.length &&
				props.ranges.forEach((item, i) => {
					if (item.startDate && item.endDate) {
						const separator = i > 0 ? ', ' : '';
						inputValue = inputValue + separator + `${format(item.startDate, dateFormat)} - ${format(item.endDate, dateFormat)}`;
					}
				});

			return inputValue ? inputValue : 'N/A';
		};

		return (
			<Box position="relative" d="flex" {...props.wrapperProps}>
				<InputContainer value={getInputValue()} {...props.inputContainerPrpps}>
					{props.customComponent}
					<Input onFocus={() => setShowPicker(true)} {...props.inputProps} />
				</InputContainer>
				{showPicker && (
					<StyledDateRange boxShadow="md" {...props.pickerWrapperProps} palette={(props as any).palette}>
						{React.createElement(DateRangePicker as React.ComponentType<any>, {
							...props,
							locale: props.locale,
							ranges: props.ranges,
							onChange: props.onChange
						})}
						<DateRangeOverlay onClick={() => setShowPicker(false)} />
					</StyledDateRange>
				)}
			</Box>
		);
	}
);

DateRange.displayName = 'DateRange';

/**
 * DateRangeOverlay
 */
const DateRangeOverlay: React.FC<IBoxComponentProps> = ({ className = '', style = {}, ...props }) => {
	return <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={-1} {...props} />;
};

DateRangeOverlay.displayName = 'DateRangeOverlay';
