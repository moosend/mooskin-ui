import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';

// Components
import Box from '../Box/Box';

export const StyledFooter = styled(Box)<IBoxComponentProps>`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 15px 0;
    display: flex;
`;

StyledFooter.displayName = 'StyledFooter';

export const StyledFooterCommon = styled(Box)<IBoxComponentProps>`
    display: flex;
    align-items: center;
`;

StyledFooterCommon.displayName = 'StyledFooterCommon';

export const StyledFooterHead = styled(StyledFooterCommon)`
    justify-content: center;
    flex: 3;
`;

StyledFooterHead.displayName = 'StyledFooterHead';

export const StyledFooterBody = styled(StyledFooterCommon)`
    flex: 7;
`;

StyledFooterBody.displayName = 'StyledFooterBody';

export const StyledFooterEnd = styled(StyledFooterCommon)`
    flex: 2;
`;

StyledFooterEnd.displayName = 'StyledFooterEnd';
