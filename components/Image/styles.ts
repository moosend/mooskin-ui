import styled from 'styled-components';

// Models
import { IBoxImageComponentProps } from '../Box/model';

// Components
import { Box } from '../Box/Box';

export const StyledImage = styled(Box)<IBoxImageComponentProps>`
	display: block;
`;

StyledImage.displayName = 'StyledImage';
