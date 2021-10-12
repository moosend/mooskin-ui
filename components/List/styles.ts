import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledListItem = styled(Box)<IBoxComponentProps>`
	display: flex;
	padding: 15px;
	background-color: ${(props) => props.palette?.backgroundColors.white || variables.backgroundColors.white};
	color: ${(props) => props.palette?.fontColors.text || variables.fontColors.text};
`;

StyledListItem.displayName = 'StyledListItem';

export const StyledListItemCommon = styled(Box)<IBoxComponentProps>`
	display: flex;
	color: inherit;
`;

StyledListItemCommon.displayName = 'StyledListItemCommon';

export const StyledListItemHead = styled(StyledListItemCommon)``;

StyledListItemHead.displayName = 'StyledListItemHead';

export const StyledListItemBody = styled(StyledListItemCommon)`
	flex: 1;
	flex-direction: column;
	padding: 0 20px;
`;

StyledListItemBody.displayName = 'StyledListItemBody';

export const StyledListItemEnd = styled(StyledListItemCommon)`
	align-items: center;
`;

StyledListItemEnd.displayName = 'StyledListItemEnd';
