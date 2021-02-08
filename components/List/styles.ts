import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import Box from '../Box/Box';

export const StyledListItem = styled(Box)<IBoxComponentProps>`
    display: flex;
    padding: 15px;
`;

StyledListItem.displayName = 'StyledListItem';

export const StyledListItemCommon = styled(Box)<IBoxComponentProps>`
    display: flex;
`;

StyledListItemCommon.displayName = 'StyledListItemCommon';

export const StyledListItemHead = styled(Box)``;

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
