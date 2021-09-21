import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ITagComponentProps, ITagsComponentProps, ITagsInputComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledTags = styled(Box)<ITagsComponentProps>`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

StyledTags.displayName = 'StyledTags';

export const StyledTag = styled(Box)<ITagComponentProps>`
	display: flex;
	padding: 1px 10px;
	border-radius: 13px;
	line-height: 1.7;
	background-color: ${(props) => props.palette?.backgroundColors.primary1 || variables.backgroundColors.primary1};
	font-size: 12px;
	color: ${(props) => props.palette?.fontColors.white || variables.fontColors.white};
	cursor: pointer;
	align-items: center;
	white-space: nowrap;
	:not(:last-child) {
		margin-right: 5px;
	}
`;

StyledTag.displayName = 'StyledTag';

export const StyledTagText = styled(Box)<ITagComponentProps>`
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	white-space: inherit;
	max-width: 70px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

StyledTagText.displayName = 'StyledTagText';

export const StyledTagClose = styled(Box)<IBoxComponentProps>`
	opacity: 0.5;
	font-family: 'Mooskin Icons Round';
	font-size: 10px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	text-align: left;
	color: ${(props) => props.palette?.fontColors.white || variables.fontColors.white};
	padding-left: 10px;
`;

StyledTagClose.displayName = 'StyledTagClose';

export const StyledTagInput = styled(Box)<ITagsInputComponentProps>`
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
	background-color: transparent;
	font-size: 14px;
	outline: none;
	border: none;
	flex: 1;
`;

StyledTagInput.displayName = 'StyledTagInput';
