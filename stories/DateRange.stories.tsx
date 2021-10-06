import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { DateRange } from '../components/DateRange/DateRange';

import { IDateRangePickerComponentProps, IRangeSelection } from '../components/DateRange/model';
import GlobalStyle from '../components/Styled/GlobalStyles';
import { Button } from '../components/Button/Button';
import variables from '../components/_utils/globals/variables';
import { MooskinContextProvider } from '../components/Styled/MooskinContextProvider';

export default ({
	component: DateRange,
	title: 'Example/DateRange',
} as any) as Meta;

const Template: Story<IDateRangePickerComponentProps> = (args) => {
	const [range, setRange] = React.useState({
		endDate: new Date(),
		key: 'selection',
		startDate: new Date(),
	});
	const [palette, setPalette] = React.useState(variables);

	return (
		<>
			<GlobalStyle />
			<MooskinContextProvider value={{ palette }}>
				<DateRange {...args} ranges={[range]} onChange={(ranges: { [key: string]: IRangeSelection }) => setRange(ranges.selection)} />
				<Button
					onClick={() =>
						setPalette({
							...variables,
							backgroundColors: {
								...variables.backgroundColors,
								primary1: '#F42711',
								primary2: '#F42711',
								gray2: '#282828',
								white: '#313131',
								background: '#242424',
							},
							fontColors: {
								...variables.fontColors,
								primary1: '#F42711',
								primary2: '#FFF',
								text: '#FFFFFF',
								white: '#fff',
								medgray1: '#fff',
								checkboxUnselected: '#fff',
							},
							borderColors: { ...variables.borderColors, primary1: '#F42711' },
						})
					}
				>
					Change theme
				</Button>
			</MooskinContextProvider>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as IDateRangePickerComponentProps;
