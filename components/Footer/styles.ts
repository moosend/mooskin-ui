import styled from 'styled-components';

import Box from '../Box/Box';
import { IBoxComponentProps } from '../Box/model';

// import variables from '../_utils/globals/variables';

export const StyledFooter = styled(Box)<IBoxComponentProps>`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 15px 0;
    display: flex;
`;

export const StyledFooterCommon = styled(Box)<IBoxComponentProps>`
    display: flex;
    align-items: center;
`;

export const StyledFooterHeader = styled(StyledFooterCommon)<IBoxComponentProps>`
    justify-content: center;
    flex: 3;
`;

export const StyledFooterBody = styled(StyledFooterCommon)<IBoxComponentProps>`
    flex: 7;
`;

export const StyledFooterEnd = styled(StyledFooterCommon)<IBoxComponentProps>`
    flex: 2;
`;
