import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Date-FNS
import format from 'date-fns/format';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import setDate from 'date-fns/setDate';
import setMonth from 'date-fns/setMonth';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IDateSelectComponentProps } from './model';

// Components
import { Select, SelectContainer, SelectOption, SelectOptionList, SelectPlaceholder } from '../Select/Select';

/**
 * DateSelect
 */
export const DateSelect: React.FC<IDateSelectComponentProps> = withMooskinContext((props) => {
    const renderDateSelect = () => {
        const options = renderOptions();
        const selected = props.selectedValue || props.selectedValue === 0 ? props.selectedValue.toString() : '';
        return (
            <Select {...props} selectedValue={selected} onChangeSelect={onChangeSelect}>
                <SelectContainer>
                    <SelectPlaceholder>Select an option</SelectPlaceholder>
                </SelectContainer>
                <SelectOptionList>{options}</SelectOptionList>
            </Select>
        );
    };

    const renderOptions = () => {
        const { type } = props;
        if (type && type === 'hour') {
            return renderHourOption();
        } else if (type && type === 'minute') {
            return renderMinuteOptions();
        } else if (type && type === 'month') {
            return renderDayOptions();
        } else if (type && type === 'week') {
            return renderWeekOptions();
        } else if (type && type === 'ordinal') {
            return renderOrdinalOptions();
        } else {
            throw new Error('Item type is not valid!');
        }
    };

    const renderHourOption = () => {
        const options = [];
        if (props.format && props.format === '24-Hour') {
            while (options.length < 24) {
                options.push(renderHoursClockBased(options.length));
            }
        } else if (props.format && props.format === '12-Hour') {
            while (options.length < 12) {
                options.push(renderHoursClockBased(options.length, 'AM'));
            }
            while (options.length < 24) {
                options.push(renderHoursClockBased(options.length, 'PM'));
            }
        } else {
            throw new Error('Hour format not valid!');
        }
        return options;
    };

    const renderHoursClockBased = (clock: number, period?: string) => {
        if (period) {
            if (period === 'AM') {
                const text = clock.toString().length === 1 ? `0${clock} ${period}` : `${clock.toString()} ${period}`;
                return (
                    <SelectOption key={clock} value={clock.toString()}>
                        {text}
                    </SelectOption>
                );
            } else if (period === 'PM') {
                const text = (clock - 12).toString().length === 1 ? `0${clock - 12} ${period}` : `${(clock - 12).toString()} ${period}`;
                return (
                    <SelectOption key={clock} value={clock.toString()}>
                        {text}
                    </SelectOption>
                );
            }
        }
        const otherText = clock.toString().length === 1 ? `0${clock}` : clock.toString();
        return (
            <SelectOption key={clock} value={clock.toString()}>
                {otherText}
            </SelectOption>
        );
    };

    const renderMinuteOptions = () => {
        const options = [];
        for (let i = 0; i < 60; i++) {
            const text = i.toString().length === 1 ? `0${i}` : i.toString();
            options.push(
                <SelectOption key={i} value={i.toString()}>
                    {text}
                </SelectOption>
            );
        }
        return options;
    };

    const renderDayOptions = () => {
        const options = [];
        const month = getDayFormat() || 31;
        const days = getDaysInMonth(month);
        for (let i = 1; i <= days; i++) {
            const text = format(setDate(setMonth(new Date(), month - 1), i), 'Do');
            options.push(
                <SelectOption key={i} value={i.toString()}>
                    {text}
                </SelectOption>
            );
        }
        return options;
    };

    const getDayFormat = () => {
        if (props.format && parseInt(props.format, 10)) {
            return parseInt(props.format, 10);
        } else {
            throw new Error('Day format not valid!');
        }
    };

    const renderWeekOptions = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days.map((day, i) => {
            return (
                <SelectOption key={i} value={(i + 1).toString()}>
                    {day}
                </SelectOption>
            );
        });
    };

    const renderOrdinalOptions = () => {
        const options = [];
        for (let i = 1; i <= 6; i++) {
            let text: string = 'First';
            switch (i) {
                case 1:
                    text = 'First';
                    break;
                case 2:
                    text = 'Second';
                    break;
                case 3:
                    text = 'Third';
                    break;
                case 4:
                    text = 'Fourth';
                    break;
                case 5:
                    text = 'Fifth';
                    break;
                case 6:
                    text = 'Last';
                    break;
                default:
                    break;
            }
            const value = i === 6 ? -1 : i;
            options.push(
                <SelectOption key={i} value={value.toString()}>
                    {text}
                </SelectOption>
            );
        }
        return options;
    };

    const onChangeSelect = (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => {
        props.onChangeSelect && props.onChangeSelect(e, { value: parseInt(data.value, 10), dataLabel: props.dataLabel });
        props.onChange && props.onChange(e);
    };

    return renderDateSelect();
});

DateSelect.defaultProps = {
    className: '',
    style: {}
};

DateSelect.displayName = 'DateSelect';
