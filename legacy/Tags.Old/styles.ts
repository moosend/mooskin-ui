import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../../components/Box/model';
import { ITagComponentProps } from './model';

// Components
import { Box } from '../../components/Box/Box';

// "CSS" variables
import variables from '../../components/_utils/globals/variables';

export const StyledTag = styled(Box)<ITagComponentProps>`
    display: flex;
    padding: 0 5px 0 10px;
    border-radius: 13px;
    background-color: ${(props) =>
        props.active ? props.theme.primary || variables.primary : props.theme.secondary || variables.secondary};
    font-family: Hind;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    color: #ffffff;
`;

export const StyledTagIcon = styled(Box)<IBoxComponentProps>`
    opacity: 0.5;
    font-family: 'Mooskin Icons Round';
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
`;
