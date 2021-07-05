import styled from 'styled-components';

// Models
import { ISliderComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

export const StyledSlider = styled(Box)<ISliderComponentProps>`
	-webkit-appearance: none;
	width: 100%;
	background: transparent;
	cursor: pointer;

	:focus {
		outline: none;
	}
	::-webkit-slider-runnable-track {
		border-radius: 20px;
		border: solid 1px #e2e2e2;
		background-color: #e7e7e7;
		height: 12px;
	}
	::-webkit-slider-thumb {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		border: solid 1px #9d9d9d;
		width: 33px;
		height: 33px;
		border-radius: 3px;
		background-color: #ffffff;
		border-radius: 50%;
		-webkit-appearance: none;
		margin-top: -11px;
	}
	::-moz-range-track {
		border-radius: 20px;
		border: solid 1px #e2e2e2;
		background-color: #e7e7e7;
		height: 12px;
	}
	::-moz-range-thumb {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		border: solid 1px #9d9d9d;
		width: 33px;
		height: 33px;
		border-radius: 3px;
		background-color: #ffffff;
		border-radius: 50%;
	}
	::-ms-track {
		border-radius: 20px;
		border: solid 1px #e2e2e2;
		background-color: #e7e7e7;
		height: 12px;
	}
	::-ms-thumb {
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		border: solid 1px #9d9d9d;
		width: 33px;
		height: 33px;
		border-radius: 3px;
		background-color: #ffffff;
		border-radius: 50%;
	}
`;

StyledSlider.displayName = 'StyledSlider';
