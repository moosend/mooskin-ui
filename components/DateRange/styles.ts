import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledDateRange = styled(Box)<IBoxComponentProps>`
	top: 40px;
	left: 0;
	position: absolute;
	z-index: 1;
	.rdrDateRangePickerWrapper *,
	.rdrDayNumber span,
	select,
	select option {
		color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text} !important;
	}
	.rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
	.rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
	.rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
	.rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
		color: ${(props) => props.palette?.fontColors.white || variables.fontColors.white} !important;
	}
	.rdrStartEdge,
	.rdrInRange,
	.rdrEndEdge,
	.rdrDayToday .rdrDayNumber span:after {
		background-color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1} !important;
	}
	.rdrNextPrevButton,
	.rdrDateDisplayWrapper {
		background-color: ${(props) => props.palette?.backgroundColors.background || variables.backgroundColors.background} !important;
	}
	.rdrDateDisplayItemActive,
	.rdrDayEndPreview,
	.rdrDayStartPreview,
	.rdrDayInPreview {
		border-color: ${(props) => props.palette?.borderColors.primary1 || variables.borderColors.primary1} !important;
	}
	.rdrDayPassive {
		color: ${(props) => props.palette?.fontColors.medgray1 || variables.fontColors.medgray1} !important;
	}
	.rdrDefinedRangesWrapper,
	.rdrStaticRange,
	.rdrInputRangeInput {
		border-color: ${(props) => props.palette?.borderColors.gray1 || variables.borderColors.gray1} !important;
	}
	.rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
	.rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
	.rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
	.rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after,
	.rdrDefinedRangesWrapper,
	.rdrStaticRange,
	.rdrInputRangeInput,
	.rdrDateDisplayItem,
	.rdrCalendarWrapper {
		background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white} !important;
	}
`;

StyledDateRange.displayName = 'StyledDateRange';
