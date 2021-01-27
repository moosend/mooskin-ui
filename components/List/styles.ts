import styled from 'styled-components';

// Models
import { IDivBoxComponentProps } from '../Box/model';

// Components
import Box from '../Box/Box';

export const StyledListItem = styled(Box)<IDivBoxComponentProps>`
    display: flex;
    padding: 15px;
`;

export const StyledListItemCommon = styled(Box)<IDivBoxComponentProps>`
    display: flex;
`;

export const StyledListItemHead = styled(Box)``;

export const StyledListItemBody = styled(StyledListItemCommon)`
    flex: 1;
    flex-direction: column;
    padding: 0 20px;
`;

export const StyledListItemEnd = styled(StyledListItemCommon)`
    align-items: center;
`;
