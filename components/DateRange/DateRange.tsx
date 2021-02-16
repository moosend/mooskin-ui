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
import Box from '../Box/Box';
import Input from '../Input/Input';

const defaultFormat = 'dd MMM yyyy';

/**
 * DateRange
 */
export const DateRange: React.FC<IDateRangePickerComponentProps> = withMooskinContext((props) => {
    const [showPicker, setShowPicker] = React.useState(false);

    const getInputValue = () => {
        let inputValue = '';

        props.ranges &&
            props.ranges.length &&
            props.ranges.forEach((item, i) => {
                if (item.startDate && item.endDate) {
                    const separator = i > 0 ? ', ' : '';
                    inputValue =
                        inputValue +
                        separator +
                        `${format(item.startDate, props.format || defaultFormat)} - ${format(item.endDate, props.format || defaultFormat)}`;
                }
            });

        return inputValue ? inputValue : 'N/A';
    };

    return (
        <Box position="relative" d="flex" {...props.wrapperProps}>
            <Input onFocus={() => setShowPicker(true)} value={getInputValue()} {...props.inputProps} />
            {showPicker && (
                <Box boxShadow="md" position="absolute" top={40} left={0} {...props.pickerWrapperProps}>
                    <DateRangePicker ranges={props.ranges} onChange={props.onChange} {...props} />
                    <DateRangeOverlay onClick={() => setShowPicker(false)} />
                </Box>
            )}
        </Box>
    );
});

DateRange.defaultProps = {
    className: '',
    direction: 'horizontal',
    format: defaultFormat
    // months: 2
};

DateRange.displayName = 'DateRange';

/**
 * DateRangeOverlay
 */
const DateRangeOverlay: React.FC<IBoxComponentProps> = (props) => {
    return <Box position="fixed" top="0px" left="0px" right="0px" bottom="0px" zIndex="-1" {...props} />;
};

DateRangeOverlay.defaultProps = {
    className: '',
    style: {}
};

DateRangeOverlay.displayName = 'DateRangeOverlay';

export default DateRange;
